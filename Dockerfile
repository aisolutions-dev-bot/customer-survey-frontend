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

ARG GIT_BRANCH=$GIT_BRANCH

# Build Angular app
RUN if [ "$GIT_BRANCH" = "staging" ]; then \
  npm run build:staging; \
  else \
  npm run build:prod; \
  fi


# Stage 2: NGINX to serve Angular app
FROM nginx:alpine

# Copy build output to nginx html folder
COPY --from=build /app/dist/customer-survey-frontend/browser /usr/share/nginx/html

# Replace default nginx config with custom one
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 (Railway will map $PORT -> 80)
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
