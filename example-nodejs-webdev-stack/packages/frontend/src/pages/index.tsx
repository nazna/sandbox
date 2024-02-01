import React, { Fragment } from 'react'
import { AppBar } from '../components/app-bar'

function Index() {
  return (
    <Fragment>
      <AppBar />
      <div className="container mx-auto">
        <div className="flex justify-center items-center mt-20">example-webdev-stack</div>
      </div>
    </Fragment>
  )
}

export default Index
