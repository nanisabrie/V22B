FROM node:lts-buster

RUN apt-get update && \
  apt-get install -y \
  ffmpeg \
  git \
  nodejs \
  wget \
  imagemagick \
  webp && \
  apt-get upgrade -y && \
  rm -rf /var/lib/apt/lists/*

COPY package.json .

RUN npm install && npm update --save && npm install qrcode-terminal && npm install pm2 -g

COPY . .

EXPOSE 5000

RUN pm2 start index.js && pm2 save && pm2 logs --format
