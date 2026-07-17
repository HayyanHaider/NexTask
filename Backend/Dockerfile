# Use a lightweight Node.js image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package dependencies first (better Docker caching)
COPY package*.json ./
RUN npm install --production

# Copy the rest of your Express code
COPY . .

# Express usually runs on 5000 or 8080. Match this to your app's port
EXPOSE 5000

# Start your Express server
CMD ["node", "server.js"]