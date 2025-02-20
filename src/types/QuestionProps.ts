import React from "react";
export interface Question {
  id: string;
  title: string;
  type: string ;//"text" | "number" | "select"| "email" | "description"| "phone";
  helperText: string;
  required: boolean;
  hidden: boolean;
  min?: number;
  max?: number;
  options?: string[];
  isDropdownOpen?: boolean;
  isParagraph: boolean;
  numberType: string;
}

export interface QuestionListProps {
  currentOpenForm: Question| undefined;
  questions: Question[];
  updateQuestion: (id: string, field: keyof Question, value: any) => void;
  removeQuestion: (id: string) => void;
  setCurrentOpenForm?: any
  errorFormValues?:{}
}
export interface QuestionItemProps {
  isFormOpen?: boolean;
  question: Question;
  updateQuestion: (id: string, field: keyof Question, value: any) => void;
  removeQuestion: (id: string) => void;
  setCurrentOpenForm?:any
  errorFormValues?:{}
}