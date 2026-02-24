# Interacting with Docker Images

Docker works with five main objects: Images, Containers, Volumes, Networks, and the Docker system itself. You interact with all of them using a consistent command pattern:

docker <object> <action>

### ⚡ 1. Images

Images are blueprints used to create containers.

Main actions:

* List images
  docker images

* Pull image from registry
  docker pull nginx:1.25

* Build image
  docker build -t myapp:1.0 .

* Remove image
  docker rmi myapp:1.0

* Inspect image
  docker inspect nginx:1.25

### ⚡ 2. Containers

Containers are running instances of images.

Main actions:

* Run container
  docker run -d -p 8080:80 nginx

* List running containers
  docker ps

* List all containers
  docker ps -a

* Stop container
  docker stop container_name

* Start container
  docker start container_name

* Remove container
  docker rm container_name

* Execute command inside container
  docker exec -it container_name bash

* View logs
  docker logs container_name

### ⚡ 3. Volumes

Volumes store persistent data.

Main actions:

* Create volume
  docker volume create myvolume

* List volumes
  docker volume ls

* Inspect volume
  docker volume inspect myvolume

* Remove volume
  docker volume rm myvolume

### ⚡ 4. Networks

Networks allow container communication.

Main actions:

* List networks
  docker network ls

* Create network
  docker network create mynetwork

* Connect container to network
  docker network connect mynetwork container_name

* Inspect network
  docker network inspect mynetwork

* Remove network
  docker network rm mynetwork

5. System Level

Global Docker management.

* Docker version
  docker version

* Docker system info
  docker info

* Clean unused resources
  docker system prune

Simple Pattern to Remember

Every Docker object can be:

* Created
* Listed
* Inspected
* Removed

And the structure is always predictable:

docker <object> <action>

Examples:

* docker image ls
* docker container ls
* docker volume ls
* docker network ls

Once you understand this pattern, Docker becomes easy to control and systematic.

---



Images

| Action  | Command                     | Purpose                      |
| ------- | --------------------------- | ---------------------------- |
| List    | docker images               | Show all images              |
| Pull    | docker pull nginx:1.25      | Download image from registry |
| Build   | docker build -t myapp:1.0 . | Build image from Dockerfile  |
| Remove  | docker rmi myapp:1.0        | Delete image                 |
| Inspect | docker inspect nginx:1.25   | View detailed image info     |

Containers

| Action   | Command                             | Purpose                      |
| -------- | ----------------------------------- | ---------------------------- |
| Run      | docker run -d -p 8080:80 nginx      | Create and start container   |
| List     | docker ps                           | Show running containers      |
| List All | docker ps -a                        | Show all containers          |
| Stop     | docker stop container_name          | Stop container               |
| Start    | docker start container_name         | Start stopped container      |
| Remove   | docker rm container_name            | Delete container             |
| Exec     | docker exec -it container_name bash | Run command inside container |
| Logs     | docker logs container_name          | View container logs          |
| Inspect  | docker inspect container_name       | View detailed container info |

Volumes

| Action  | Command                        | Purpose             |
| ------- | ------------------------------ | ------------------- |
| Create  | docker volume create myvolume  | Create new volume   |
| List    | docker volume ls               | Show volumes        |
| Inspect | docker volume inspect myvolume | View volume details |
| Remove  | docker volume rm myvolume      | Delete volume       |

Networks

| Action  | Command                                         | Purpose                      |
| ------- | ----------------------------------------------- | ---------------------------- |
| List    | docker network ls                               | Show networks                |
| Create  | docker network create mynetwork                 | Create new network           |
| Connect | docker network connect mynetwork container_name | Connect container to network |
| Inspect | docker network inspect mynetwork                | View network details         |
| Remove  | docker network rm mynetwork                     | Delete network               |

System Commands

| Action  | Command             | Purpose                 |
| ------- | ------------------- | ----------------------- |
| Version | docker version      | Show Docker version     |
| Info    | docker info         | Show system information |
| Cleanup | docker system prune | Remove unused data      |

---

## ⭐ Image

### 1. Build Image

**Command:**

```bash
docker image build -t api-node:01 .
```

**Points:**

* Builds an image from a Dockerfile
* `-t` assigns name and tag
* `.` means current directory
* Used to create custom application images

---

### 2. Image History

**Command:**

```bash
docker image history api-node:01
```

**Points:**

* Shows image layers
* Displays size of each layer
* Helps analyze image optimization

---

### 3. Import Image

**Command:**

```bash
docker image import mybackup.tar myimage:01
```

**Points:**

* Creates image from tar file
* Used for filesystem snapshots
* Less common in regular development

---

### 4. Inspect Image

**Command:**

```bash
docker image inspect api-node:01
```

**Points:**

* Shows detailed JSON output
* Displays environment variables
* Shows image configuration and metadata

---

### 5. Load Image

**Command:**

```bash
docker image load -i myimage.tar
```

**Points:**

* Loads image from tar archive
* Used when transferring images between systems
* Restores exported images

---

### 6. List Images

**Command:**

```bash
docker image ls
```

**Points:**

* Lists all local images
* Shows repository, tag, image ID, size
* Used to check available images

---

### 7. Prune Images

**Command:**

```bash
docker image prune
```

**Points:**

* Removes unused (dangling) images
* Frees disk space
* Use `-a` to remove all unused images

---

### 8. Pull Image

**Command:**

```bash
docker image pull node:22
```

**Points:**

* Downloads image from registry
* Used to get official or public images
* Requires internet connection

---

### 9. Push Image

**Command:**

```bash
docker image push itisameerkhan/api-node:01
```

**Points:**

* Uploads image to registry
* Requires docker login
* Used for sharing or deployment

---

### 10. Remove Image

**Command:**

```bash
docker image rm api-node:01
```

**Points:**

* Deletes image from local system
* Use `-f` to force removal
* Cannot remove if container is using it

---

### 11. Save Image

**Command:**

```bash
docker image save -o api-node.tar api-node:01
```

**Points:**

* Exports image to tar file
* Used for backups
* Can move image offline

---

### 12. Tag Image

**Command:**

```bash
docker image tag api-node:01 itisameerkhan/api-node:01
```

**Points:**

* Creates new tag for image
* Used before pushing to registry
* Does not duplicate image data
