import QuestionForm from "./QuestionForm";
import {ChevronDown, Trash} from 'lucide-react'
import {Question, QuestionItemProps} from "../types/QuestionProps"

export default function QuestionItem({ question, updateQuestion, removeQuestion }: QuestionItemProps) {
  return (
    <div className="mb-4 p-4 border rounded-xl shadow-sm bg-white">
      {question && !question.isDropdownOpen && <div className="flex justify-between	">
       <div> {question.title}</div>  <div className="flex gap-x-4	"> <Trash onClick={() => removeQuestion(question.id)} className="cursor-pointer"/> <ChevronDown onClick={(e) => updateQuestion(question.id, "isDropdownOpen", true)} className="cursor-pointer"/> </div>
      </div>}
      {question && question.isDropdownOpen && <QuestionForm question={question} updateQuestion={updateQuestion} removeQuestion={removeQuestion} />}
    </div>
  );
}