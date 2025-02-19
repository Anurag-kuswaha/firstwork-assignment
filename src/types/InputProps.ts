import { Question } from "./QuestionProps";
export interface InputProps {
    label: string;
    name: keyof Question;
    value: any;
    questionId: string;
    updateQuestion: (id: string, field: keyof Question, value: any) => void;
    required?: boolean
}