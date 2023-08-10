FROM node:16
WORKDIR /usr/src/server
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8700
CMD [ "node", "index.js" ]git 