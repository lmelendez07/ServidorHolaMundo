FROM node:latest

COPY . /user/src/hello_world

RUN git clone https://github.com/lmelendez07/ServidorHolaMundo

WORKDIR /user/src/hello_world

EXPOSE 3000

CMD [ "node", "sincrServer.js" ]
