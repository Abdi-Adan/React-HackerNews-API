import React, {useEffect, useState} from 'react';
import { getStoryIds } from '../services/hnAPI';

export const StoriesContainer = () => {
    const [storyIds, setstoryIds] = useState([]);
  
    useEffect(() => {
      getStoryIds().then(data => setstoryIds(data));
    }, []);
  
    return (
      <p>{JSON.stringify(storyIds)}</p>
    )
  };
  