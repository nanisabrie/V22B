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

RUN rm -rf package.json && wget https://raw.githubusercontent.com/AyGemuy/HinataMd/master/wpackage.json -O package.json && npm install && npm update --save

COPY . .

EXPOSE 5000

CMD ["npm", "start"]
