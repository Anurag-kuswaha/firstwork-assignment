import QuestionForm from "./QuestionForm";
import { ChevronDown, GripVertical, Trash } from "lucide-react";
import { QuestionItemProps } from "../types/QuestionProps";

export default function QuestionItem({
  errorFormValues,
  isFormOpen,
  question,
  updateQuestion,
  removeQuestion,
  setCurrentOpenForm,
}: QuestionItemProps) {
  return (
    <div className="mb-4 p-4 md:p-8 border rounded-xl shadow-sm bg-[#F8F8FA] text-[#1D5E6D] font-[500]">
      {question && !isFormOpen && (
        <div className="flex justify-between">
          <div className="text-custom-primary text-xl text-left font-bold flex items-center md:items-end">
          <GripVertical />
            {question.title}
          </div>
          <div className="flex gap-x-4	">
            <Trash
              onClick={() => removeQuestion(question.id)}
              className="cursor-pointer"
            />
            <ChevronDown
              onClick={(e) => setCurrentOpenForm(() => question)}
              className="cursor-pointer select-none	"
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
