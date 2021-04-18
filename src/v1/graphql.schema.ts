/*
 * ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class Book {
  id: string
  title: string
  description?: string
  secretWriter?: string
}

export abstract class IQuery {
  abstract book(): Book | Promise<Book>
}
