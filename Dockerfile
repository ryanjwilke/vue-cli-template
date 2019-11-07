FROM node:11.15.0

# Set default locale for the environment
ENV LC_ALL C.UTF-8
ENV LANG en_US.UTF-8
ENV LANGUAGE en_US.UTF-8

WORKDIR /srv/

COPY package.json /srv/

RUN npm install yarn -g
RUN yarn install
