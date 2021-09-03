import { CommonActions, useNavigation } from '@react-navigation/native';
import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Movie } from '../interfaces/movieInterface';

interface Props {
    movie: Movie;
    height?: number;
    width?: number;
}

export const MoviePoster = ({ movie, height = 420, width = 300 }: Props) => {
    
    const uri = "https://image.tmdb.org/t/p/w500" + movie.poster_path

    const navigation = useNavigation();

    return (
        <TouchableOpacity 
        onPress={ () => navigation.dispatch( CommonActions.navigate('DetailScreen', movie) ) }
        activeOpacity={0.8}
        style={{ 
                width, 
                height, 
                marginHorizontal: 2,
                paddingBottom: 20,
                paddingHorizontal: 7,
        }} >
            <View style={ stylesMoviePoster.posterShadow }>
                <Image
                    source={{ uri }}
                    style= { stylesMoviePoster.posterImage }
                />
            </View>
        </TouchableOpacity>
    )
}

const stylesMoviePoster = StyleSheet.create({
    posterShadow:{
        flex: 1,
        shadowColor: "#000",
        shadowOffset: {
        	width: 0,
        	height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,

        elevation: 9,
        borderRadius: 15
    },
    posterImage: {
        flex: 1,
        borderRadius: 15,
    },
});