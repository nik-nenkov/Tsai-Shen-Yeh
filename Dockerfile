FROM nginx:1.17.1-alpine
COPY /dist/tsai /usr/share/nginx/html
