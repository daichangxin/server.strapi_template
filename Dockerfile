# FROM alpine:3.14
FROM node:16-alpine3.14 AS BUILD_IMAGE
# couchbase sdk requirements
RUN apk add --no-cache curl bash python3 make g++ 

# install node-prune (https://github.com/tj/node-prune)
RUN curl -sfL https://gobinaries.com/tj/node-prune | bash -s -- -b /usr/local/bin

WORKDIR /usr/app

COPY package.json package-lock.json .npmrc ./

# install dependencies
RUN npm install --only=production

COPY . .

# build application
RUN npm run build

# remove development dependencies
RUN npm prune --production

# run node prune
RUN /usr/local/bin/node-prune

FROM node:16-alpine3.14

WORKDIR /usr/app

# copy from build image
COPY --from=BUILD_IMAGE /usr/app/ ./
EXPOSE 1337
CMD ["npm", "run", "deploy:container"]