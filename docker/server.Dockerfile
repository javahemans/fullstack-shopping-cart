FROM node:10.15.3
MAINTAINER Mansour Javaher <info@mansour.co.nz>


# RUN yum -y update; yum clean all
# RUN yum -y install epel-release; yum clean all
# ## To install node v8
# RUN curl -sL https://rpm.nodesource.com/setup_8.x | bash -
# RUN yum -y install nodejs-8.11.3 npm; yum clean all

ENV seed true 
## Had to hardcode the IP address here 
ENV MONGODB_URI mongodb://192.168.0.101:27017/
ENV SESSION_SECRET HUSHUSH
ENV NODE_ENV production
ENV PORT 8888

RUN mkdir -p /server
WORKDIR /server

COPY config ./config
COPY middleware ./middleware
COPY models ./models
COPY routes ./routes
COPY seeds ./seeds
COPY package-lock.json ./
COPY package.json ./
COPY server.js ./
RUN pwd
RUN ls -l
RUN node -v

RUN npm install

CMD ["node", "server.js"]

