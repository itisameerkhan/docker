![demo](https://towardsdatascience.com/wp-content/uploads/2021/07/02kTtTMtCParUPJB8-scaled.jpg)

# Why Not Just Use docker compose?

- No way to deploy without downtime (have to stop/start) or easily roll back
- No way to handle credentials
- Can only be used on a single host
- Historical reasons:
  - No support for heath-checks
  - Docker-compose was a separate binary

---

Docker Swarm is Docker’s built-in container orchestration tool that allows you to manage multiple Docker machines as a single cluster. Normally, Docker runs containers on one system. But in real production environments, applications need to run on multiple servers for high availability, scaling, and fault tolerance. Docker Swarm solves this by grouping several machines (called nodes) into one cluster and managing containers across them automatically.

In simple terms, instead of manually running and managing containers on different servers, you define a service and Swarm distributes containers across machines, balances traffic, and restarts containers if they fail. It maintains a “desired state.” For example, if you say you want 3 replicas of your backend, Swarm ensures that 3 containers are always running. If one crashes, it automatically creates a new one.

Important points about Docker Swarm:

* A node is a machine in the cluster. There are two types: Manager nodes (control the cluster and make decisions) and Worker nodes (run containers).

* In Swarm, you create services instead of running containers directly. A service defines the image, number of replicas, ports, and network settings.
* Swarm supports scaling using a simple command like setting replicas to 3 or 5. It automatically distributes them across nodes.
* It includes built-in load balancing, meaning traffic is automatically shared across replicas.
* It provides self-healing. If a container or node fails, Swarm reschedules containers automatically.
* It works well for small to medium production systems and is easier to learn compared to Kubernetes.

# Deploying to a Single Node Swarm

- Create Virtual Machine

- Ensure firewall allows inbound traffic
- Install docker [get.docker.com](https://get.docker.com)
- Use DOCKER_HOST to connect
- Docker swarm init
- Docker compose mods:
  - Add health checks
  - Add deployment strategy
  - Add secrets (+ read secrets from file)
- Build + push images to docker hub
- Deploy stack
