import { EOperation, ILessons } from "../types/utils";

export const lessons: ILessons = {
  1: {
    title: "Phép cộng",
    video: "",
    exams: [
      {
        firstNum: 4,
        secondNum: 5,
        operation: EOperation.AddOperation,
        choices: [2, 3, 9],
        answer: 9,
      },
      {
        firstNum: 4,
        secondNum: 2,
        operation: EOperation.AddOperation,
        choices: [6, 4, 9],
        answer: 6,
      },
      {
        firstNum: 3,
        secondNum: 2,
        operation: EOperation.AddOperation,
        choices: [1, 5, 9],
        answer: 5,
      },
      {
        firstNum: 4,
        secondNum: 2,
        operation: EOperation.AddOperation,
        choices: [2, 6, 9],
        answer: 6,
      },
      {
        firstNum: 5,
        secondNum: 2,
        operation: EOperation.AddOperation,
        choices: [7, 2, 9],
        answer: 7,
      },
      {
        firstNum: 3,
        secondNum: 2,
        operation: EOperation.AddOperation,
        choices: [1, 3, 5],
        answer: 5,
      },
    ],
  },
  2: {
    title: "Phép trừ",
    video: "",
    exams: [
      {
        firstNum: 4,
        secondNum: 5,
        operation: EOperation.SubtractOperation,
        choices: [-1, 3, 9],
        answer: -1,
      },
      {
        firstNum: 4,
        secondNum: 2,
        operation: EOperation.SubtractOperation,
        choices: [2, 4, 9],
        answer: 2,
      },
      {
        firstNum: 3,
        secondNum: 2,
        operation: EOperation.SubtractOperation,
        choices: [1, 3, 9],
        answer: 1,
      },
      {
        firstNum: 4,
        secondNum: 6,
        operation: EOperation.SubtractOperation,
        choices: [-2, 6, 9],
        answer: -2,
      },
      {
        firstNum: 5,
        secondNum: 2,
        operation: EOperation.SubtractOperation,
        choices: [3, 2, 9],
        answer: 3,
      },
      {
        firstNum: 3,
        secondNum: 2,
        operation: EOperation.SubtractOperation,
        choices: [1, 3, 9],
        answer: 1,
      },
    ],
  },
};
