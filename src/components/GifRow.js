import React, { useState, useEffect } from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
import PropTypes from 'prop-types';

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

GifRow.propTypes = {
  category: PropTypes.string.isRequired
}