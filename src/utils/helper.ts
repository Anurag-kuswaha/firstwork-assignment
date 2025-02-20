import { Question } from "../types/QuestionProps";
export const validateForm = (form: Question, setErrorFormValues: Function, setIsFormValid: Function): boolean => {
    const errors: Record<string, string> = {};
    if (!form.title) errors["title"] = "Title is required";
    if (!form.type) errors["type"] = "Type is required";
    if (form.type === "number" && !form.numberType) errors["numberType"] = "Number type is required";

    setErrorFormValues(errors);
    const isValid = Object.keys(errors).length === 0;
    setIsFormValid(isValid);
    return isValid;
};


export const debounce = (fn:Function, time: number) =>{
    let timerRef: any;
    return function (...args: any){
        console.log('tmer ref', timerRef)
        clearTimeout(timerRef);
        timerRef = setTimeout( () => {fn(...args)} , time)
    }

}