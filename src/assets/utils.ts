import { Habit } from "../types/habit";

export const isCompletedToday = (habit: Habit): boolean => {
    const today = new Date().toISOString().slice(0, 10);
    return habit.history.includes(today);
  };