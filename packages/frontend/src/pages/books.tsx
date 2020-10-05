import { gql, useQuery } from '@apollo/client'
import React, { Fragment } from 'react'
import { AppBar } from '../components/app-bar'
import { Book } from '../components/book'
import { BookData } from '../types'

const GET_BOOKS = gql`
  query GetBooks {
    books {
      bookId
      authorId
      title
      image
      publishedAt
    }
  }
`

function Books() {
  const { loading, error, data } = useQuery<BookData>(GET_BOOKS)

  if (loading || !data) return <p>Loading...</p>
  if (error) return <p>Error :/</p>

  return (
    <Fragment>
      <AppBar />
      <div className="max-w-screen-md mx-auto px-4 space-y-8 mt-8">
        {data.books.map((book) => (
          <Book key={book.bookId} {...book} />
        ))}
      </div>
    </Fragment>
  )
}

export default Books
