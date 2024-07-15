FROM node:22 as BUILD_IMAGE

WORKDIR /app

COPY package.json .

RUN yarn install

COPY . . 

RUN yarn build

FROM node:22 as PRODUCTION_IMAGE
WORKDIR /app 

COPY --from=BUILD_IMAGE /app/dist/ /app/dist/
EXPOSE 5173

COPY package.json .
COPY vite.config.ts .

RUN yarn install

EXPOSE 5173
CMD [ "yarn", "preview" ]



