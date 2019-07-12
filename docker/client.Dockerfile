# Build
FROM node:10.15.3 as build

RUN mkdir -p /build
WORKDIR /build

COPY client/package.json ./
COPY client/package-lock.json ./
COPY client/src/ ./src
COPY client/.babelrc ./
COPY client/postcss.config.js ./
COPY client/tsconfig.json ./
COPY client/webpack.config.js ./
COPY client/public ./public
RUN pwd
RUN ls -l

RUN npm install


# builds client book
RUN npm run build

# Run
FROM nginx:1.15.10-alpine

RUN mkdir -p /var/www/mshopping

COPY --from=build /build/public /var/www/mshopping

COPY docker/nginx-client.conf /etc/nginx/nginx.conf