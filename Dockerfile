FROM node:18-alpine as build

WORKDIR /app

COPY package*.json /app

RUN npm install

COPY .. /app

#ARG VITE_SYSTEM_URL
#ARG VITE_VIEW_URL
#ARG VITE_CONTEXT_PATH

RUN npm run build

# Use an official lightweight Nginx image for serving the static content
FROM nginx:alpine

# Copy the built files from the build stage to the Nginx server
COPY --from=build /app/dist /usr/share/nginx/html

# Modify the default Nginx config to add a location for the app with a prefix
RUN echo 'server { \
    listen 80; \
    location = / { \
        return 301 /movie-mate-view/; \
    } \
    location /movie-mate-view/ { \
        alias /usr/share/nginx/html/; \
        try_files $uri $uri/ /movie-mate-view/index.html; \
    } \
}' > /etc/nginx/conf.d/default.conf


# Expose port 80 to the Docker host, so can access it
EXPOSE 80

# Run nginx
CMD ["nginx", "-g", "daemon off;"]