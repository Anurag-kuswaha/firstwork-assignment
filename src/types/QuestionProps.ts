import React from "react";
export interface Question {
  id: string;
  title: string;
  type: "text" | "number" | "select";
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
  questions: Question[];
  updateQuestion: (id: string, field: keyof Question, value: any) => void;
  removeQuestion: (id: string) => void;
}
export interface QuestionItemProps {
  question: Question;
  updateQuestion: (id: string, field: keyof Question, value: any) => void;
  removeQuestion: (id: string) => void;
}