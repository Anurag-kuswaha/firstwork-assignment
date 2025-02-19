
import QuestionItem from "./QuestionItem";
import {QuestionListProps} from "../types/QuestionProps"



export default function QuestionList({ questions, updateQuestion, removeQuestion }: QuestionListProps) {
  return (
    <div>
      {questions.map(q => (
        <QuestionItem key={q.id} question={q} updateQuestion={updateQuestion} removeQuestion={removeQuestion} />
      ))}
    </div>
  );
}
