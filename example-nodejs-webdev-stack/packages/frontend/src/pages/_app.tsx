import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { AppProps } from 'next/app'
import { Fragment } from 'react'
import '../styles.css'

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
})

function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </Fragment>
  )
}

export default App
