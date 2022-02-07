import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifRow } from './components/GifRow';

const GifExpertApp = ({ defaultCategories = []}) => {
    const [categories, setCategory] = useState(defaultCategories)
    const onSubmitForm = value => setCategory([value, ...categories])

    return (
        <>
            <h2>Gif Expert App</h2>
            <AddCategory onSubmit={onSubmitForm}/>
            <hr />
            <ol>
            {
                categories.map((category, i) => (
                    <li className="" key={'category-'+i}><GifRow category={category}/></li>
                ))
            }
            </ol>    
        </>
    );
};


export default GifExpertApp;
