
## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Routes

- Pacient
    - GET /pacient/all --> Returns all pacients
    - GET /pacient/:dni --> Returns pacients with specific DNI
    - POST /pacient/create --> Creates a pacients
    - DELETE /pacient/delete/:dni --> Deletes a pacient using dni
    - PATCH /pacient/edit/:dni --> Edits an existing pacient using dni


## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).
