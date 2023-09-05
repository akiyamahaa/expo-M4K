export interface IGradientColor {
  color1: string;
  color2: string;
}

export enum EFont {
  Quicksand_300Light = "Quicksand_300Light",
  Quicksand_400Regular = "Quicksand_400Regular",
  Quicksand_500Medium = "Quicksand_500Medium",
  Quicksand_600SemiBold = "Quicksand_600SemiBold",
  Quicksand_700Bold = "Quicksand_700Bold",
}

export enum EOperation {
  AddOperation = "+",
  SubtractOperation = "-",
}

export interface IQuiz {
  firstNum: number;
  secondNum: number;
  operation: string;
  choices: number[];
  answer: number;
}

export interface IQuizImage {
  imageSlot: number;
  choices: number[];
  answer: number;
}
export interface IQuizAnswer {
  choices: number[];
  answer: number;
}

export enum EQuizStatus {
  HIDDEN = "HIDDEN",
  ANSWER = "ANSWER",
}

export type IAnserTag = ChildNode | null;

export interface ILessons {
  [key: number]: {
    title: string;
    video: string;
    exams: IQuiz[];
  };
}
