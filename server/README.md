# Server

Backend task of Inflight Dublin Technical Assessment.

1. To change the database location, edit the config.js file.
2. I was not confortable leaving all the routes open, so I created a small auth-guard to secure the endpoints behind JWT validation.
3. In a real case scenario I would've stored the user credentials encrypted (with bcryptjs) into the database and validate the provided credentials before yielding the access tokens.
4. The .env file with my encryption keys was commited to the repository for demonstrantion purposes. In the real world it would be included in the .gitignore file.

## Installation

Run the following command to get all the packages and dependencies:

```
  yarn
```

To start the server on port 5000 (default), run the following command:

```
  yarn start
```

## Endpoints

**POST** /api/auth/login

_Endpoint that provides access tokens to validate the requests in all other endpoints_

**GET** /api/flight-details

_Get a list with all flight details in database_

**GET** /api/flight-details/:id

_Get the flight details specified by the id_

**GET** /api/flight-details/status

_Get the possible status (LANDED | ON SCHEDULE | DELAYED)_

**POST** /api/flight-details

_Create a new flight details document in the database_

**PUT** /api/flight-details/:id

_Update values in the flight details specified by the id_

**DELETE** /api/flight-details/:id

_Delete the flight details specified by the id_

Flight Details data model:

```
{
  id: string,
  flightCode: string,
  flightProvider: string,
  sourcePortName: string,
  sourcePortCode: string,
  destinationPortName: string,
  destinationPortCode: string,
  scheduledArrival: date,
  scheduledDeparture: date
  status: LANDED | ON SCHEDULE | DELAYED
}
```

## Improvement points

1. Create real auth endpoints
2. Log errors in Elasticsearch
3. Create API documentation with Swagger
4. Create unit tests for the endpoints
