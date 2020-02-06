# What image do you want to start building on?
FROM node:current-alpine

# Make a folder in your image where your app's source code can live
RUN mkdir -p /service-reviews

# Tell your container where your app's source code will live
WORKDIR /service-reviews

# What source code do you what to copy, and where to put it?
COPY . /service-reviews

# Does your app have any dependencies that should be installed?
RUN npm install

# What port will the container talk to the outside world with once created?
EXPOSE 8080

# Seed app
# CMD ["apk", "add", "mongodb-tools"]

# Seed app
# CMD ["npm", "run", "seed-reviews"]

# Build app
CMD ["npm", "run", "build-reviews"]

# Start app
CMD ["npm", "run", "start-reviews"]