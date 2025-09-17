# Use official Node image (LTS or Angular required version)
FROM node:22-alpine AS build

# Set working directory inside container
WORKDIR /app

# Copy package files first (for caching layers)
COPY package*.json ./

# Install dependencies
RUN npm install -g @angular/cli && npm install

# Copy rest of the app
COPY . .

# Build Angular app
RUN ng build --configuration production

# Stage 2: NGINX to serve Angular app
FROM nginx:alpine

# Copy build output to nginx html folder
COPY --from=build /app/dist/customer-survey-frontend /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
