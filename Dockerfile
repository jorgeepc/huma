FROM node:10

ENV NODE_ENV production
# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY . .

RUN npm install
RUN npm install --only=dev
# If you are building your code for production
# RUN npm ci --only=production
RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]