import { gql } from 'urql';
import * as Urql from 'urql';
type Maybe<T> = T | null;
type InputMaybe<T> = Maybe<T>;
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

type Comment = {
  readonly __typename?: 'Comment';
  readonly body: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly user: Maybe<User>;
};

type Query = {
  readonly __typename?: 'Query';
  readonly comment: Comment;
  readonly user: User;
};


type QueryCommentArgs = {
  id: Scalars['String'];
};


type QueryUserArgs = {
  id: Scalars['String'];
};

type User = {
  readonly __typename?: 'User';
  readonly comments: Maybe<ReadonlyArray<Comment>>;
  readonly id: Scalars['ID'];
  readonly name: Scalars['String'];
};


 const ExampleOperation = gql`
    query ExampleOperation {
  user(id: "1") {
    id
    name
  }
}
    `;

export function useExampleOperationQuery(options: Omit<Urql.UseQueryArgs<ExampleOperationQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<ExampleOperationQuery>({ query: ExampleOperation, ...options });
};
type ExampleOperationQueryVariables = Exact<{ [key: string]: never; }>;


type ExampleOperationQuery = { readonly __typename?: 'Query', readonly user: { readonly __typename?: 'User', readonly id: string, readonly name: string } };
