# using thrid party containers

## ⭐ Installing ubuntu 22.04
```cmd
docker run -it --name my-ubuntu-image ubuntu:22.04
```

## ⭐ Start the container 

```cmd
docker start my-ubuntu-container
docker attach my-ubuntu-container
```

## ⭐ creating a docker image in cmd

```cmd
docker build --tag my-ubuntu-image - <<EOF
FROM ubuntu:22.04
RUN apt update && apt install iputils-ping --yes
EOF
```

```cmd
docker build -t my-ubuntu-image - <<EOF
FROM ubuntu:22.04
RUN apt update && apt install iputils-ping -y
EOF
```

## ⭐ Creating a data within the container

```cmd
docker run -it --rm ubuntu:22.04
```


```cmd
apt update

# install vim
apt install vim -y 

mkdir my-data

echo "hello docker" >> /my-data/demo.txt
```