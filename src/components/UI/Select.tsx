import { Question } from "../../types/QuestionProps";
import { InputProps } from "../../types/InputProps";
interface SelectInputProps extends InputProps {
  options: { name: string; label: string }[];
}
export default function Select({
  label,
  name,
  value,
  questionId,
  updateQuestion,
  options,
  error,
}: SelectInputProps) {
  return (
    <>
      <select
        onChange={(e) => updateQuestion(questionId, name, e.target.value)}
        value={value}
        className={`p-2 border rounded h-[56px] w-12/12 md:w-4/12 ${
          error ? "border-[#ED2424]" : "border-custom-secondary"
        } bg-[#F7F9FA]`}
      >
        <option value="" disabled>
          {error ? error : "Question type*"}
        </option>
        {options &&
          options.map((val) => <option value={val.name}>{val.label}</option>)}
      </select>
      <label className="absolute left-3 -top-2 text-custom-secondary text-sm transition-all peer-placeholder-shown:-top-4 bg-white peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-custom-secondary">
        {label}
      </label>
    </>
  );
}
