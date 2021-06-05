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
  - POST:/users
  - PATCH:/users/:id
  - DELETE:/user/:id

- Review

  - GET:/reviews
  - GET:/reviews/employees/:eid
  - GET:/reviews/reviewers/:rid
  - POST:/reviews
  - PATCH:/reviews/:id
  - DELETE:/reviews/:id

## Pages

- Admin

  - employees
  - reviews

- Employee

  - reviews
  - feedbacks

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

![paypay](https://i.imgur.com/J53UFAa.png)

![paypay](https://i.imgur.com/kVUDDaW.png)

## Optimization

1. React virtualize for long list
2. Add page count and search key query for api to search big data
3. Debounce input
4. Form validator hooks
5. add checking input format and error checking
6. delete -> archieve update
