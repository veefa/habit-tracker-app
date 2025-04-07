import React from "react";
import { Habit } from "../types/habit";

// Habit obj and function to mark as completed
interface HabitItemProps {
    habit: Habit;
    onComplete: (habitId: string) => void;
}
 
const HabitItem: React.FC<HabitItemProps> = ({habit, onComplete}) => {
    const handleCheckboxChange = () => {
        onComplete(habit.id)  // Mark as completed
    };

    return ( 
        <div
        className="border rounded"
        style={{backgroundColor: habit.color}}
        >
            <div className="flex items-center">
                <h3>{habit.name}</h3>
                <input
                 type="checkbox" 
                 checked={habit.history.includes(new Date().toISOString())}
                 onChange={handleCheckboxChange}
                 className="w-6 h-6"
                 />
            </div>
            <p className="text-gray-600 text-sm">Frequency: {habit.frequency}</p>
        </div>
     );
}
 
export default HabitItem;