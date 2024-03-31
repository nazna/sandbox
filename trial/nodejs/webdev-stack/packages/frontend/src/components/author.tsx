import React from 'react'
import { Author as IAuthor } from '../types'

export function Author(props: IAuthor) {
  return (
    <div className="flex justify-between max-w-full w-full">
      <img className="h-16 w-16 rounded-full" src={props.avatar} />
      <div className="flex items-center">{props.name}</div>
      <div className="flex items-center overflow-hidden">
        <img className="inline-block h-8 w-8 rounded-full shadow-solid" src={props.avatar} />
        <img
          className="-ml-2 inline-block h-8 w-8 rounded-full"
          style={{ boxShadow: '0 0 0 2px #fff' }}
          src={props.avatar}
        />
        <img
          className="-ml-2 inline-block h-8 w-8 rounded-full"
          style={{ boxShadow: '0 0 0 2px #fff' }}
          src={props.avatar}
        />
        <img
          className="-ml-2 inline-block h-8 w-8 rounded-full"
          style={{ boxShadow: '0 0 0 2px #fff' }}
          src={props.avatar}
        />
      </div>
    </div>
  )
}
