import React from "react";
import { Habit } from "../types/habit";
import HabitItem from "./HabitItem";

interface HabitListProps {
    habits: Habit[];
    onCompleteHabit: (habitId: string) => void;
}
 
const HabitList: React.FC<HabitListProps> = ({habits, onCompleteHabit}) => {

    return ( 
        <div>
            {habits.map((habit) => (
                <HabitItem key={habit.id} habit={habit} onComplete={onCompleteHabit}  />
            ))}
        </div>
     );
}
 
export default HabitList;