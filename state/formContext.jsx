import React, { createContext, useState, useContext, useEffect } from 'react';

// Create the context
const ActivityContext = createContext();

// Custom hook for using context
export const useActivityContext = () => useContext(ActivityContext);

// Create a provider component
export const ActivityProvider = ({ children }) => {
  const [selectedActivities, setSelectedActivities] = useState([]);
  const [time, setTime] = useState('');

  // Load the data from localStorage when the component mounts
  useEffect(() => {
    const storedActivities = JSON.parse(localStorage.getItem('selectedActivities'));
    const storedTime = localStorage.getItem('time');

    if (storedActivities) setSelectedActivities(storedActivities);
    if (storedTime) setTime(storedTime);
  }, []);

  // Store activities and time in localStorage when they change
  useEffect(() => {
    localStorage.setItem('selectedActivities', JSON.stringify(selectedActivities));
  }, [selectedActivities]);

  useEffect(() => {
    localStorage.setItem('time', time);
  }, [time]);

  return (
    <ActivityContext.Provider
      value={{
        selectedActivities,
        setSelectedActivities,
        time,
        setTime
      }}
    >
      {children}
    </ActivityContext.Provider>
  );
};
