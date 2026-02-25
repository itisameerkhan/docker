# FROM node:19.4-bullseye AS build

# WORKDIR /usr/src/app

# COPY package*.json ./

# RUN --mount=type=cache,target=/usr/src/app/.npm \
#     npm set cache /use/src/app/.npm && \ 
#     npm ci 

# COPY . . 

# RUN npm run build

# FROM nginxinc/nginx-unprivileged:1.23-alpine-perl
 
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# COPY --from=build /usr/src/app/dist/ /usr/share/nginx/html

# EXPOSE 5173


FROM node:22

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install 

COPY . .

EXPOSE 5173 

CMD ["npm","run","dev", "--", "--host"]