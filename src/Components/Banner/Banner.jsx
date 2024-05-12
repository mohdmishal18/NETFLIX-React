import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../../axios'
import {API_KEY} from '../../constants/constants'
function Banner()
{
  const [state, setstate] = useState()
  useEffect(() =>
  {
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
    .then((response) =>
    {
      console.log(response.data.results[0])
    })
  },[])
  return (
    <div className='banner'>
        <div className='content'>
            <h1 className='title'>Movie Name</h1>
            <div className='banner_buttons'>
                <button className='button'>Play</button>
                <button className='button'>My List</button>
            </div>
            <h1 className='description'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque eos reiciendis qui molestias esse consequatur delectus vitae distinctio iure nisi.</h1>
        </div>
        <div className="fade_bottom">

        </div>
    </div>
  )
}

export default Banner