FROM node:14.11.0-alpine3.10

WORKDIR /backend

COPY . .

RUN npm i -g @nestjs/cli@7.6.0
RUN npm install -g json-server

RUN npm i
RUN npm run build

EXPOSE $PORT

CMD [ "npm", "run" , "start:prod" ]