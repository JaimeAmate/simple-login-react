# Stage 1 - build React App
FROM node:14.14.0-alpine as build
WORKDIR /app
ARG DEPLOY_ENV_ARG
ENV PATH /app/node_modules/.bin:$PATH
ENV REACT_APP_ENVIRONMENT=$DEPLOY_ENV_ARG
COPY ./package.json /app/
COPY . /app
RUN npm install --silent
RUN npm run build

# Stage 2 - Build the final image and copy the React build files
FROM nginx:1.19-alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY --from=build /app/nginx/nginx.conf /etc/nginx/conf.d
RUN rm /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]