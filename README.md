# PostflopManager
Poker postflop study organizer

BackEnd API to manage poker postflop studies.  We have incorporated methods to create Spots, flops, expamples...

We have incorporated an authentication system with 4 different roles:
- U: User
- S: Student
- C: Coach
- A: Admin
  
## API Install Dependencies
The first time you may want to make sure you have the dependencies installed. To do so, just go to the terminal and type:

```
$ npm install
```

## Start Local Server

```
$ nodemon index.js
```

## API Version
This is MVP 1.0

## API-Endpoints
All API Request must be prepended with /api

<details><summary>🔑 Authentication Endpoints</summary>
<p>

 METHOD | ENDPOINT         | TOKEN | ROL | DESCRIPTION              | POST PARAMS                                     | RETURNS
-------|------------------|-------|-----|--------------------------|-------------------------------------------------|--------------------
POST   | /user/signup     | -     | -   | User Signup              | name, email, password                           | email and token
POST   | /user/login      | -     | -   | User Login               | email, password                                 | email and token

</p></details>

<details><summary>🙍 User Endpoints</summary>
<p>
  
 METHOD | ENDPOINT         | TOKEN | ROL | DESCRIPTION              | POST PARAMS                                     | RETURNS
-------|------------------|-------|-----|--------------------------|-------------------------------------------------|--------------------
GET    | /user/profile    | YES   | U   | View own user profile    | -                                               | user own profile
GET    | /user/:ID        | YES   | A   | View user profile by ID  |                                                 | user profile
GET    | /user/           | YES   | A   | View all users           |                                                 | list of all users
PUT    | /user/profile    | YES   | U   | Update own user profile  | name, password, email                           | Updated user data
PUT    | /user/:ID        | YES   | A   | Update user profile by ID| name, password, email, rol                      | Updated user data
DELETE | /user/:ID        | YES   | A   | Delete user by ID        |                                                 | User deletion confirmation

  </p></details>
  
<details><summary>🧑‍🤝‍📃 Spot Endpoints</summary>
<p>  
  
METHOD | ENDPOINT         | TOKEN | ROL | DESCRIPTION              | POST PARAMS                                     | RETURNS
-------|------------------|-------|-----|--------------------------|-------------------------------------------------|--------------------
GET    | /team            | YES   | U   | View all teams           | -                                               | List of all teams 
GET    | /team/:ID        | YES   | U   | View one team by ID      | -                                               | team data
PUT    | /team/profile    | YES   | TL  | Update own user team     | name                                            | Updated team name
PUT    | /team/:ID        | YES   | O   | Update one team by ID    | name                                            | Updated team name
PATCH  | /team/addplayer  | YES   | TL  | add player to team       | userID                                          | Updated team
PATCH  | /team/deleteplayer | YES | TL  | delete player from team  | userID                                          | Updated team
DELETE | /team/profile    | YES   | TL  | Delete own team          |                                                 | Team deletion confirmation
DELETE | /team/:ID        | YES   | O   | Delete one team by ID    |                                                 | Team deletion confirmation
POST   | /team            | YES   | U   | Create new team          | name                                            | name, players, leader 
  
</p></details>  
