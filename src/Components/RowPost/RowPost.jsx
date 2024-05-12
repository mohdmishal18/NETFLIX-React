import React, { useEffect, useState } from 'react';
import axios from '../../axios'
import './RowPost.css';
import { API_KEY , imageUrl } from '../../constants/constants';

function RowPost(props) {
  const [movies , setMovies] = useState([])
  useEffect(() =>
  {
    axios.get(props.url)
    .then(response => 
    {
      console.log(response.data)
      setMovies(response.data.results)
    })
    .catch(err => 
    {
      alert('Network Error')
    })
  },[])

  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className = 'posters'>
        {
          movies.map((obj , index) => 
            <img key={index} className = {props.isSmall ? 'smallPoster' : 'poster'} src={`${imageUrl + obj.backdrop_path}`} />
          )
        }
      </div>
    </div>
  );
}

export default RowPost;
