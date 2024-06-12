# Employee Work Monitoring Application

This is a FullStack application project for monitoring employee work. The application includes a frontend built with **React**, a backend using **Node.js** and **MongoDB**, and a cron job service for tracking employee status.

## Table of Contents
- [Features](#features)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)

## Features
- **Employee Table and Timeline:** Displays a list of employees and their availability timeline for a selected day.
- **Add and Remove Employees:** Allows users to add new employees and remove existing ones.
- **User Login via URL Parameters:** Logs in users through route parameters in the URL with corresponding $USER_ID in database
- **Cron Job Service:** Periodically checks the status of employees and updates the backend. Script runs every minute for specified employee ID and returns JSON mock object.

## Usage
Access the frontend application at http://localhost:3000 \
Log in using the URL parameter: http://localhost:3000/panel?user_id=123-123 

Every part of the application is started using 
```
npm start
```
in corresponding folder.

## API Endpoints
### Employees
- **GET /employees/:userId**
  - Retrieve the list of employees for a specific user.
- **POST /employees**
  - Add a new employee.
  - Request body:
    ```json
    {
      "id": "string",
      "user_id": "string",
      "email": "string"
    }
    ```
- **DELETE /employees/:id**
  - Remove an employee and all their statuses.

### Statuses
- **GET /statuses/:date**
  - Retrieve the list of statuses for a given date.

  ```json
  GET http://localhost:5000/statuses/2024-05-27
  ```

- **POST /statuses**
  - Record a status for an employee.
  - Request body:
    ```json
    {
      "hired_id": "string",
      "report": [
        {
          "id": "string",
          "value": "ACTIVE" | "INACTIVE",
          "timestamp": "string"
        }
      ]
    }
    ```
