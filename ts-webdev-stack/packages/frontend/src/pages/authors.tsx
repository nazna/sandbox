import { gql, useQuery } from '@apollo/client'
import React, { Fragment } from 'react'
import { AppBar } from '../components/app-bar'
import { Author } from '../components/author'
import { AuthorData } from '../types'

const GET_AUTHORS = gql`
  query GetAuthors {
    authors {
      authorId
      name
      avatar
    }
  }
`

function Authors() {
  const { loading, error, data } = useQuery<AuthorData>(GET_AUTHORS)

  if (loading || !data) return <p>Loading...</p>
  if (error) return <p>Error :/</p>

  return (
    <Fragment>
      <AppBar />
      <div className="max-w-screen-md mx-auto px-4 space-y-8 mt-8">
        {data.authors.map((author) => (
          <Author key={author.authorId} {...author} />
        ))}
      </div>
    </Fragment>
  )
}

export default Authors
