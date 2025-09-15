
## Invoice Microservice
- This is the an invoice microservice tha uses the mongodb , mongoose
---


## Folder Structure

invoice-service/
 ├── src/
 │    ├── config/             # Env vars, DB connection
 │    │    └── db.js
 │    ├── models/             # DB models (Mongoose / Sequelize / Knex)
 │    │    └── Invoice.js
 │    ├── services/           # Business logic
 │    │    └── invoice.service.js
 │    ├── controllers/        # Route handlers
 │    │    └── invoice.controller.js
 │    ├── routes/             # Express routers
 │    │    └── invoice.routes.js
 │    ├── middleware/         # Error handling, validation, auth
 │    │    └── errorHandler.js
 │    ├── app.js              # Express app setup
 │    └── server.js           # Entrypoint
 ├── tests/                   # Unit + integration tests
 ├── migrations/              # DB schema migrations
 ├── .env                     # Environment variables
 ├── package.json
 └── README.md

 ---