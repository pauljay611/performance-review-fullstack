# Paypay Challenge

> A performance review web application

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

## Pages

- Admin

  - employees
  - reviews

- Employee

  - reviews
  - feedbacks

## Functional Requirements

## Non-Functional Requirement

## User Story

- User with admin role can do CRUD on users
- User with admin role can do CRUD on reviews
- User without admin role can see personal reviews
- User without admin role can update reviews when being a reviewer

## User flow

1. User login with username and password
2. Direct to admin or employee page with different role
3. Admin: can link to employees/reviews page for each user story
4. Employee: can link to feedbacks/reviews page for each user story
5. Click button to logout

## High Level Design

![paypay](https://i.imgur.com/rlhs2h5.png)
