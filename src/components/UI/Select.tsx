import { Question } from "../../types/QuestionProps"
import {InputProps} from "../../types/InputProps"
interface SelectInputProps extends InputProps{
    options: {name:string, label: string}[]
}
export default function Select ({label, name, value, questionId, updateQuestion, options}:SelectInputProps) {

    return (
        <>
          <select
                     onChange={(e) => updateQuestion(questionId, name, e.target.value)}
                     value={value}
                     className="p-2 border rounded w-8/12">
                     <option value="" disabled>Question type*</option>
                     {options && options.map ( (val)=>  <option value={val.name}>{val.label}</option>)}
                    
                 </select>
            <label
                className="absolute left-3 -top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:-top-4 bg-white peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-500"
            >
                {label}
            </label>
        </>

    )
}