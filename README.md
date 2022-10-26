# Project 3 - BackEnd API - PostflopManager
Poker postflop study organizer

BackEnd API 

We have incorporated an authentication system with 3 different roles:
- U: User
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
POST   | /user/signup     | -     | -   | User Signup              | name, email, password                           | email, rol and token
POST   | /user/login      | -     | -   | User Login               | email, password                                 | email, rol and token

</p></details>

<details><summary>🙍 User Endpoints</summary>
<p>
  
 METHOD | ENDPOINT         | TOKEN | ROL | DESCRIPTION              | POST PARAMS                                     | RETURNS
-------|------------------|-------|-----|--------------------------|-------------------------------------------------|--------------------
GET    | /user/profile    | YES   | U   | View own user profile    | -                                               | user own profile
GET    | /user/:ID        | YES   | A   | View user profile by ID  |                                                 | user profile
GET    | /user/           | YES   | A   | View all users           |                                                 | list of all users
PUT    | /user/profile    | YES   | U   | Update own user profile  | name, password, email                           | Updated user data
PUT    | /user/:ID        | YES   | A   | Update user profile by ID| name, password, email, rol, active, endSuscription  | Updated user data
DELETE | /user/:ID        | YES   | A   | Delete user by ID        |                                                 | User deletion confirmation

  </p></details>
  
<details><summary>💹 Spot Endpoints</summary>
<p>  
  
METHOD | ENDPOINT         | TOKEN | ROL | DESCRIPTION              | POST PARAMS                                     | RETURNS
-------|------------------|-------|-----|--------------------------|-------------------------------------------------|--------------------
GET    | /spot            | YES   | A   | View all Spots           | -                                               | List of all spots 
GET    | /spot/allUserSpots | YES | U   | View all User Spots      | userId                                          | List of all user spots 
GET    | /spot/:ID        | YES   | U   | View one spot by ID      | userId                                          | one spot
POST   | /spot            | YES   | U   | Create new spot          | title, type                                     | created spot 
PUT    | /spot/sharedUsers | YES  | C   | Shared one spot          | email                                           | Updated spot
PUT    | /spot/:ID        | YES   | U   | Update one spot by ID    | title, type, theory, exploit                    | Updated spot
DELETE | /spot/:ID        | YES   | U   | Delete one spot by ID    | userId                                          | Spot deletion confirmation
  
</p></details>  
  
<details><summary>⚠️ Flop Endpoints</summary>
<p>  
  
METHOD | ENDPOINT         | TOKEN | ROL | DESCRIPTION              | POST PARAMS                                     | RETURNS
-------|------------------|-------|-----|--------------------------|-------------------------------------------------|--------------------
GET    | /flop/allUserFlops | YES | U   | View all User Flops      | userId                                          | List of all user flops 
GET    | /flop/:ID        | YES   | U   | View one Flop by ID      | userId                                          | one flop
POST   | /flop            | YES   | U   | Create new Flop          | title, theory, exploit, audio, image            | created flop
PUT    | /flop/:ID        | YES   | U   | Update one Flop by ID    | title, theory, exploit, audio, image            | Updated flop
DELETE | /flop/:ID        | YES   | U   | Delete one Flop by ID    | userId                                          | Flop deletion confirmation 
  
</p></details>

<details><summary>📔 Example Endpoints</summary>
<p>  
  
METHOD | ENDPOINT         | TOKEN | ROL | DESCRIPTION              | POST PARAMS                                     | RETURNS
-------|------------------|-------|-----|--------------------------|-------------------------------------------------|--------------------
GET    | /example/allUserExample | YES | U   | View all User example | userId                                        | List of all user example 
GET    | /example/:ID     | YES   | U   | View one example by ID   | userId                                          | one example
POST   | /example         | YES   | U   | Create new example       | text, imageBoard, imageHud, audio               | created example 
PUT    | /example/:ID     | YES   | U   | Update one example by ID | text, imageBoard, imageHud, audio               | Updated example
DELETE | /example/:ID     | YES   | U   | Delete one example by ID | userId                                          | Example deletion confirmation
  
</p></details>
