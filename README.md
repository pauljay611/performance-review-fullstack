# Paypay Challenge

> A performance review web application

## User Story

- User with admin role can do CRUD on users
- User with admin role can do CRUD on reviews
- User without admin role can see self reviews
- User without admin role can update reviews when being a reviewer

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

## Tech Stack

- Backend

  - express.js
  - typescript
  - sequelize
  - mysql

- Frontend

  - react.js
  - react-router
  - typescript
  - styled-components
  - redux
  - redux-observable
  - typesafe-actions

## API

- User

  - GET:/users
  - GET:/users/:id
  - POST:/user
  - PATCH:/user
  - DELETE:/user/:id

- Review

  - GET:/reviews
  - GET:/reviews/employee/:eid
  - POST:/review
  - PATCH:/review
  - DELETE:/reviews/:id

## High Level Design

![paypay](https://i.imgur.com/rlhs2h5.png)
