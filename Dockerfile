FROM node:alpine
WORKDIR '/app'

COPY package.json .

RUN npm install

COPY . .


# last commands
CMD ["npm","start"]