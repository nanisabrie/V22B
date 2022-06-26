FROM ubuntu:latest

ENTRYPOINT ["tail", "-f", "/dev/null"]

RUN apt-get update && \
  apt-get install -y \
  ffmpeg \
  imagemagick \
  nodejs \
  webp && \
  apt-get upgrade -y && \
  rm -rf /var/lib/apt/lists/*

COPY package.json .

RUN npm install && npm install qrcode-terminal && npm install pm2 -g

COPY . .

EXPOSE 5000

RUN pm2 start index.js
