import QuestionForm from "./QuestionForm";
import { ChevronDown, Trash } from "lucide-react";
import { Question, QuestionItemProps } from "../types/QuestionProps";

export default function QuestionItem({
  errorFormValues,
  isFormOpen,
  question,
  updateQuestion,
  removeQuestion,
  setCurrentOpenForm,
}: QuestionItemProps) {
  return (
    <div className="mb-4 p-4 border rounded-xl shadow-sm bg-[#F8F8FA] text-[#1D5E6D] font-[500]">
      {question && !isFormOpen && (
        <div className="flex justify-between">
          <div className="text-custom-primary text-xl text-left font-bold">
            {question.title}
          </div>
          <div className="flex gap-x-4	">
            <Trash
              onClick={() => removeQuestion(question.id)}
              className="cursor-pointer"
            />
            <ChevronDown
              onClick={(e) => setCurrentOpenForm(() => question)}
              className="cursor-pointer"
            />
          </div>
        </div>
      )}
      {question && isFormOpen && (
        <QuestionForm
          errorFormValues={errorFormValues}
          question={question}
          updateQuestion={updateQuestion}
          removeQuestion={removeQuestion}
          setCurrentOpenForm={setCurrentOpenForm}
        />
      )}
    </div>
  );
}
