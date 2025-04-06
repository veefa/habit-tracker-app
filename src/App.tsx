import React from "react";
import HabitForm from "./components/HabitForm"; 

const App: React.FC = () => {
  return (
    <div className="flex justify-center items-center bg-gray-200 min-h-screen">
      <h1 className="font-bold text-gray-800 text-2xl"></h1>
      <HabitForm/>    
    </div>
    
  );
};

export default App;