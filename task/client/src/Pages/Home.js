import React from 'react';
import SearchForm from '../components/SearchForm';
import Header from '../component/Header';
import Menu from '../components/Menu';


export default function FavoritesPage(){
    return(
        <div>
        <Header></Header>
        <Menu></Menu>
        <SearchForm></SearchForm>
        </div>
    )
}