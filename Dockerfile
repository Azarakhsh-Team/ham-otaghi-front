FROM docker.arvancloud.ir/node:16.20.2-alpine AS build
WORKDIR /app

# Install Nx
RUN npm cache verify
RUN npm i -g @angular/cli@10.2.4

# Install dependencies
COPY package.json /app
RUN npm i

# Build the app
COPY . /app
RUN npm run build

FROM docker.arvancloud.ir/nginx:1.27.3-alpine AS server
WORKDIR /app

# Copy the nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the build output
COPY --from=build /app/dist/hamotaghi /usr/share/nginx/html

EXPOSE 80

# Run the server using nginx
CMD ["nginx", "-g", "daemon off;"]
