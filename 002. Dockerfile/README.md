# Dockerfile

![demo](../assets/demo10.png)

A Dockerfile is a simple text file that contains step-by-step instructions to build a Docker image. It tells Docker what base image to use, what dependencies to install, what files to copy, and how to start the application. You can think of it like a recipe for creating a Docker image. When you run the docker build command, Docker reads the Dockerfile and creates an image based on the instructions inside it.

```dockerfile
FROM alpine:latest

CMD ["echo", "Hello World"]
```

- FROM alpine:latest
  Uses Alpine Linux as the base image. Alpine is small, fast, and commonly used for lightweight containers.

- `CMD` ["echo", "Hello World"]
  Defines the default command that runs when the container starts.

## ⭐ Build Image

```dockerfile
docker build -t myimage .
```

![demo](../assets/demo11.png)

![demo](../assets/demo12.png)

![demo](../assets/demo13.png)

### ⚡ Run image

```cmd
docker run myimage
```

![demo](../assets/demo14.png)

![demo](../assets/demo15.png)

## ⭐ Running Node Image

```
docker pull node
```

![demo](../assets/demo16.png)

### ⚡ Run node image

```
docker run node
```

![demo](../assets/demo17.png)

Container created and stopped running

### ⚡ Start the container

```
docker start <container_id>
```

```
docker start 417e5a35b12a3dc620b4532df37aca87004a2acd78d4abcffa9c149738422724
```

Your Docker container is stopping because the main process inside the container is finishing execution. In Docker, a container only runs as long as its main application process is active.

![demo](../assets/demo18.png)

### ⚡ Run node image in interactive mode

```
docker run -it node
```

![demo](../assets/demo21.png)
![demo](../assets/demo19.png)

### ⚡Stop Container

```
docker stop <container_id>
```

![demo](../assets/demo20.png)

### ⚡ Start container

```
docker start <container_id>
```

![demo](../assets/demo22.png)

![demo](../assets/demo23.png)

### ⚡ Running commands inside container

```
docker exec -it <container_id> <command>
```

## ✨ Understanding Node Container

```
docker exec -it <container_id> /bin/bash
```

![demo](../assets/demo24.png)
![demo](../assets/demo25.png)

## ✨ Tag Container name

```
docker run --name <container_name> <image_name>
```

![demo](../assets/demo26.png)

## ✨ Rename Container

```
docker rename <old_name> <new_name>
```

## ✨ Delete Container

```
docker rm <container_id>
```

## ✨ Delete All Stopped Containers

```
docker container prune
```

![demo](../assets/demo27.png)

## ✨ Copying files to container

```
docker cp <source> <destination>
```

### ⚡ pull alpine image

```
docker pull alpine
```

![demo](../assets/demo28.png)

## ⚡ Create a alpine container

```
docker run -it --name alpinecontainer alpine
```

![demo](../assets/demo29.png)

![demo](../assets/demo30.png)

## ⚡ Copy file from container to host

```
docker cp <container_id>:<source> <destination>
```

![demo](../assets/demo31.png)
![demo](../assets/demo32.png)
![demo](../assets/demo33.png)

## ✨ copy file from container to local

```
docker cp <container_id>:<source> <destination>
```

```
docker cp alpinecontainer:/example.txt .
```

## ✨ Publishing docker images

![demo](../assets/demo1.gif)

i've created `Dockerfile` in vscode and added this commands

```dockerfile
FROM alpine:latest

CMD echo "Hello, World!"
```

## ✨ Build image

```
docker build -t demodocker .
```

![demo](../assets/demo34.png)
![demo](../assets/demo35.png)

login to docker cli

```
docker login
```

### ✨ Tag image

```
docker tag demodocker <dockerhub_username>/<image_name>:<tag>
```

```
docker tag demodocker itisameerkhan/demodocker:latest
```

### ✨ Push image

```
docker push itisameerkhan/demodocker:latest
```

![demo](../assets/demo36.png)
![demo](../assets/demo37.png)

### ✨ Pull image from docker hub

```
docker pull itisameerkhan/demodocker:latest
```

![demo](../assets/demo38.png)
![demo](../assets/demo39.png)
![demo](../assets/demo40.png)
