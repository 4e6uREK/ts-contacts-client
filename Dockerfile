FROM node:22-alpine as builder

WORKDIR /app

COPY package*.json ./

ENV REACT_APP_CONTACTS_SERVICE_ADDRESS=localhost:5858

RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine

COPY --from=builder /app/build /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
