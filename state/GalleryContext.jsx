import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
  experiences: [],
};

export const GalleryContext = createContext(initialState);

export const GalleryProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  const addExperience = (experience) => {
    dispatch({
      type: 'ADD_EXPERIENCE',
      payload: experience,
    });
  };

  return (
    <GalleryContext.Provider value={{ experiences: state.experiences, addExperience }}>
      {children}
    </GalleryContext.Provider>
  );
};
