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

### Migrating the database

Migrations are included to set up the necessary database tables for the models.

Run migrations using the sequelize-cli. From the project root run:

	sequelize db:migrate

Sequelize will then create the tables in the database.

### Seeding sample data

There are seeder files in db/seeders to insert sample data into the database. To run the seed process and populate the database tables, run the following from the project root:

	sequelize db:seed:all

***You can then run app.js in node, or use nodemon to run the app locally***


## The .sequelizerc file
This is a file in the project root which lets us define where our ORM models, migration files, seeders and config file will sit in the app. By default Sequelize-cli will generate these in node_modules/.bin/.

Since we are ignoring node_modules/ via Git, we need to move these files into the main project file structure.

*Note - if you are starting a new project from scratch, you can create this file in the project root before running sequelize init. This way, Sequelize-cli will generate these folders for you when you init the project*


## Routes / Endpoints
The following routes are set up, and will return JSON data:

#### Artworks
+ **GET** all artworks: /api/v1/artworks
+ **GET** single artwork by id: /api/v1/artworks/{id}
+ **POST** new artwork: /api/v1/artworks
+ **PUT** edit a single artwork: /api/v1/artworks/{id}
+ **DELETE** a single artwork: /api/v1/artworks/{id}


#### Artists
+ **GET** all artists: /api/v1/artists
+ **GET** single artist by id: /api/v1/artists/{id}
+ **POST** new artist: /api/v1/artists
+ **PUT** edit a single artist: /api/v1/artists/{id}
+ **DELETE** a single artist: /api/v1/artists/{id}


#### Locations
+ **GET** all locations: /api/v1/locations
+ **GET** single location by id: /api/v1/locations/{id}
+ **POST** new location: /api/v1/locations
+ **PUT** edit a single location: /api/v1/locations/{id}
+ **DELETE** a single location: /api/v1/locations/{id}

The JSON response for artists and locations will return a list of their associated artwork objects.

## Controllers

The CRUD methods for each model are moved into separate controller files, stored in db/controllers. We then import each of these into the main app.js file and pass them as middleware functions into the route definitions.

This enables us to keep the main app.js file clean and readable, and groups the relevant functions for each model in a single file, so they can be easily located and edited.

The controllers use Sequelize's promise-based methods to read and write to the database, and catch any errors.


## Sequelize Models
The model files are generated for us by the Sequelize-cli. They are files which describe a database table in the form of a javascript object.

More information here:
[Creating a Model](http://docs.sequelizejs.com/manual/tutorial/migrations.html#creating-first-model-and-migration)

The models folder has an index.js file, which is where Sequelize connects to the database. So when we import the models into our other files, for example the main app.js, we require the whole /models/ directory, so that this index.js file is included, rather than just requiring the individual model files. The index.js file also contains the logic for creating the associations between the models.

**Note - the value asigned to the config variable, in index.js, differs from the default provided by Sequelize-cli, as the default path may not work on Windows 10.**

More information here:
[Var config not supported on Windows 10](https://github.com/sequelize/sequelize/issues/7418)


## Migrations
The migration files are generated using the sequelize-cli, to enable us to edit the database, add tables, columns etc.. whenever we create a new model or edit an existing one. This is a form of version control for our database.

When we generate a new model file, Sequelize-cli will automatically create the migration file for us. We can also manually generate a migration file, for example the ones to add columns for our foreign keys.

More information here:
[Migrations](http://docs.sequelizejs.com/manual/tutorial/migrations.html)


## Seeders
The seed files in db/seeders provide a series of javascript objects, with pre-defined information to insert into each database table as sample data rows.

Running the seeders via the command line will insert the data into the tables. This should be done after the database has been properly migrated.

More information here:
[Creating and running seeders](http://docs.sequelizejs.com/manual/tutorial/migrations.html#creating-first-seed)



## Associating Models and Using Sequelize Relationships
We can define associations between our models, which Sequelize will use to add refernces between our database tables. This allows us to easily include all associated records from other tables when querying a record. For example, setting up a parent-child relationship between artists and their associated artworks.

Sequelize enables us to define this using natural terms. In our example, an artist '**hasMany()**' artworks, and each artwork '**belongsTo()**' an artist. These associations are defined the the model files, and need to be defined in each direction, i.e on both the parent and child model.

Then, in our GET methods in the artist and location controller files, we add an **include** object into the findAll() call, so we can include the associated records from the other table.

***Note - older tutorials may tell you to define this in the 'classMethods' property on the model object. This will no longer work with Sequelize v4+, you need to define the associations outside of the model object. More information on this here: [Upgrade to V4](http://docs.sequelizejs.com/manual/tutorial/upgrade-to-v4.html)***
