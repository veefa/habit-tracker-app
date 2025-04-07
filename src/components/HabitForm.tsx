import React, { useState } from "react";
import { Frequency, Habit } from "../types/habit";
import { v4 as uuidv4 } from "uuid";

// Props: a function to handle adding the habit to the main state
interface HabitFormProps {
  onAddHabit: (habit: Habit) => void;
}

const HabitForm: React.FC<HabitFormProps> = ({ onAddHabit }) => {
  const [name, setName] = useState("");
  const [frequency, setFrequency] = useState<Frequency>("daily");
  const [color, setColor] = useState("#6495ED");

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent browser from refreshing the page
    if (!name.trim()) return;

    const newHabit: Habit = {
      id: uuidv4(),
      name: name.trim(),
      frequency,
      color,
      history: [],
    };
    onAddHabit(newHabit);

    // Reset form
    setName("");
    setFrequency("daily");
    setColor("#6495ED");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 bg-white shadow p-4 rounded-xl">
      {/* Input a habit name */}  
      <div>
        <label className="block font-semibold text-blue-950 text-sm">
          Habit Name
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 p-2 border rounded w-full"
        />
      </div>
      {/* Choose a frequency (daily, weekly, custom days) */}
      <div>
        <label className="block font-semibold text-blue-950 text-sm">
          Frequency
        </label>
        <select
          value={frequency}
          onChange={(e) => setFrequency(e.target.value as Frequency)}
          className="mt-1 p-2 border rounded w-full">
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="custom">Custom</option>
        </select>
      </div>
      {/* Select a color or icon */}
      <div>
        <label className="block font-semibold text-blue-950 text-sm">
          Color
        </label>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="mt-1 p-1 border rounded-full w-10 h-10"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-950 hover:bg-blue-900 py-2 rounded w-full text-blue-200 transition">
        Add Habit
      </button>
    </form>
  );
};

export default HabitForm;
