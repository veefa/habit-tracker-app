import React, { useState } from "react";
import HabitForm from "./components/HabitForm"; 
import HabitList from "./components/HabitList";
import { Habit } from "./types/habit";

const App: React.FC = () => {
  const[habits, setHabits] = useState<Habit[]>([]);

  const addHabit = (newHabit: Habit) => {
    setHabits((prevHabits) => [...prevHabits, newHabit]);
  }
  const completeHabit = (habitId: string) => {
    setHabits((prevHabits) => 
      prevHabits.map((habit) => {
        if (habit.color === habitId) {
          const today = new Date().toISOString();

          if (!habit.history.includes(today)) {
            return {...habit, history: [...habit.history,today]};
          }
        }
        return habit;

      })
    )
  }


  return (
    <div className="flex justify-center items-center bg-gray-200 min-h-screen">
      <h1 className="font-bold text-gray-800 text-2xl"></h1>
      <HabitForm onAddHabit={addHabit}/> 
      <HabitList habits={habits} onCompleteHabit={completeHabit}/>   
    </div>
    
  );
};

export default App;