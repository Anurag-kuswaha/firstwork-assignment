import { Question } from "../../types/QuestionProps"
import { InputProps } from "../../types/InputProps"
export default function Input({ label, name, value, questionId, updateQuestion }: InputProps) {

    return (
        <>
            <input
                type="checkbox"
                placeholder="Question title"
                value={value}

                onChange={(e) => updateQuestion(questionId, name, e.target.value)}
                className="w-4 h-4"
            />
            <label
            >
                {label}
            </label>
        </>

    )
}