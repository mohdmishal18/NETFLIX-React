import React, { useEffect, useState } from 'react';
import Youtube from 'react-youtube'
import axios from '../../axios'
import './RowPost.css';
import { API_KEY , imageUrl } from '../../constants/constants';

function RowPost(props) {
  const [movies , setMovies] = useState([])
  const [urlId , setUrlId] =useState("")
  const [showVideo, setShowVideo] = useState(false); // State to track whether to show the video

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

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleMovie = (id) =>
  {
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
    .then(response => {
      if(response.data.results.length !== 0)
      {
        setUrlId(response.data.results[0])
        setShowVideo(true); // Show the video when available
      }
      else
      {
        console.log('Array empty')
      }
    })
  }

  const handleCloseVideo = () => {
    setShowVideo(false); // Hide the video when the close button is clicked
  }


  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className = 'posters'>
        {
          movies.map((obj , index) => 
            <img onClick={() => handleMovie(obj.id)} key={index} className = {props.isSmall ? 'smallPoster' : 'poster'} src={`${imageUrl + obj.backdrop_path}`} />
          )
        }
      </div>
      {showVideo && (
        <>
          <button onClick={handleCloseVideo} className="close-button">X</button>
          <Youtube videoId={urlId.key} opts={opts}/>
        </>
      )}
    </div>
  );
}

export default RowPost;
