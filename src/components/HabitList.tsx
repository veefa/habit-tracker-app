import React from "react";
import { Habit } from "../types/habit";
import HabitItem from "./HabitItem";

interface HabitListProps {
  habits: Habit[];
  onCompleteHabit: (updatedHabit: Habit) => void; //  Updated type
  onDeleteHabit: (id:string) => void
}

const HabitList: React.FC<HabitListProps> = ({ habits, onCompleteHabit, onDeleteHabit }) => {
  return (
    <div className="space-y-4">
      {habits.map((habit) => (
        <HabitItem
          key={habit.id}
          habit={habit}
          onComplete={onCompleteHabit} // Passes full habit
          onDelete={onDeleteHabit}
        />
      ))}
    </div>
  );
};

export default HabitList;