FROM node:latest AS build

WORKDIR /app
 
COPY . .
 
RUN npm i

RUN npm run build

FROM nginx:alpine
 
WORKDIR /usr/share/nginx/html
 
RUN rm -rf ./*
 
COPY --from=build /app/dist .

COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 3000
 
ENTRYPOINT ["nginx", "-g", "daemon off;"]