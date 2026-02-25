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

---

## ⭐ Container commands

### 1) attach

This command connects your terminal to a running container’s standard input, output, and error streams. It allows you to see live output and interact with the container directly.

* Used to interact with a running container
* Shows live logs and terminal output
* Does not create a new container

Example:
`docker attach my-container`

---

### 2) commit

Creates a new Docker image from a container’s current state. Useful when you manually change a container and want to save it as an image.

* Saves container changes as a new image
* Used for custom image creation
* Not recommended for production automation

Example:
`docker commit my-container my-image:v1`

---

### 3) cp

Copies files or folders between a container and your local machine.

* Transfer files to container
* Transfer files from container
* Works even if container is stopped

Example:
`docker cp my-container:/app/file.txt ./file.txt`

---

### 4) create

Creates a new container from an image but does not start it.

* Container is created in stopped state
* Useful for advanced setups
* Requires docker start to run

Example:
`docker create --name my-container nginx`

---

### 5) diff

Shows changes made inside a container’s filesystem compared to the original image.

* Displays modified files
* Displays added files
* Displays deleted files

Example:
`docker diff my-container`

---

### 6) exec

Runs a command inside a running container.

* Used to access container terminal
* Commonly used with -it
* Does not restart container

Example:
`docker exec -it my-container bash`

---

### 7) export

Exports a container’s filesystem as a tar archive file.

* Used for backup
* Does not include image history
* Creates a .tar file

Example:
`docker export my-container > backup.tar`

---

### 8) inspect

Displays detailed information about a container in JSON format.

* Shows IP address
* Shows configuration
* Shows mounted volumes

Example:
`docker inspect my-container`

---

### 9) kill

Immediately stops a running container.

* Forcefully stops container
* Sends SIGKILL signal
* No graceful shutdown

Example:
`docker kill my-container`

---

### 10) logs

Shows logs generated by a container.

* View application output
* Supports live log streaming
* Useful for debugging

Example:
`docker logs my-container`

---

### 11) ls

Lists all containers (same as docker ps).

* Shows running containers
* Use -a to see stopped containers

Example:
`docker ls`

---

### 12) pause

Temporarily suspends all processes inside a container.

* Freezes container
* Does not stop container
* Can be resumed

Example:
`docker pause my-container`

---

### 13) port

Displays port mappings of a container.

* Shows host port
* Shows container port
* Useful for debugging network

Example:
`docker port my-container`

---

### 14) prune

Removes all stopped containers.

* Cleans unused containers
* Frees system space
* Does not remove running containers

Example:
`docker container prune`

---

### 15) rename

Changes the name of a container.

* Updates container name
* Does not affect image
* Useful for organization

Example:
`docker rename old-name new-name`

---

### 16) restart

Stops and then starts a container again.

* Useful after configuration changes
* Maintains container data

Example:
`docker restart my-container`

---

### 17) rm

Removes one or more containers.

* Deletes stopped container
* Use -f to force remove running container

Example:
`docker rm my-container`

---

### 18) run

Creates and starts a container from an image in one command.

* Most commonly used command
* Supports port mapping
* Supports environment variables

Example:
`docker run -d -p 80:80 nginx`

---

### 19) start

Starts a stopped container.

* Does not create new container
* Used after docker create

Example:
`docker start my-container`

---

### 20) stats

Displays live CPU, memory, and network usage of containers.

* Real-time monitoring
* Useful for performance analysis

Example:
`docker stats`

---

### 21) stop

Gracefully stops a running container.

* Sends SIGTERM signal
* Allows clean shutdown
* Preferred over kill

Example:
`docker stop my-container`

---

### 22) top

Shows running processes inside a container.

* Similar to Linux top command
* Displays process ID
* Helps in debugging

Example:
`docker top my-container`

---

### 23) unpause

Resumes a paused container.

* Continues execution
* Opposite of pause

Example:
`docker unpause my-container`

---

### 24) update

Updates container configuration settings.

* Change CPU limit
* Change memory limit
* Does not recreate container

Example:
`docker update --memory 500m my-container`

---

### 25) wait

Waits until a container stops and then prints its exit code.

* Useful in scripting
* Helps check success or failure

Example:
`docker wait my-container`

---


The image shows the output of `docker volume --help`. Below is a simple explanation of all Docker volume commands in paragraph form followed by clear points.

---

##  ⭐ docker volume

This command is used to manage Docker volumes. Volumes are used to store data permanently outside the container so that data is not lost when the container stops or is removed.

Usage:
`docker volume COMMAND`

---

### 1) create

This command creates a new Docker volume. It allocates storage space that containers can use to store persistent data.

* Creates a new volume
* Data stored inside volume remains even if container is deleted
* Used for databases and persistent storage

Example:
`docker volume create my-volume`

---

### 2) inspect

This command shows detailed information about one or more volumes. It displays metadata like mount point, driver, and configuration.

* Shows volume location in host machine
* Displays driver information
* Helps in debugging storage issues

Example:
`docker volume inspect my-volume`

---

### 3) ls

This command lists all Docker volumes available on your system.

* Shows existing volumes
* Useful to check available storage
* Similar to listing containers

Example:
`docker volume ls`

---

### 4) prune

This command removes all unused volumes. Unused volumes are volumes not attached to any container.

* Cleans unused storage
* Frees disk space
* Safe for active containers

Example:
`docker volume prune`

---

### 5) rm

This command removes one or more specific volumes.

* Deletes selected volume
* Cannot remove volume if it is being used by a container
* Use after container removal

Example:
`docker volume rm my-volume`

---

## ⭐ Developer Experience Considerations

* Easy/simple set up

* Iterate without needing to rebuild container image
  * Bind mount code into container
  * Use hot reloading utilities
* Include profiling and debugging tooling
  * Debug specific compose overlay file
* Execute tests within container
  * Test specific compose overlay file
* Continuous Integration
* Ephemeral environments

