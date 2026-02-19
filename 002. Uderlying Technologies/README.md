# underlying technologies

![demo](https://miro.medium.com/v2/resize:fit:1400/0*tE-kMmcMG1wB7ws7.png)

## ⭐ CGroups (control groups)

Cgroups are a Linux kernel feature that limit and control how much CPU, memory, disk, and network resources a process can use. In containers, cgroups ensure that one container does not consume all system resources and affect other containers. They help in resource management and system stability.

### Key Points:

* Controls CPU, memory, disk, and network usage

* Prevents one container from using all resources

* Ensures fair resource distribution

* Provides performance stability

## ⭐ Namespaces

Namespaces provide isolation in Linux. They make a container believe it has its own separate environment, even though it shares the same operating system kernel. Namespaces isolate processes, network interfaces, file systems, and users, so containers cannot see or interfere with each other.

### Key Points:

* Provides process isolation

* Separates network, file system, and user IDs

* Makes each container appear independent

* Core technology behind container isolation

## ⭐ Union File System

A Union File System allows multiple layers of file systems to be combined into one single view. In containers, this is how Docker images are built in layers. Each layer is read-only, and when a container runs, a writable layer is added on top. This makes containers lightweight and efficient because layers can be reused.

### Key Points:

* Combines multiple layers into one file system

* Enables image layering in Docker

* Saves storage space

* Makes containers fast and lightweight

In Docker, images are built in multiple layers. For example, Layer 1 may contain the Ubuntu operating system with basic Linux files. Layer 2 adds Node.js binaries on top of Ubuntu. Layer 3 adds your application code, such as JavaScript files. Docker stacks these layers one above another. The Union File System then merges all these layers and presents them as a single unified file system to the container. Inside the container, you see normal directories like `/app`, `/usr`, `/bin`, and `/lib`. It looks like one complete system, but internally it is built using separate reusable layers.

---

### Image Layers Example

| Layer Number   | Layer Name       | What It Contains               |
| -------------- | ---------------- | ------------------------------ |
| Layer 3 (Top)  | Application Code | Your JavaScript files          |
| Layer 2        | Node.js Runtime  | Node binaries and dependencies |
| Layer 1 (Base) | Ubuntu OS        | Basic Linux system files       |

---

### How It Appears Inside the Container

| Visible Directory | Comes From Which Layer |
| ----------------- | ---------------------- |
| /app              | Application Code Layer |
| /usr              | Ubuntu / Node Layers   |
| /bin              | Ubuntu OS Layer        |
| /lib              | Ubuntu OS Layer        |

---

![dem](../assets/demo42.png)
![demo](../assets/demo43.png)