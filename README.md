# PostflopManager
Poker postflop study organizer

BackEnd API to manage online gaming leagues.  We have incorporated methods to create leagues, teams, users... add players to teams, teams to leagues... distribute trophies to the winning team... add games, trophies

We have incorporated an authentication system with 3 different roles:
- U: User
- TL: Team Leader
- O: Organizer
  
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
POST   | /user/           | -     | -   | User Signup              | name, nick, email, password                     | email and token
POST   | /user/login      | -     | -   | User Login               | email, password                                 | email and token

</p></details>

<details><summary>🙍 User Endpoints</summary>
<p>
  
 METHOD | ENDPOINT         | TOKEN | ROL | DESCRIPTION              | POST PARAMS                                     | RETURNS
-------|------------------|-------|-----|--------------------------|-------------------------------------------------|--------------------
GET    | /user/profile    | YES   | U   | View own user profile    | -                                               | user own profile
GET    | /user/:ID        | YES   | O   | View user profile by ID  |                                                 | user profile
GET    | /user/           | YES   | O   | View all users           |                                                 | list of all users
PUT    | /user/profile    | YES   | U   | Update own user profile  | name, password, email, nick, age                | Updated user data
PUT    | /user/:ID        | YES   | O   | Update user profile by ID| name, password, email, nick, age, rol           | Updated user data
DELETE | /user/profile    | YES   | U   | Delete own user account  |                                                 | User deletion confirmation
DELETE | /user/:ID        | YES   | O   | Delete user by ID        |                                                 | User deletion confirmation

  </p></details>
  
<details><summary>🧑‍🤝‍🧑 Team Endpoints</summary>
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
  
<details><summary>👨‍👨‍👧‍👦 League Endpoints</summary>
<p>  
  
 METHOD | ENDPOINT         | TOKEN | ROL | DESCRIPTION              | POST PARAMS                                     | RETURNS
-------|------------------|-------|-----|--------------------------|-------------------------------------------------|--------------------
GET    | /league          | YES   | U   | View all leagues         | -                                               | List of all leagues 
GET    | /league/:LeagueId      | YES   | U   | View one league by ID    |                                                 | League info (teams, trophy, game)
PUT    | /league/:LeagueId      | YES   | O   | Update one league by ID  | name, status, game, trophy                      | Updated league data
PATCH  | /league/addTeam/:LeagueId  | YES   | O   | add Team to league       | TeamId                                          | Updated league data
PATCH  | /league/deleteTeam:LeagueId | YES   | O   | delete Team from league  | TeamId                                        | Updated league data
DELETE | /league/:LeagueId      | YES   | O   | Delete one league by ID  |                                                 | League deletion confirmation
POST   | /league/addWinner/:LeagueId | YES   | O   | Assign winner trophy         | teamID                                          | League Status Changed
POST   | /league          | YES   | O   | Create new league        | name, Trophie, Game                             | name, teams, organizer, Trophie, game, status 
  
 </p></details>
 
<details><summary>⛷️ Game Endpoints</summary>
<p>  
  
  METHOD | ENDPOINT         | TOKEN | ROL | DESCRIPTION              | POST PARAMS                                     | RETURNS
-------|------------------|-------|-----|--------------------------|-------------------------------------------------|--------------------
GET    | /game            | YES   | U   | View all games           | -                                               | List of all games 
GET    | /game/image/:GameId | YES   | U   | View game image       | -                                               | Game image 
GET    | /game/:GameId       | YES   | U   | View game by ID       | -                                               | Game info
PUT    | /game/:GameId       | YES   | O   | Update game by ID     | name, category, company, image                  | Updated game data
DELETE | /game/:GameId       | YES   | O   | Delete game by ID     |                                                 | game deletion confirmation
POST   | /game            | YES   | O   | Create new game          | name, category, company, image                  | game creation confirmation
  
  </p></details>  
  
<details><summary>🏆 Trophy Endpoints</summary>
<p> 
  
METHOD | ENDPOINT         | TOKEN | ROL | DESCRIPTION              | POST PARAMS                                     | RETURNS
-------|------------------|-------|-----|--------------------------|-------------------------------------------------|--------------------
GET    | /trophy          | YES   | U   | View all trophies        | -                                               | List of all trophies 
GET    | /trophy/:TrophyId      | YES   | U   | View trophy by ID        |                                                 | Trophy info 
GET    | /trophy/image/:TrophyId      | YES   | U   | View image trophy by ID    |                                                 | Trophy image 
PUT    | /trophy/:TrophyId      | YES   | O   | Update trophy by ID      | name, image                                     | Updated trophy data
DELETE | /trophy/:TrophyId      | YES   | O   | Delete trophy by ID      |                                                 | Trophy deletion confirmation
POST   | /trophy          | YES   | O   | Create new trophy        | name, image                                           | Troophy creation confirmation
  
   </p></details> 
