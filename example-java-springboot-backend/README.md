# example-spring-backend

> Example backend application on Spring Boot + Doma

## Environment

- macOS Monterey 12.0.1
- Java 17 (Temurin 17)
- IntelliJ IDEA 2021.2.3 (Ultimate Edition)
- MySQL 8.0.27

## Development

### Setup

```shell
brew services list
brew services start mysql
```

### Check

Find a user

```shell
curl -sS http://localhost:8080/api/v1/users/1
```

Create a user

```shell
curl -sS http://localhost:8080/api/v1/users -X POST -H 'Content-Type: application/json' --data '{"name": "test_name"}'
```

### Swagger

You can see API documentation on Swagger while the development server is running.

- [Swagger](http://localhost:8080/swagger)


## References

- [Doma](https://doma.readthedocs.io/en/latest/)
