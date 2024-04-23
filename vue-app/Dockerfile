FROM node:latest

RUN npm install -g @vue/cli

WORKDIR /app

COPY package*.json ./

RUN npm install vue

RUN npm install

COPY . .

EXPOSE 8080

CMD ["npm", "run", "serve"]
