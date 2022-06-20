# SIMPLE API

Simple RESTful API using NodeJS

## Requirements

1. For development, you will only need Node.js and a node global package, Yarn, installed in your environement.
2. XAMPP Control Panel

## Setting up the Database

Open Xampp Control Panel, and start your Apache and MySql. Access your localhost/phpymadmin in your browser. Import the database simpleapi_db.sql

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v8.11.3

    $ npm --version
    6.1.0

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g
    
## Running the project for development

    $ npm run dev
