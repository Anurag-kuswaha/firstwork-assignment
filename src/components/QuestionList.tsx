import QuestionItem from "./QuestionItem";
import { QuestionListProps } from "../types/QuestionProps";

export default function QuestionList({
  errorFormValues,
  currentOpenForm,
  questions,
  updateQuestion,
  removeQuestion,
  setCurrentOpenForm,
}: QuestionListProps) {
  return (
    <div>
      {questions.map((q) => (
        <QuestionItem
          errorFormValues={errorFormValues}
          isFormOpen={
            currentOpenForm && currentOpenForm.id === q.id ? true : false
          }
          key={
            currentOpenForm && currentOpenForm.id === q.id
              ? currentOpenForm.id
              : q.id
          }
          question={
            currentOpenForm && currentOpenForm.id === q.id ? currentOpenForm : q
          }
          updateQuestion={updateQuestion}
          removeQuestion={removeQuestion}
          setCurrentOpenForm={setCurrentOpenForm}
        />
      ))}
    </div>
  );
}
