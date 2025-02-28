import React from "react";
import { ChevronUp } from "lucide-react";
import { QuestionItemProps } from "../types/QuestionProps";
import Input from "./UI/Input";
import Select from "./UI/Select";
import Checkbox from "./UI/Checkbox";
import { title } from "process";
function QuestionForm({
  errorFormValues,
  question,
  updateQuestion,
  setCurrentOpenForm,
}: QuestionItemProps) {
  const questionTypeOptions = [
    { label: "Text", name: "text" },
    { label: "Description", name: "description" },
    { label: "Email", name: "email" },
    { label: "Number", name: "number" },
    { label: "Phone Number", name: "phone" },
  ];
  const numberTypeOptions = [
    { label: "Default", name: "default" },
    { label: "Years", name: "year" },
  ];
  return (
    <>
      <div className="flex justify-between relative pb-6 ">
        <Input
          label={"Question title *"}
          name={"title"}
          value={question.title}
          questionId={question.id}
          updateQuestion={updateQuestion}
          required={true}
          error={
            errorFormValues && "title" in errorFormValues
              ? errorFormValues.title
              : ""
          }
        />

        <ChevronUp
          className=" cursor-pointer"
          onClick={(e) => setCurrentOpenForm(() => {})}
        />
      </div>
      <div className="flex flex-col md:flex-row relative pb-6 w-full md:w-auto">
        <Select
          label={"Question type *"}
          name={"type"}
          value={question.type}
          questionId={question.id}
          updateQuestion={updateQuestion}
          options={questionTypeOptions}
          error={
            errorFormValues && "type" in errorFormValues
              ? errorFormValues.type
              : ""
          }
        />
        <div className="flex items-center space-x-2 pl-2 mt-2 w-full md:w-4/12">
          <Checkbox
            label={"Required"}
            name={"required"}
            value={question.required}
            questionId={question.id}
            updateQuestion={updateQuestion}
          />
           <Checkbox
            label={"Hidden"}
            name={"hidden"}
            value={question.hidden}
            questionId={question.id}
            updateQuestion={updateQuestion}
          />
        </div>
      </div>
      {question.type === "number" && (
        <div className="flex flex-col md:flex-row gap-2 relative pb-6">
          <Select
            label={"Number Type *"}
            name={"numberType"}
            value={question.numberType}
            questionId={question.id}
            updateQuestion={updateQuestion}
            options={numberTypeOptions}
            error={
              errorFormValues && "numberType" in errorFormValues
                ? errorFormValues.numberType
                : ""
            }
          />
          <div className="flex lg:contents items-center space-x-2 pl-2 mt-2 w-full md:w-4/12">
          <input
            type="number"
            placeholder="Min"
            value={question.min || ""}
            onChange={(e) =>
              updateQuestion(question.id, "min", Number(e.target.value))
            }
            className="p-2 border rounded w-full md:w-auto"
          />
          <input
            type="number"
            placeholder="Max"
            value={question.max || ""}
            onChange={(e) =>
              updateQuestion(question.id, "max", Number(e.target.value))
            }
            className="p-2 border rounded w-full md:w-auto"
          />
          </div>
        </div>
      )}
      {question.type === "text" && (
        <>
          <div className="flex relative pb-6">
            <Input
              label={"Helper text"}
              name={"helperText"}
              value={question.helperText}
              questionId={question.id}
              updateQuestion={updateQuestion}
            />
          </div>
          <div className="flex items-center space-x-2 pl-2 mt-2 w-5/12">
            <Checkbox
              label={"Is Paragraph"}
              name={"isParagraph"}
              value={question.isParagraph}
              questionId={question.id}
              updateQuestion={updateQuestion}
            />
          </div>
        </>
      )}
    </>
  );
}

export default QuestionForm;
