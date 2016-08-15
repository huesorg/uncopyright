# The Uncopyright Project
Directory application for Copyright-free works and creatives built using Node, Express, Mongo, and Handlebars.

#### Building The App

1. Install [Node](https://nodejs.org/en/download/) and [MongoDB](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/)
1. Git clone the repository:
1. Run `$ npm install` in the root directory of the cloned repository to install required dependencies


#### Setting Up A Local Database
1. Access the Mongo Shell using the following command:

  ```
  $ mongo
  ```

1. Once inside the Mongo Shell, create a new database called 'uncopyright':

  ```
  > use uncopyright
  ```

1. Create a collection (sorta like a table) to store our project data, and then exit the shell:

  ```
  > db.createCollection('uncopyright')
  > exit
  ```

1. Seed the database using the provided seeds file:
  ```
  $ mongoimport -d uncopyright -c projects --type csv --file /data/seeds.csv --headerline
  ```

#### Running The App
1. Run `npm start` from root and navigate to:
  ```
  http://localhost:3000
  ```
