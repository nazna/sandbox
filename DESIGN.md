# DESIGN

## Bird's Eye View

### Technology Stack

## Code Map

## GraphQL Schema

### Query

### Pagination

### Mutation

## Implementation Notes

### About `fieldResolverEnhancers`

/src/app.module.ts に記述されている `fieldResolverEnhancers` オプションで `filters` を設定していないと Field resolver が例外を発生させたときに対応する Exception Filters が機能しない。

## References

- [Exception filters](https://docs.nestjs.com/graphql/other-features#exception-filters)
- [axios の error handling](https://qiita.com/yuta-katayama-23/items/5b8bf72236eec9cadf41)
- [Why aren't NestJS GraphQL validation errors placed in the error message field?](https://stackoverflow.com/questions/61045881/why-arent-nestjs-graphql-validation-errors-placed-in-the-error-message-field)
