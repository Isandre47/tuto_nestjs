FROM node:alpine
LABEL authors="nuand"

WORKDIR usr/app

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build

CMD ["npm", "run", "start:prod"]
