# Project Lime - EE Summer Camp 2019 Project

Zadatak za EE Summer Camp 2019. 
Frontend je u /src, a backend u /server folderu. Korištene tehnologije: Vuejs (Vuex, Router, Buefy), Express, Sequelize i PostgreSQL.

# Overview
![](lime_bike_demo.gif)

# Setup

## Project setup and dependency installation
```
npm install
```

## Database setup
To successfully connect with a postgres server, you have to declare these .env variables. Create an empty .env file in /server folder and add values to these variables (you do not need to use "" for strings)
```
PORT=

DB_NAME=
DB_USER=
DB_PASS=
DB_HOST=
DB_DIALECT=

JWT_SECRET=
```

### Compiles and boots server 
```
npm run boot-server
```

### Seeds the database with bikes data 
```
npm run seed
```

### Compiles and hot-reloads for development (FRONTEND)
```
npm run serve
```


### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```
