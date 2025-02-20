import { InputProps } from "../../types/InputProps";
export default function Input({
  label,
  name,
  value,
  questionId,
  updateQuestion,
}: InputProps) {
  return (
    <>
      <input
        type="checkbox"
        placeholder="Question title"
        checked={value?true: false}
        onChange={(e) => updateQuestion(questionId, name, e.target.checked)}
        className="w-4 h-4"
      />
      <label>{label}</label>
    </>
  );
}
