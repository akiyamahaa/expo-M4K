import { ELessonType, EOperation, ILessons, IListBadges } from "../types/utils";

export const lessons: ILessons = {
  1: {
    title: "Trên, dưới, phải, trái, trước, sau, ở giữa",
    video:
      "https://firebasestorage.googleapis.com/v0/b/expo-m4k.appspot.com/o/Left%2C%20Right%2C%20Up%2C%20Down.%20Lesson%209.%20Educational%20video%20for%20children%20(Early%20childhood%20development)..mp4?alt=media&token=5ae5c146-94e0-4066-a20f-0769de60ff2b",
    type: ELessonType.OBJECTIVE_TEST,
    exams: [],
  },
  2: {
    title: "Phép cộng trừ các số từ 0 đến 10",
    video:
      "https://firebasestorage.googleapis.com/v0/b/expo-m4k.appspot.com/o/Addition%20and%20Subtraction%20_%201st%20Grade%20_%20Math_%20Kids%20Academy.mp4?alt=media&token=516b0a96-044b-4c51-8249-ab2611974791",
    type: ELessonType.PICK_NUMBER,
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
};

export const allBadges: IListBadges = {
  1: {
    image: require("../../assets/badges/badge-1.png"),
  },
  2: {
    image: require("../../assets/badges/badge-2.png"),
  },
  3: {
    image: require("../../assets/badges/badge-3.png"),
  },
  4: {
    image: require("../../assets/badges/badge-4.png"),
  },
  5: {
    image: require("../../assets/badges/badge-5.png"),
  },
  6: {
    image: require("../../assets/badges/badge-6.png"),
  },
  7: {
    image: require("../../assets/badges/badge-7.png"),
  },
  8: {
    image: require("../../assets/badges/badge-8.png"),
  },
};
