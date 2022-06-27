FROM node:lts-buster

RUN apt-get update && \
  apt-get install -y \
  ffmpeg \
  imagemagick \
  webp && \
  apt-get upgrade -y && \
  rm -rf /var/lib/apt/lists/*

COPY package.json .

RUN npm install && npm install qrcode-terminal && npm install pm2 -g

COPY . .

EXPOSE 5000

ENTRYPOINT ["tail", "-f", "/dev/null"]

RUN make; exit 0

RUN pm2 start index.js
