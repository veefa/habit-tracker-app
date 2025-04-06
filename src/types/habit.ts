export type Frequency = "daily" | "weekly" | "custom";

export interface Habit {
    id: string
    name: string
    frequency: Frequency
    color?: string
    history: string[] // list of completed ISO date strings
};
