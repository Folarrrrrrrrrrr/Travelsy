import React, { useState } from 'react';
import { useActivityContext } from './ActivityContext'; // Import your context

const ActivityForm = () => {
  const [selectedActivities, setSelectedActivities] = useState([]);
  const [time, setTime] = useState('');

  // Toggle activity selection
  const toggleActivity = (activity) => {
    setSelectedActivities(prev =>
      prev.includes(activity)
        ? prev.filter(act => act !== activity)
        : [...prev, activity]
    );
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the selected activities and time data
    console.log('Selected activities:', selectedActivities);
    console.log('Time selected:', time);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h2>How much time do you have?</h2>
        <label>
          <input
            type="radio"
            value="weekend"
            checked={time === 'weekend'}
            onChange={(e) => setTime(e.target.value)}
          />
          A weekend
        </label>
        <label>
          <input
            type="radio"
            value="week"
            checked={time === 'week'}
            onChange={(e) => setTime(e.target.value)}
          />
          A week
        </label>
        <label>
          <input
            type="radio"
            value="month"
            checked={time === 'month'}
            onChange={(e) => setTime(e.target.value)}
          />
          A month
        </label>
        <label>
          <input
            type="radio"
            value="few_days"
            checked={time === 'few_days'}
            onChange={(e) => setTime(e.target.value)}
          />
          A few days
        </label>
      </div>

      <div>
        <h2>What are your interests?</h2>
        <div className="activities-grid">
          {activities.map((activity) => (
            <div
              key={activity.name}
              className={`activity ${selectedActivities.includes(activity.name) ? 'selected' : ''}`}
              onClick={() => toggleActivity(activity.name)}
              style={{ backgroundImage: `url(${activity.img})` }}
            >
              <span>{activity.name}</span>
            </div>
          ))}
        </div>
      </div>

      <button type="submit">Set</button>
    </form>
  );
};

export default ActivityForm;
