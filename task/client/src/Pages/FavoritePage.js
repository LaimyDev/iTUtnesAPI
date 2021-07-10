import React from 'react';
import Menu from '../components/Menu';
import Header from '../component/Header';
import Favorite from '../components/Favorite';

export default function FavoritesPage(){
    return(
        <div>
        <Header></Header>
        <Menu></Menu>
        <Favorite></Favorite>
        </div>
    )
}