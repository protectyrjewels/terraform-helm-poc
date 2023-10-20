FROM node:current-slim

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only production

COPY . .

EXPOSE 3030

CMD ["npm", "start"]
