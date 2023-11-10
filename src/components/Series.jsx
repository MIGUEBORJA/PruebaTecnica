import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'
import { AiFillPlayCircle } from 'react-icons/ai'
import NoImg from './NoImage.jpg'
import '../Styles/videos.css'

function Series() {
    const [seriesData, setSeriesData] = useState([])
    const Api = "https://api.themoviedb.org/3/discover/tv"
    const Images = 'https://image.tmdb.org/t/p/w500'

    const SerieCall = async () => {
        const Data = await axios.get(Api,{
            params: {
               api_key : '5e8e5e63ed4d6c4f34de350eb142a2be',
            }
        })
        const results = Data.data.results
        setSeriesData(results)
    } 
    useEffect(() => {
        SerieCall()
    }, [])
    console.log(seriesData)
  return (
    <Fragment>
        <div className='movies-container'>
            {seriesData.map((serie) => {
                return(
                    <div id='container'>
                        <AiFillPlayCircle color='yellow' fontSize={40} id='playIcon'/>
                        <img src={serie.poster_path ? `${Images}${serie.poster_path}` : NoImg} alt='' />
                        <h3>{serie.name}</h3>
                    </div>
                )
            })}
        </div>
    </Fragment>
  )
}

export default Series
