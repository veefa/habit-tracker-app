import React, { useState } from "react";
import { Habit } from "../types/habit";
import toast from "react-hot-toast";

// Habit obj and function to mark as completed
interface HabitItemProps {
    habit: Habit;
    onComplete: (habitId: string) => void;
}
 
// Displays the habit name and frequency
const HabitItem: React.FC<HabitItemProps> = ({habit, onComplete}) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(true);
        onComplete(habit.id)  // Mark as completed
        toast.success(`"${habit.name}" marked as complete!`)

        // Reset the check style after a moment (if needed)
        setTimeout(() => setIsChecked(false), 1500);
    };

    return ( 
        <div
        className={`space-y-2 shadow p-4 border rounded-md ${isChecked ? "opacity-60 scale-95" : ""}`}
        style={{backgroundColor: habit.color}}
        >
            <div className="flex justify-between items-center">
                <h3 className="font-medium text-lg">{habit.name}</h3>
                <input
                 type="checkbox" 
                 checked={habit.history.includes(new Date().toISOString())}  //to determine if the habit has already been completed today
                 onChange={handleCheckboxChange}
                 className="w-6 h-6"
                 />
            </div>
            <p className="text-gray-600 text-sm">Frequency: {habit.frequency}</p>
        </div>
     );
}
 
export default HabitItem;