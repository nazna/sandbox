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

export interface BookOrder {
  field?: BookOrderField
  direction?: OrderDirection
}

export interface IQuery {
  books(limit?: number, offset?: number, orderBy?: BookOrder): BookConnection | Promise<BookConnection>
  book(bookId: string): Book | Promise<Book>
}

export interface BookConnection {
  total?: number
  nodes?: Book[]
}

export interface Book {
  bookId?: string
  title?: string
  publishedAt?: string
}
