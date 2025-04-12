import React from 'react'
import { Book as IBook } from '../types'

export function Book(props: IBook) {
  return (
    <div className="flex max-w-full w-full">
      <div
        className="w-1/4 flex-none bg-cover rounded-l overflow-hidden"
        style={{ backgroundImage: `url(${props.image})` }}
        title={props.title}
      />
      <div className="w-full border border-gray-400 bg-white rounded-r p-4 flex flex-col justify-between leading-normal">
        <p className="text-sm text-gray-600 flex items-center">
          <svg width="20px" height="20px" viewBox="0 0 20 20" fill="currentColor" className="mr-2">
            <path
              fillRule="evenodd"
              d="M9.243 3.03a1 1 0 01.727 1.213L9.53 6h2.94l.56-2.243a1 1 0 111.94.486L14.53 6H17a1 1 0 110 2h-2.97l-1 4H15a1 1 0 110 2h-2.47l-.56 2.242a1 1 0 11-1.94-.485L10.47 14H7.53l-.56 2.242a1 1 0 11-1.94-.485L5.47 14H3a1 1 0 110-2h2.97l1-4H5a1 1 0 110-2h2.47l.56-2.243a1 1 0 011.213-.727zM9.03 8l-1 4h2.938l1-4H9.031z"
              clipRule="evenodd"
            />
          </svg>
          Category
          <svg width="20px" height="20px" viewBox="0 0 20 20" fill="currentColor" className="ml-4 mr-2">
            <path
              fillRule="evenodd"
              d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
              clipRule="evenodd"
            />
          </svg>
          {props.publishedAt.split(' ').slice(0, 4).join(' ')}
        </p>
        <div className="text-gray-900 font-bold text-xl my-2">{props.title}</div>
        <div className="flex items-center">
          <img className="w-10 h-10 rounded-full mr-4" src={props.image} alt="Avatar of Author Name" />
          <div className="text-sm">
            <p className="text-gray-900 leading-none">Author Name</p>
          </div>
        </div>
      </div>
    </div>
  )
}
