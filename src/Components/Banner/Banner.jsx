import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../../axios'
import {API_KEY , imageUrl} from '../../constants/constants'

function Banner()
{
  const [movie, setMovie] = useState()
  useEffect(() =>
  {
    const random = Math.floor(Math.random() * 18)

    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
    .then((response) =>
    {
      console.log(response.data.results[0])
      setMovie(response.data.results[random])
    })
  },[])
  const truncateOverview = (overview, maxLength) => {
    if (overview && overview.split(' ').length > maxLength) {
      return overview.split(' ').slice(0, maxLength).join(' ') + '...'
    }
    return overview
  }
  return (
    <div
    style={{backgroundImage : `url(${movie ? imageUrl + movie.backdrop_path : ""})`}}
    className='banner'>
        <div className='content'>
            <h1 className='title'>{movie ? movie.title : ""}</h1>
            <div className='banner_buttons'>
                <button className='button'>Play</button>
                <button className='button'>My List</button>
            </div>
            <h1 className='description'>{movie ? truncateOverview(movie.overview, 60) : ""}</h1>
        </div>
        <div className="fade_bottom">

        </div>
    </div>
  )
}

export default Banner