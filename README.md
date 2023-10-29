# siscop Upload API
This project is a TypeScript-based REST API that utilizes MongoDB through Mongoose. It serves as a microservice for handling file uploads for the Siscop_React front-end application.

[![Author](http://img.shields.io/badge/author-@Cardosojl-blue.svg)](https://www.linkedin.com/in/jorge-luiz-cardoso-215914235/) ![GitHub license](https://img.shields.io/github/license/maitraysuthar/rest-api-nodejs-mongodb.svg)

## Description

The file upload microservice API designed for the Siscop React front-end application. Aiming to keep other functionalities and APIs free to operate in an environment isolated from upload requests, which require more resources. It is built using TypeScript, ensuring a strong and stable development environment. The API leverages the MongoDB database management system through the Mongoose library, providing an efficient and scalable data storage solution.


## Features

- Seamless file upload capabilities
- Secure data management through MongoDB
- Utilization of TypeScript for type safety and enhanced development experience
- Consistent and reliable microservice architecture



The idea of this application is to provide the relationship between the Siscop REACT application with the database MongoDB,
where the data, necessary for the perfect functioning of that application, are kept.


## Requirements
+ Mongodb database with replica set

## How to install
### Clone the project to your machine
  ```bash
  git clone https://github.com/Cardosojl/siscop_Upload_API.git ./siscopUploadApi
  ```
### Install the dependencies
  ```bash
  cd siscopUploadApi
  npm install
  ```
### Create the environment file
  ```bash
  touch .env
  ```
### Fill in the .env with the necessary information
1. PORT= (port value the API will run on)
2. HOST= (api host)
3. dbURI= (mongodb uri) ex: `mongodb://username:password@host:port/database?options`
4. SECRET= (session secret)
5. ORIGIN= (origins that will be allowed in cors. They need to be separated by commas ',')

## How to Use
### Run the application
  ```bash
  npm start
  ```

## Examples on Insomnia
