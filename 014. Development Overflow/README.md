## ⭐ Developer Experience Considerations

- Easy/simple set up

- Iterate without needing to rebuild container image
  - Bind mount code into container
  - Use hot reloading utilities
- Include profiling and debugging tooling
  - Debug specific compose overlay file
- Execute tests within container
  - Test specific compose overlay file
- Continuous Integration
- Ephemeral environments

---

## ⭐ Updating the code inside container without rerun again

If you don’t want to stop and recreate the container every time you change code, then your approach is wrong architecturally.

In Docker, containers are meant to be immutable. You normally do not edit code inside a running container. Instead, you mount your local code into the container using volumes. That way, when you change the code locally, the running container automatically reflects the changes

```cmd
services:
  mongo:
    image: mongo
    container_name: mongo-container
    ports:
      - "27017:27017"
    volumes:
      - mongo-volume:/data/db
    networks:
      - backend

  api-node:
    build: ./Backend
    container_name: api-node-container
    ports:
      - "8080:8080"
    environment:
      - PORT=8080
      - MONGODB_URI=mongodb://mongo:27017/users
    networks:
      - backend
    depends_on:
      - mongo

  client-react:
    build: ./Frontend
    container_name: client-react-container
    ports:
      - "5173:5173"
    environment:
      - VITE_NODE_URL=http://localhost:8080
    networks:
      - frontend
    volumes:
      - type: bind
        source: ./Frontend/
        target: /usr/src/app/
      - type: volume
        target: /usr/src/app/node_modules
      - type: bind
        source: ./Frontend/vite.config.js
        target: /usr/src/app/vite.config.js
    depends_on:
      - api-node

volumes:
  mongo-volume:
networks:
  frontend:
  backend:
```

Here see the volumes in Frontend file

```cmd
    volumes:
      - type: bind
        source: ./Frontend/
        target: /usr/src/app/
      - type: volume
        target: /usr/src/app/node_modules
      - type: bind
        source: ./Frontend/vite.config.js
        target: /usr/src/app/vite.config.js
```

Good. Now you are using the **explicit long syntax** for both bind and volume. I’ll explain clearly.

Your configuration:

```yaml
volumes:
  - type: bind
    source: ./Frontend/
    target: /usr/src/app/
  - type: volume
    target: /usr/src/app/node_modules
```

---

## What This Means

You are mounting two things:

### 1️⃣ First Mount (Bind)

```
type: bind
source: ./Frontend/
target: /usr/src/app/
```

Meaning:

- Your entire local `Frontend` folder
- Is directly connected to `/usr/src/app/` inside container
- Any file change locally reflects instantly inside container

So your React/Vite code updates live.

---

### 2️⃣ Second Mount (Named / Anonymous Volume)

```
type: volume
target: /usr/src/app/node_modules
```

Meaning:

- Docker creates its own separate storage area (volume)
- It mounts that volume at `/usr/src/app/node_modules`
- This overrides the node_modules folder coming from the bind mount

So even though you mounted the whole Frontend folder,
node_modules inside container is NOT coming from your local machine.

It is isolated.

---

## Why This Is Done

Without the second volume:

- Local node_modules (Windows) gets mounted
- Container runs Linux
- Native modules break
- You get dependency errors

With the second volume:

- Container installs dependencies inside its own node_modules
- Your local node_modules is ignored
- No OS conflict
- Clean development setup

This is the professional Docker dev pattern for Node apps.

---

## What Happens Internally (Important)

Docker mount order:

1. Bind mount entire folder
2. Then mount volume specifically at `/usr/src/app/node_modules`

The second mount overrides that subfolder.

So structure becomes:

```
/usr/src/app        → From your local machine
/usr/src/app/node_modules → From Docker volume (container only)
```

---

### Here is the complete structure for updating code locally which reflect in container as well

```yml
services:
  mongo:
    image: mongo
    container_name: mongo-container
    ports:
      - "27017:27017"
    volumes:
      - mongo-volume:/data/db

  api-node:
    build: ./Backend
    container_name: api-node-container
    ports:
      - "8080:8080"
    environment:
      - PORT=8080
      - MONGODB_URI=mongodb://mongo:27017/users
    depends_on:
      - mongo

  client-react:
    build: ./Frontend
    container_name: client-react-container
    ports:
      - "5173:5173"
    environment:
      - VITE_NODE_URL=http://localhost:8080
    depends_on:
      - api-node
    volumes:
      - type: bind
        source: ./Frontend
        target: /usr/src/app
      - type: volume
        source: node_modules
        target: /usr/src/app/node_modules

volumes:
  mongo-volume:
  node_modules:
```

#### Change need to be done in `vite.config.js`

```js
server: {
    host: "0.0.0.0",
    watch: {
      usePolling: true,
    },
  },
```

### ⚡ Binding Backend and Frontend

```yml
services:
  mongo:
    image: mongo
    container_name: mongo-container
    ports:
      - "27017:27017"
    volumes:
      - mongo-volume:/data/db
  
  api-node:
    build: ./Backend
    container_name: api-node-container
    ports:
      - "8080:8080"
    environment:
      - PORT=8080
      - MONGODB_URI=mongodb://mongo:27017/users
    depends_on:
      - mongo
    volumes:
      - ./Backend:/usr/src/app
      - /usr/src/app/node_modules

  client-react:
    build: ./Frontend
    container_name: client-react-container
    ports:
      - "5173:5173"
    environment:
      - VITE_NODE_URL=http://localhost:8080
    depends_on:
      - api-node
    volumes:
      - type: bind
        source: ./Frontend
        target: /usr/src/app
      - type: volume 
        target: /usr/src/app/node_modules
    
volumes:
  mongo-volume:
```

