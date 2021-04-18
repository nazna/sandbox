/*
 * ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class Author {
  id: string
  name: string
}

export abstract class IQuery {
  abstract author(): Author | Promise<Author>

  abstract book(): Book | Promise<Book>
}

export class Book {
  id: string
  title: string
  description?: string
}
