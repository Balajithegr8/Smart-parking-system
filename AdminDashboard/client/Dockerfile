FROM node:18.18.2

WORKDIR /app

COPY package*.json .

RUN npm ci

COPY . .

EXPOSE 3000

CMD ["npm", "start"]