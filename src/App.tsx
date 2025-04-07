import React, { useState } from "react";
import HabitForm from "./components/HabitForm"; 
import HabitList from "./components/HabitList";
import { Habit } from "./types/habit";

const App: React.FC = () => {
  const [habits, setHabits] = useState<Habit[]>([]);

  const addHabit = (newHabit: Habit) => {
    setHabits((prevHabits) => [...prevHabits, newHabit]);
  };

  const completeHabit = (habitId: string) => {
    setHabits((prevHabits) =>
      prevHabits.map((habit) => {
        if (habit.id === habitId) {
          const today = new Date().toISOString();
          // Add today's date to the habit history
          if (!habit.history.includes(today)) {
            return { ...habit, history: [...habit.history, today] };
          }
        }
        return habit;
      })
    );
  };

  return (
    <div className="flex justify-center items-center bg-gray-200 min-h-screen">
      <h1 className="font-bold text-gray-800 text-2xl"></h1>
      {/* Habit Form */}
      <HabitForm onAddHabit={addHabit} />

      {/* Habit List */}
      <HabitList habits={habits} onCompleteHabit={completeHabit} />
 
    </div>
    
  );
};

export default App;