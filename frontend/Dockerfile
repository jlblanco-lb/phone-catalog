# Pull official base image
FROM node:14.16-alpine

# Set working directory
WORKDIR /app

# Add `/app/node_modules/.bin` to $PATH
ENV NODE_PATH="/usr/local/share/.config/yarn/global/node_modules:${NODE_PATH}"

# Install app dependencies
COPY package*.json ./
COPY yarn.lock ./
RUN yarn install
RUN yarn add react-scripts@3.4.1

# Add app
COPY . ./

# Start app
CMD ["yarn", "start"]
