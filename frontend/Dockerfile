FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# React's default development server port
EXPOSE 3000

# Start the React dev server
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "3000"]