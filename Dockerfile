FROM node:12-alpine
WORKDIR /devopsproject_1
COPY . .
EXPOSE 3005
RUN yarn install --production
CMD ["node", "/devopsproject_1/app.js"]