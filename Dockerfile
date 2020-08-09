FROM node:latest

WORKDIR /app
COPY . .


RUN npm install
CMD ["node", "Index.js"]
EXPOSE 3020


