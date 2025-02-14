FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
RUN npm install typescript @types/node @types/express
RUN npm install --save-dev tsc-watch

COPY . .

RUN npm run build

EXPOSE 3000

CMD [ "node", "dist/bin/www.js" ]