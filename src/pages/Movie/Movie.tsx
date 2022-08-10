import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import * as ApiTmbService from '../../services/apiTmdb'
import MovieInterface from "../../models/interfaces/Movie";
import VideoFrame from "../../components/atoms/VideoFrame";
import Header from "../../components/molecules/Header";
import { Grid } from "@mui/material";

function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState<MovieInterface>()
  const [videoKey, setVideoKey] = useState<string>()

  const imgUrl = 'https://image.tmdb.org/t/p/original'

  useEffect(() => {
    if (!id || movie) return
    ApiTmbService.getMovieDetails(+id)
      .then((response) => {
        setMovie(response)
        const video = response.videos && response.videos.results && response.videos.results[0]
        video && setVideoKey(video.key)
      })
  }, [id, movie])

  return <>
  <Header></Header>
      <Grid className="movie-text">
        <h1 className="movie-title">{movie && movie.title}</h1>
        <h5 className="movie-desc">{movie && movie.overview}</h5>
      </Grid>
      <Grid >
        {videoKey && <VideoFrame width='100%' height="1080p" videoKey={videoKey + ''} />}
        <img className="unavailable" src="https://t.ctcdn.com.br/jwvehjEb4GgEuEWirVt81ULFvEM=/1400x788/smart/filters:format(webp)/i525197.png" alt="" />
      </Grid>
  </>
}


export default Movie