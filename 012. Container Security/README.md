# Container Security

![demo](https://pbs.twimg.com/media/Fr1UMb2aMAEuLV6.jpg)

Container security means protecting your containerized applications from attacks, misuse, and vulnerabilities. Since containers share the host OS kernel, a security mistake can impact the entire system — especially in production

### ✨ USER root

A container defaulting to the root user means processes inside the container run with full privileges. If an attacker breaks in, they have root access inside the container — and potentially on the host if other protections are weak.

### ✨ `--privileged`

This Docker flag gives a container extra capabilities — essentially letting it do almost anything on the host system (like root on the host). It defeats a lot of container isolation.

### ✨ `--net=host`

This option makes the container share the host’s networking stack directly, instead of being isolated. That means:

No network isolation between host and container

Attackers inside container can access host network services

Understood. I will explain strictly based on the exact content shown in your image, without adding or changing concepts.

### 💛 Image Security

The slide defines Image Security with the question:
“What vulnerabilities exist in your image that an attacker could exploit?”

It then lists the following points:

* Keep attack surface area as small as possible

  * Use minimal base images (multi-stage builds are a key enabler)
  * Don’t install things you don’t need (don’t install dev deps)

This means the goal is to reduce the number of packages, tools, and components inside the image. Fewer components mean fewer possible vulnerabilities.

* Scan images

Images should be scanned to identify known vulnerabilities in the operating system packages and application dependencies.

* Use users with minimal permissions

The image should not run applications as root. Instead, it should use a user with limited permissions.

* Keep sensitive info out of images

Secrets such as passwords and API keys should not be stored inside the image.

* Sign and verify images

Images should be signed and verified to ensure they have not been tampered with.

* Use fixed image tags

  * Either pin major.minor (allows patch fixes to be integrated)
  * Pin specific image hash

This ensures predictable and secure deployments instead of using floating tags like latest.

### 💛 Runtime Security

The slide defines Runtime Security with the question:
“If an attacker successfully compromises a container, what can they do? How difficult will it be to move laterally?”

It then lists the following points:

Docker daemon (dockerd)

* Start with --userns-remap option

This maps container users to non-root users on the host, reducing risk to the host system.

Individual containers:

* Use read only filesystem if writes are not needed

If the application does not require file writes, the filesystem should be read-only.

* --cap-drop=all, then --cap-add anything you need

Remove all Linux capabilities by default and only add back the specific ones required.

* Limit cpu and memory --cpus="0.5" --memory 1024m

Restrict container resource usage to prevent abuse or exhaustion.

* Use --security-opt

  * seccomp profiles
  * apparmor profiles

