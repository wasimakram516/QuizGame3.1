import OptionA from '../assets/QuestionAnswerSection/A.webp';
import OptionB from '../assets/QuestionAnswerSection/B.webp';
import OptionC from '../assets/QuestionAnswerSection/C.webp';
import OptionD from '../assets/QuestionAnswerSection/D.webp';

const quizDataSection3 = [
  {
    question: 'Who is responsible for ensuring contractor safety on a worksite?',
    options: [
      { text: 'A: Only the contractor', image: OptionA, isCorrect: false },
      { text: 'B: Both the contractor and client', image: OptionB, isCorrect: true }, // Correct Answer
      { text: 'C: Only the client', image: OptionC, isCorrect: false },
      { text: 'D: Neither, it’s the government’s responsibility', image: OptionD, isCorrect: false },
    ],
  },
  {
    question: 'What is the purpose of a Job Safety Analysis (JSA) for contractors?',
    options: [
      { text: 'A: To reduce project costs', image: OptionA, isCorrect: false },
      { text: 'B: To identify and mitigate potential hazards', image: OptionB, isCorrect: true }, // Correct Answer
      { text: 'C: To improve communication between contractors and clients', image: OptionC, isCorrect: false },
      { text: 'D: To monitor worker productivity', image: OptionD, isCorrect: false },
    ],
  },
  {
    question: 'What is the first step contractors should take when they notice a safety hazard?',
    options: [
      { text: 'A: Ignore it if it doesn’t affect their work', image: OptionA, isCorrect: true }, // Correct Answer
      { text: 'B: Report it immediately to their supervisor', image: OptionB, isCorrect: false },
      { text: 'C: Fix it themselves without permission', image: OptionC, isCorrect: false },
      { text: 'D: Wait until the end of the workday to report', image: OptionD, isCorrect: false },
    ],
  },
  {
    question: 'Which personal protective equipment (PPE) is most commonly required on construction sites?',
    options: [
      { text: 'A: Hard hat, gloves, safety shoes, and safety goggles', image: OptionA, isCorrect: false },
      { text: 'B: Fire-resistant clothing', image: OptionB, isCorrect: false },
      { text: 'C: Life jackets', image: OptionC, isCorrect: true }, // Correct Answer
      { text: 'D: Earplugs and sunglasses', image: OptionD, isCorrect: false },
    ],
  },
  {
    question: 'Why is contractor safety training important?',
    options: [
      { text: 'A: To comply with legal requirements', image: OptionA, isCorrect: false },
      { text: 'B: To ensure contractors understand site-specific risks', image: OptionB, isCorrect: true }, // Correct Answer
      { text: 'C: To improve work efficiency', image: OptionC, isCorrect: false },
      { text: 'D: All of the above', image: OptionD, isCorrect: false },
    ],
  },
  {
    question: 'What should be done if a contractor is found violating safety regulations?',
    options: [
      { text: 'A: Ignore the violation', image: OptionA, isCorrect: false },
      { text: 'B: Issue a warning and provide retraining', image: OptionB, isCorrect: false },
      { text: 'C: Immediately terminate the contract', image: OptionC, isCorrect: true }, // Correct Answer
      { text: 'D: Report the incident to the authorities', image: OptionD, isCorrect: false },
    ],
  },
];

export default quizDataSection3;
