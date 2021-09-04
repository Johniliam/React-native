import React, { useEffect, useState } from 'react'
import movieDB from '../api/movieDB';
import { CreditsResponse, Cast } from '../interfaces/creditsInterface';
import { MovieFull } from '../interfaces/movieInterface';

interface MovieDetails {
    isLoading: boolean,
    movieFull?: MovieFull,
    cast: Cast[],
}

export const useMoviesDetails = ( movieId: number ) => {
    
    const [state, setState] = useState<MovieDetails>({
        isLoading: true,
        movieFull: undefined,
        cast: [],
    });

    const getMovieDetails = async() => {
        const movieDetailsPromise = movieDB.get<MovieFull>(`/${ movieId }`)
        const castPromise = movieDB.get<CreditsResponse>(`/${ movieId }/credits`)

        const [ movieDetailsResp, castPromiseResp ] = await Promise.all([ movieDetailsPromise, castPromise ]);

        setState({
            isLoading: false,
            movieFull: movieDetailsResp.data,
            cast: castPromiseResp.data.cast,
        })
    }

    useEffect(() => {
        getMovieDetails();
    }, [])

    //desestructurar state (isLoading, movieFull, cast) 
    return{
        ...state
    }
}