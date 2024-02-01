/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export enum BookOrderField {
  BOOK_ID = 'BOOK_ID',
  TITLE = 'TITLE',
  PUBLISHED_AT = 'PUBLISHED_AT',
}

export enum OrderDirection {
  ASC = 'ASC',
  DESC = 'DESC',
}

export class BookOrder {
  field: BookOrderField
  direction: OrderDirection
}

export abstract class IQuery {
  abstract authors(limit?: number, offset?: number): Author[] | Promise<Author[]>

  abstract author(authorId: string): Author | Promise<Author>

  abstract books(limit?: number, offset?: number, orderBy?: BookOrder): Book[] | Promise<Book[]>

  abstract book(bookId: string): Book | Promise<Book>
}

export class Author {
  authorId?: string
  name?: string
  avatar?: string
}

export class Book {
  bookId?: string
  authorId?: string
  title?: string
  image?: string
  publishedAt?: string
}
