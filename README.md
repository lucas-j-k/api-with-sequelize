# Sequelize Api Demo

## Overview

This is a simple JSON based REST API, built with Node, Express and the Sequelize ORM. It uses Artists, Artworks and Museum locations as sample information.


## Setup
* What is needed to make the repo run once downloaded?

Clone the repo and install dependencies via NPM:

	npm install

Install Sequelize-cli globally, so that you can run Sequelize command line operations from the project root. This will also allow us to have our models, migrations and seeders stored in the db/ folder rather than inside node_modules

	npm install -g sequelize-cli

By default, the app looks for a MySQL database on localhost called 'art-demo'. This can be changed in the db/config/config.json file, by editing the credentials. The default 'root' and 'null' are supplied as placeholders for the logins, you will need to update these to your localhost database credentials.

### Environments
When connecting to the database, Sequelize will use the 'development' environment by default, unless it detects an environment variable telling it otherwise (such as a custom ENV variable on a Heroku instance). This is defined in db/models/index.js, where the connection to the database is made:

	var env = process.env.NODE_ENV || 'development';

This allows us to easily switch between connecting with a test database running on localhost, and a production database e.g one attached to a Heroku dyno.


## The .sequelizerc file
This is a file in the project root which lets us define where our ORM models, migration files, seeders and config file will sit in the app. By default Sequelize-cli will generate these in node_modules/.bin/.

Since we are ignoring node_modules/ via Git, we need to move these files into the main project file structure.

*Note - if you are starting a new project from scratch, you can create this file in the project root before running sequelize init. This way, Sequelize-cli will generate these folders for you when you init the project*


## App Structure

### Routes


### Controllers


## Migrations
* Explain what the migrations do and how to run them in the CLI


## Seeding Data
* What do the Sequelize seed files do, and how to run them


## Sequelize Models
* How to define sequelize models and use them in routes / controllers




## Associating Models and Using Sequelize Relationships
* How do we define relationships between models, how do we add the references between tables in the database during a migration, how do we display related database records as part of the JSON response, e.g displaying an array of artworks associated with an artist.



## Misc. Sequelize Info
* Any other relevant Sequelize notes that might be useful in future


## Helpful links
Links below to some reference material and tutorials on Sequelize:

