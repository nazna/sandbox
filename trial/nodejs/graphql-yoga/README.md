# example-graphql-yoga

> Example GraphQL application with graphql-yoga

## Design

### Authentication and Authorization

**DO NOT USE this authentication logic in PRODUCTION because this is not safe encryption strategy.**

The `signin` or `signup` mutation response a token that will use on authorization header.

### Custom Request/Response Headers

This application require custom request headers below

- `X-Egy-Client-Identifier`

On the other hand, this application send custom response headers below

- `X-Egy-Operation`
- `X-Egy-Status`

## Usage

### Example queries

Find a user

```graphql
query QueryUser {
  user(userId: "1") {
    id
    userId
    name
  }
}
```

Not found error

```graphql
query QueryUser {
  user(userId: "2") {
    id
    userId
    name
  }
}
```
