FROM debian:jessie

RUN apt-get update &&\
    apt-get install sudo &&\
    sudo apt-get -y install curl &&\
    curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash - &&\
    sudo apt-get -y install nodejs &&\
    sudo ln -s /usr/bin/nodejs /usr/local/bin/node

RUN node -v

RUN apt-get update || : && apt-get install python

WORKDIR /workspaces

COPY . /workspaces

RUN npm install

RUN npm install yarn -g
RUN npm run build

ENV TIMEZONE Africa/Narobi


EXPOSE 3003 1433 3007 5000 9721 3306

#RUN yarn server:prod

CMD [ "npm", "start" ]
