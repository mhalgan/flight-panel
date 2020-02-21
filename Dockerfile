FROM node:10

ARG PORT=5000
ARG APP_NAME=inflight-assignment

ENV NODE_ENV=local
ENV PORT=$PORT
EXPOSE $PORT

# Copy 
RUN mkdir /opt/$APP_NAME
WORKDIR /opt/$APP_NAME

COPY server/package.json server/yarn.lock ./

RUN yarn && \
    yarn cache clean

COPY ./server .

CMD ["yarn", "start"]