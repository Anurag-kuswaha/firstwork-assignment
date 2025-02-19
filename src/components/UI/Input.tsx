import { InputProps } from "../../types/InputProps"
import { useEffect, useRef, useState } from "react"
export default function Input({ label, name, value, questionId, updateQuestion, required= false }: InputProps) {
    const inputRef = useRef<HTMLInputElement>(null);
    let [focussed, setFocussed] = useState(false);
    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.addEventListener('focus', function () {
                console.log('focussed');
                setFocussed(true);
            })
            inputRef.current.addEventListener('blur', function () {
                console.log('focussed');
                setFocussed(false);
            })
        }
        else setFocussed(false);
        return () => inputRef.current?.removeEventListener('focus', () => { });

    }, [])

    return (
        <>
            <input
                type="text"
                placeholder={focussed ? "" : label}
                ref={inputRef}
                value={value}
                required={required}

                onChange={(e) => updateQuestion(questionId, name, e.target.value)}
                className="peer w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-11/12"
            />
            {focussed && <label
                className="absolute left-3 -top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:-top-4 bg-white peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 "
            >
                {label}
            </label>}
        </>

    )
}