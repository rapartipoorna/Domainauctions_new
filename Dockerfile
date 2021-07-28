FROM node:14
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
CMD npm run development
EXPOSE 8081