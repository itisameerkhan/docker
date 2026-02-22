# Running Containers

## ⭐ `docker run` and `docker compose`

`docker run` and `docker compose` are both used to start containers, but they serve different levels of application complexity. `docker run` is a simple command used to create and start a single container directly from the terminal. You pass everything (ports, volumes, environment variables, network) manually in the command. It is good for small tasks, testing, or running one service.

`docker compose` is used when your application has multiple containers that need to work together. Instead of writing long commands, you define everything inside a `docker-compose.yml` file and start the whole application with one command. It is structured, reusable, and much better for real-world projects like MERN stack (React + Node + MongoDB).

Here is a clean comparison:

| Feature             | docker run               | docker compose                              |
| ------------------- | ------------------------ | ------------------------------------------- |
| Usage               | Runs one container       | Runs multiple containers together           |
| Configuration       | Command line arguments   | YAML file (docker-compose.yml)              |
| Best for            | Simple or single service | Full applications (frontend + backend + DB) |
| Network setup       | Manual                   | Automatic                                   |
| Reusability         | Low                      | High                                        |
| Maintainability     | Hard for big apps        | Easy and organized                          |
| Real-world projects | Not ideal                | Recommended                                 |

## ⭐ Docker run commands

* `-d`

* `--entrypoint`

* `--env`, `-e`, `--env-file`

* `--init`

* `--interactive`, `-i`, `--tty`, `-t`

* `--mount`, `--volume`, `-v`

* `--name`

* `--network`, `--net`

* `--platform`

* `--publish`, `-p`

* `--restart`

* `--rm`

---

### ⚡ `-d` (detached mode)

* Runs container in background

* No need to keep terminal open
* Container keeps running even after you close terminal

```cmd
docker run ubuntu sleep 5
```

![demo](../assets/demo51.png)

```cmd
docker run -d ubuntu sleep 5
```

![demo](../assets/demo52.png)

* Here the Terminal is free to use because the container is running in background

* After 10 seconds the container will stop

---

### ⚡ `--entrypoint`

```cmd
docker run --entrypoint echo ubuntu hello
```

#### output

```
hello
```

* `docker run` → Start a new container

* `ubuntu` → Use the Ubuntu image

* `--entrypoint echo` → Override the default entrypoint and force it to run echo

* `hello` → Argument passed to echo

---

### ⚡ `--env`, `-e`, `--env-file`

```cmd
docker run --env MY_ENV=ameer ubuntu printenv  
```

![demo](../assets/demo53.png)

* `--env MY_ENV=ameer` → Create an environment variable inside the container

* `printenv` → Command that prints all environment variables

---

### ⚡ `--init`

```cmd
docker run ubuntu ps
```

#### output

```cmd
PID TTY    TIME CMD
1 ?        00:00:00 ps
```

---

```cmd
docker run --init ubuntu ps
```

#### output

```cmd
PID TTY          TIME CMD
1 ?        00:00:00 docker-init
7 ?        00:00:00 ps
```

When we run the command `docker run ubuntu ps`, Docker starts a new Ubuntu container and executes the `ps` command inside it. The `ps` command displays the processes currently running in that container. Since containers are designed to run a single main process, the only active process inside this container is `ps` itself. That is why the output shows `PID 1` for `ps`. In Linux, the first process started inside a system (or container) always gets Process ID 1 (PID 1). After `ps` finishes executing, the container automatically stops because its main process has completed.

If we instead run `docker run --init ubuntu ps`, Docker adds a lightweight helper process called `docker-init` before starting `ps`. In this case, `docker-init` becomes PID 1, and `ps` runs as a child process under it. The purpose of `docker-init` is to properly handle system signals and clean up any child processes, ensuring stable and graceful shutdown of the container. While this may not make a visible difference for small commands like `ps`, using `--init` is considered a best practice in production environments because it improves process management and reliability inside the container.

---

### ⚡ `--interactive`, `-i`, `--tty`, `-t`

```cmd
docker run --interactive ubuntu 
```

![demo](../assets/demo54.png)

The `--interactive` (or `-i`) option in Docker keeps the container’s standard input (STDIN) open so you can interact with it. Normally, when a container runs a command, it executes and exits without waiting for user input. When you use `--interactive`, Docker allows you to type commands inside the container and receive output back in real time.

```cmd
docker run -it ubuntu 
```

* `-i` keeps input open.

* `-t` allocates a terminal interface.

* Together, `-it` gives you a proper interactive terminal session inside the container.

![demo](../assets/demo55.png)
