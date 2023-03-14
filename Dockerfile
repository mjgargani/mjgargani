FROM nginx:alpine
COPY ./docs/ /usr/share/nginx/html/mjgargani
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 8080