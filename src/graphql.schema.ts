/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export abstract class IQuery {
  abstract authors(fail: boolean): Author[] | Promise<Author[]>

  abstract books(fail: boolean): Book[] | Promise<Book[]>

  abstract movies(fail: boolean): Movie[] | Promise<Movie[]>
}

export class Author {
  id: string
  name: string
}

export class Book {
  id: string
  title: string
  author?: Author
}

export class Movie {
  id: string
  title: string
  author: Author
}
