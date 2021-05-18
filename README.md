# Paypay Challenge performance review 

> performance review web application

## Setup

- git clone https://github.com/pauljay611/performance-review-fullstack.git
- docker-compose up -d
- yarn
- yarn db:create
- yarn server:start
- yarn client:start

.env file

```
APP_DB=my-paypay
APP_DB_USERNAME=root
APP_DB_PASSWORD=my-password
API_ENDPOINT=http://localhost:8000
```

## Create Table & seeds

- see https://sequelize.org/master/manual/migrations.html

## Deployment

- server
  - heroku
  - push to sta/server pro/server
- client
  - vercel
  - push to sta/client pro/client
