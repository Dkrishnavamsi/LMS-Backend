# Use an official Node.js runtime as a parent image
FROM node:24-alpine3.21

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies for production
RUN npm install --production

# Bundle app source
COPY . .

# Your app binds to port 3000, so you need to expose it
EXPOSE 5000

# Define the command to run your app
CMD [ "npm", "start" ]