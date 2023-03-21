# Nest API Rest project
<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

## Description

This is a project built with Nest Js and React js that implements a Rest API

## Get Started

### First we need to configure our DB in Postgre (Here we used a docker to create our DB)

```bash
$ docker run --name [MYPOSTGRESDB] -p 8080:5432 -e POSTGRES_PASSWORD=[MYPASSWORD] -d postgres
```

### Running the backend app

```bash
# start
$ npm run start
```
### Running the frontend app enter in nest-app-project-front folder
```bash
#start
$npm i
$npm run start
```

## License

Nest is [MIT licensed](LICENSE).
