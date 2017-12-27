# SequelizeJS Api Demo


## Migrating
make sure Sequelize-CLI is installed globally, then you can run migrations and seeds from the app root in the command line. This saves copying everything out of the node_modules folder. Because of the paths specified in the .sequelizerc file, the new model, migration and seed files will go into the respective /db/ folders. This allows us to track them through Git.

If you create the sequelizerc file before you do the sequelize init, it will generate these folders for you.


