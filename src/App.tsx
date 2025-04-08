import React, { useState } from "react";
import HabitForm from "./components/HabitForm"; 
import HabitList from "./components/HabitList";
import { Habit } from "./types/habit";
import { Toaster } from "react-hot-toast";

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
    <div className="space-y-6 mx-auto p-4 max-w-md">
      <h1 className="p-5 font-bold text-gray-800 text-2xl">Habit Tracker</h1>
      {/* Habit Form */}
      <HabitForm onAddHabit={addHabit} />

      {/* Habit List */}
      <HabitList habits={habits} onCompleteHabit={completeHabit} />
  
      <Toaster
        position="bottom-center"
        reverseOrder={false}
      />
    </div>
    
  );
};

export default App;