FROM node:latest

WORKDIR /app

COPY ./package.json ./

RUN npm i

COPY ./tsconfig.json ./

COPY . .

ENV NODE_ENV=production

CMD ["npm","run","start"]