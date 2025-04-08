import React, { useState } from "react";
import HabitForm from "./components/HabitForm";
import HabitList from "./components/HabitList";
import { Habit } from "./types/habit";
import { Toaster } from "react-hot-toast";

const App: React.FC = () => {
  const [habits, setHabits] = useState<Habit[]>([]);

 // Add a new habit
 const addHabit = (newHabit: Habit) => {
  setHabits((prevHabits) => [...prevHabits, newHabit]);
};

// Handle completion: receive updated habit with modified history
const completeHabit = (updatedHabit: Habit) => {
  setHabits((prevHabits) =>
    prevHabits.map((habit) =>
      habit.id === updatedHabit.id ? updatedHabit : habit
    )
  );
};


  return (
    <div className="space-y-6 mx-auto p-4 max-w-md">
      <h1 className="p-5 font-bold text-blue-950 text-2xl">Habit Tracker</h1>
      {/* Habit Form */}
      <HabitForm onAddHabit={addHabit} />

      {/* Habit List */}
      <HabitList habits={habits} onCompleteHabit={completeHabit} />

      <Toaster position="bottom-center" reverseOrder={false} />
    </div>
  );
};

export default App;
