import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'
import {AiFillPlayCircle} from 'react-icons/ai'
import '../Styles/videos.css'
import jsonData from '../data/sample.json'

function Movies() {
  return (
    <Fragment>
      <div className='movies-container'>
      <h1>PELICULAS</h1>
      <div className='container'>
        {jsonData.entries.map((entry, index) => (
          <div key={index} >
            <h3>{entry.title}</h3>
            <p>Release Year: {entry.releaseYear}</p>
            <img
              src={entry.images['Poster Art'].url}
              alt={entry.title}
              width={entry.images['Poster Art'].width}
              height={entry.images['Poster Art'].height}
            />
          </div>
        ))}
      </div>
    </div>
    </Fragment>
  )
}

export default Movies
