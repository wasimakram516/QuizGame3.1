import OptionA from '../assets/QuestionAnswerSection/A.webp';
import OptionB from '../assets/QuestionAnswerSection/B.webp';
import OptionC from '../assets/QuestionAnswerSection/C.webp';
import OptionD from '../assets/QuestionAnswerSection/D.webp';

const quizDataSection2 = [
  {
    question: "What is the most common cause of road accidents?",
    options: [
      { text: "A: Bad weather", isCorrect: false, image: OptionA },
      { text: "B: Poor vehicle maintenance", isCorrect: false, image: OptionB },
      { text: "C: Human error", isCorrect: true, image: OptionC },
      { text: "D: Road conditions", isCorrect: false, image: OptionD },
    ],
  },
  {
    question: "What is the recommended following distance between vehicles in normal driving conditions?",
    options: [
      { text: "A: 1 second", isCorrect: false, image: OptionA },
      { text: "B: 3 seconds", isCorrect: false, image: OptionB },
      { text: "C: 5 seconds", isCorrect: true, image: OptionC },
      { text: "D: 7 seconds", isCorrect: false, image: OptionD },
    ],
  },
  {
    question: "What should you do if you feel fatigued while driving?",
    options: [
      { text: "A: Continue driving and stay focused", isCorrect: false, image: OptionA },
      { text: "B: Drink coffee and keep going", isCorrect: false, image: OptionB },
      { text: "C: Stop in a safe place and take a rest", isCorrect: false, image: OptionC },
      { text: "D: Lower the car windows to get fresh air", isCorrect: true, image: OptionD },
    ],
  },
  {
    question: "Which of the following is considered distracted driving?",
    options: [
      { text: "A: Using a mobile phone", isCorrect: false, image: OptionA },
      { text: "B: Eating or drinking", isCorrect: true, image: OptionB },
      { text: "C: Adjusting the radio", isCorrect: false, image: OptionC },
      { text: "D: All of the above", isCorrect: false, image: OptionD },
    ],
  },
  {
    question: "What is the primary benefit of wearing a seatbelt?",
    options: [
      { text: "A: Preventing discomfort while driving", isCorrect: false, image: OptionA },
      { text: "B: Reducing the severity of injuries in case of an accident", isCorrect: false, image: OptionB },
      { text: "C: Avoiding police fines", isCorrect: true, image: OptionC },
      { text: "D: Ensuring good posture while driving", isCorrect: false, image: OptionD },
    ],
  },
  {
    question: "When should you check the tire pressure of your vehicle?",
    options: [
      { text: "A: Every 6 months", isCorrect: false, image: OptionA },
      { text: "B: Once a year", isCorrect: false, image: OptionB },
      { text: "C: Before long trips and regularly", isCorrect: true, image: OptionC },
      { text: "D: Only when you notice tire damage", isCorrect: false, image: OptionD },
    ],
  },
];

export default quizDataSection2;
