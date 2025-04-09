import React, { useState } from "react";
import { Habit } from "../types/habit";
import toast from "react-hot-toast";
import { isCompletedToday } from "../assets/utils"; 
import { FaMinus } from "react-icons/fa";

interface HabitItemProps {
  habit: Habit;
  onComplete: (updatedHabit: Habit) => void; // now sends full habit
  onDelete: (id: string) => void;
}

const HabitItem: React.FC<HabitItemProps> = ({ habit, onComplete, onDelete }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    const today = new Date().toISOString().slice(0, 10);

    if (!habit.history.includes(today)) {
      const updatedHabit: Habit = {
        ...habit,
        history: [...habit.history, today],
      };

      setIsChecked(true);
      onComplete(updatedHabit);
      toast.success(`"${habit.name}" marked as complete!`);

      setTimeout(() => setIsChecked(false), 1500);
    }
  };

  return (
    <div className="flex items-start gap-3">
  {/* Minus icon OUTSIDE the card */}
  <button
    className="mt-2 text-red-400 hover:text-red-700 text-base"
    onClick={() => onDelete(habit.id)}
    title="Delete habit"
  >
    <FaMinus />
  </button>

  {/* Colored habit card */}
  <div
    className={`flex-1 space-y-2 shadow p-4 border rounded-md transition-all duration-300 ${
      isChecked ? "opacity-60 scale-95" : ""
    }`}
    style={{ backgroundColor: habit.color }}
  >
    <div className="flex justify-between items-center text-blue-950">
      <h3 className="font-medium text-lg">{habit.name}</h3>
      <input
        type="checkbox"
        checked={isCompletedToday(habit)}
        onChange={handleCheckboxChange}
        className="w-6 h-6"
      />
    </div>
    <p className="text-gray-600 text-sm">
      {isCompletedToday(habit) ? "✅ Done today" : `Frequency: ${habit.frequency}`}
    </p>
  </div>
</div>
  );
};

export default HabitItem;