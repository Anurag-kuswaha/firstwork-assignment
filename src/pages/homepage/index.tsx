import { useState, useEffect } from "react";
import QuestionList from "../../components/QuestionList";
import { Question } from "../../types/QuestionProps";
import { saveQuestion, deleteQuestion } from "../../utils/apiCall";
import { validateForm } from "../../utils/helper";
import Loader from "../../components/Loader";

export default function Homepage() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [isFormValid, setIsFormValid] = useState(true);
  const [errorFormValues, setErrorFormValues] = useState({});
  const [currentOpenForm, setCurrentOpenForm] = useState<
    Question | undefined
  >();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const savedQuestions = localStorage.getItem("form_questions");
    if (savedQuestions) {
      const questionList = JSON.parse(savedQuestions).map((val: Question) => ({
        ...val,
        isDropdownOpen: false,
      }));
      setQuestions(questionList);
      if (questions.length ==0) setIsFormValid(true);
    }
  }, []);

  const addQuestion = () => {
    const currForm: Question = {
      id: Date.now().toString(),
      title: "",
      type: "",
      required: false,
      hidden: false,
      isDropdownOpen: true,
      helperText: "",
      isParagraph: false,
      numberType: "",
    };
    setCurrentOpenForm(currForm);
    setIsFormValid(false);
    setQuestions((prev) => [...prev, currForm]);
  };

  const updateQuestion = async (
    id: string,
    field: keyof Question,
    value: any
  ) => {
    if (!currentOpenForm) return;
    const updatedForm = { ...currentOpenForm, [field]: value };
    console.log('updatedForm ', updatedForm)
    setCurrentOpenForm(updatedForm);

    if (validateForm(updatedForm, setErrorFormValues, setIsFormValid)) {
      const updatedQuestions = await saveQuestion(updatedForm, setLoading);
      // @ts-ignore
      setQuestions(updatedQuestions);
    }
  };

  const removeQuestion = async (id: string) => {
    if (questions.length ==1) setIsFormValid(() => true)
    setQuestions((prev) => prev.filter((q) => q.id !== id));
    await deleteQuestion(id, setLoading); 
  };
  return (
    <div className="p-6">
      <QuestionList
        errorFormValues={errorFormValues}
        currentOpenForm={currentOpenForm}
        questions={questions}
        updateQuestion={updateQuestion}
        removeQuestion={removeQuestion}
        setCurrentOpenForm={setCurrentOpenForm}
      />
      {loading && <Loader />}
      {!loading && isFormValid && (
        <button
          onClick={addQuestion}
          className="mb-4 px-4 py-2 bg-custom-secondary border border-custom-secondary text-white font-bold rounded block"
        >
          + Add Question
        </button>
      )}
    </div>
  );
}
