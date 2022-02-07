import React, { useState, useEffect } from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifRow = ({category}) => {
  const {data: images, loading} = useFetchGifs(category)

  return (
    <>
      <h3>{category}</h3>
      {loading ?? <p>'Loading...'</p>}
      { <div className='card-grid '>
        {images.map((img) => {
          return (
            <GifGridItem {...img} key={img.id} />
          )
        })}
    </div> }
    </>
  );
};
