FROM ubuntu
FROM node:7

RUN mkdir -p /usr/src/client
WORKDIR /usr/src/client
# Install server dependencies
COPY package.json /usr/src/client/package.json
RUN npm install --save aurelia-cli

# Bundle client source
COPY . /usr/src/client

EXPOSE 8080
