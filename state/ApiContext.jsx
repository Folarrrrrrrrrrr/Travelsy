import React, { createContext, useReducer, useEffect, useContext } from 'react';
import { ApiReducer } from './ApiReducer';


export const ApiContext = createContext();

const initialState = {
  photos: [],
  loading: true,
  error: null,
};

export const ApiProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ApiReducer, initialState);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
    // fetch('')
      .then((response) => response.json())
      .then((data) => dispatch({ type: 'FETCH_SUCCESS', payload: data }))
      .catch(() => dispatch({ type: 'FETCH_ERROR' }));
  }, []);

  return (
    <ApiContext.Provider value={{ state, dispatch }}>
      {children}
    </ApiContext.Provider>
  );
};

// export default ApiContext;

export const useApiContext =()=>useContext(ApiContext)
