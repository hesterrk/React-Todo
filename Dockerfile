FROM node:latest

RUN mkdir /app/src

WORKDIR /app/src

COPY package.json .

RUN npm install

COPY . .