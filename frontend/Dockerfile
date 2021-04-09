# Pull official base image
FROM node:current-alpine3.10

# Set working directory
WORKDIR /app

# Add `/app/node_modules/.bin` to $PATH
ENV NODE_PATH="/usr/local/share/.config/yarn/global/node_modules:${NODE_PATH}"

# Install app dependencies
COPY package*.json ./
COPY yarn.lock ./
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent

# Add app
COPY . ./

# Start app
CMD ["yarn", "start"]
