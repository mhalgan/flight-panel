FROM node:10

ARG APP_NAME=flight-panel

ENV NODE_ENV=production
ENV PORT=5000
EXPOSE 3000
EXPOSE 5000

RUN mkdir /opt/$APP_NAME

# install client
RUN mkdir /opt/$APP_NAME/client
WORKDIR /opt/$APP_NAME/client
COPY ./client/ ./
RUN yarn && \
    yarn build &&\
    yarn cache clean

# install server
RUN mkdir /opt/$APP_NAME/server
WORKDIR /opt/$APP_NAME/server
COPY server/package.json server/yarn.lock ./
RUN yarn && \
    yarn cache clean

COPY ./server ./

CMD ["yarn", "server"]