FROM node:13.12.0-alpine as build
WORKDIR /app
COPY ./ /app/
RUN npm install
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY --from=build /app/nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]
