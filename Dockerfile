# Pull official base image
FROM node:14.14.0-alpine

# Set working directory
WORKDIR /app

# Add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# Install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@3.4.3 -g --silent

# Add app
COPY . ./

# Start app
ENTRYPOINT ["npm", "start"]