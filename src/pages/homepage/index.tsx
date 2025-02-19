import { useState, useEffect, useRef } from "react";
import QuestionList from "../../components/QuestionList";
import { Question } from "../../types/QuestionProps";

export default function Homepage() {
    const [questions, setQuestions] = useState<Question[]>([]);
    const isFirstRender = useRef(true)

    useEffect(() => {
        const savedQuestions = localStorage.getItem("form_questions");
        if (savedQuestions) {
            let questionList = JSON.parse(savedQuestions).map((val: Question) => {
                return { ...val, isDropdownOpen: false }
            })
            setQuestions(questionList);

        }
    }, []);

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return
        }
        localStorage.setItem("form_questions", JSON.stringify(questions));

    }, [questions]);

    const addQuestion = () => {
        let questionList = [...questions].map((val: Question) => {
            return { ...val, isDropdownOpen: false }
        })
        setQuestions([
            ...questionList,
            { id: Date.now().toString(), title: "", type: "text", required: false, hidden: false, isDropdownOpen: true, helperText: "", isParagraph: false, numberType: "default" }
        ]);
    };

    const updateQuestion = (id: string, field: keyof Question, value: any) => {
        setQuestions(
            questions.map(q => (q.id === id ? { ...q, [field]: value } : q))
        );
    };

    const removeQuestion = (id: string) => {
        setQuestions(questions.filter(q => q.id !== id));
    };

    return (
        <div className="p-6">
            <QuestionList questions={questions} updateQuestion={updateQuestion} removeQuestion={removeQuestion} />
            <button onClick={addQuestion} className="mb-4 px-4 py-2 bg-custom-secondary border border-custom-secondary text-white font-bold rounded block">+ Add Question</button>
        </div>
    );
}