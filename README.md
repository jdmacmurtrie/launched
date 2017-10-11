![Build Status](https://codeship.com/projects/eb1dac80-8ffc-0135-d228-221ed15e40b3/status?branch=master)
[![Code Climate](https://codeclimate.com/github/jdmacmurtrie/launched/badges/gpa.svg)](https://codeclimate.com/github/jdmacmurtrie/launched)
[![Coverage Status](https://coveralls.io/repos/github/jdmacmurtrie/launched/badge.svg?branch=master)](https://coveralls.io/github/jdmacmurtrie/launched?branch=master)

# Launched

A review site for Launch Projects.

## Getting Started

This project is a Ruby on Rails application with a React.js front end.

### Prerequisites

In order to run this application locally, you must at least have Ruby 2.3.3, Rails 5.1.0, node 4.0.0, and npm 5.3.0 installed.

```no-highlight
$ ruby -v
=> ruby 2.3.3
$ rails -v
=> Rails 5.1.4
$ node -v
=> v4.0.0
$ npm -v
=> 5.3.0
```

### Installing

To install all your gem and npm dependencies, run the following commands:

```
$ bundle
$ npm install
```

### Setting up

In order to get the application running in a development server, you will need to configure the database on your local machine.

Create your database from the `config/database.yml` file.

```
$ rake db:create
```

Run the migrations located in the `db/migrate` folder to setup your schema with the following command:

```
$ rake db:migrate
```

You should be able to open up your rails console and have access to your rails models.

### Running the development server

In order to run the rails app in a development server, run the following command in your terminal:

```
$ rails s
```

Then, in a separate terminal window, run the following command to start the webpack server:

```
$ npm start
```

## Running the tests

Capybara and RSpec are used to test the rails application, while Jasmine and Enzyme are used to test the React front end.

To run the rails spec tests, use the following commands:

```
$ rake db:test:prepare
$ rake
```

To execute the enzyme tests, run the following command (preferably in a separate terminal window):

```
$ npm test
```

## Deployment

This application is deployed using Heroku using these instructions: https://devcenter.heroku.com/articles/git

## Contributing

Feel free to contact us if you feel like contributing!

## Authors

* **Kylee Acker** - [kyjoya](https://github.com/kyjoya)
* **Dave Macmurtrie** - [jdmacmurtrie](https://github.com/jdmacmurtrie)
* **Sebastian Kopp** - [smkopp92](https://github.com/smkopp92)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hundreds of Launch Academy Alumni who endured Group Projects
