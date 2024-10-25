import { useState } from "react";
import React from "react";
// import { ExperienceProvider } from './state/ExperienceContext';
import "../styles/root.css";
import MainPage from "../pages/MainPage";
import { ApiProvider } from "../state/ApiContext";

import { ActivityProvider } from "../state/formContext";

function App() {
  const [count, setCount] = useState(0);

  return (
    // <ExperienceProvider>
    // </ExperienceProvider>
    <>
      <ApiProvider>
        <ActivityProvider>
          <MainPage />
        </ActivityProvider>
      </ApiProvider>
    </>
  );
}

export default App;
