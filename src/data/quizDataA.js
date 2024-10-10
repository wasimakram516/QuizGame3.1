import OptionA from '../assets/QuestionAnswerSection/A.webp';
import OptionB from '../assets/QuestionAnswerSection/B.webp';
import OptionC from '../assets/QuestionAnswerSection/C.webp';
import OptionD from '../assets/QuestionAnswerSection/D.webp';

const quizDataSection1 = [
  {
    question: 'What is the first step in hazard identification?',
    options: [
      { text: 'A: Evaluate the severity of the hazard', image: OptionA, isCorrect: true },  // Correct Answer
      { text: 'B: Report the hazard', image: OptionB, isCorrect: false },
      { text: 'C: Identify potential hazards in the workplace', image: OptionC, isCorrect: false },
      { text: 'D: Eliminate the hazard', image: OptionD, isCorrect: false },
    ],
  },
  {
    question: 'Which of the following is considered a physical hazard?',
    options: [
      { text: 'A: Chemical spill', image: OptionA, isCorrect: false },
      { text: 'B: Excessive noise', image: OptionB, isCorrect: true },  // Correct Answer
      { text: 'C: Faulty electrical wiring', image: OptionC, isCorrect: false },
      { text: 'D: Inadequate ventilation', image: OptionD, isCorrect: false },
    ],
  },
  {
    question: 'When should hazard identification be conducted?',
    options: [
      { text: 'A: Only after an incident occurs', image: OptionA, isCorrect: false },
      { text: 'B: Regularly, as part of a safety program', image: OptionB, isCorrect: true },  // Correct Answer
      { text: 'C: Only during audits', image: OptionC, isCorrect: false },
      { text: 'D: Once a year', image: OptionD, isCorrect: false },
    ],
  },
  {
    question: 'What is a common method used to identify hazards in the workplace?',
    options: [
      { text: 'A: Accident reporting', image: OptionA, isCorrect: false },
      { text: 'B: Job Safety Analysis (JSA)', image: OptionB, isCorrect: true },  // Correct Answer
      { text: 'C: Performance reviews', image: OptionC, isCorrect: false },
      { text: 'D: Weekly staff meeting', image: OptionD, isCorrect: false },
    ],
  },
  {
    question: 'Which of the following is NOT a common type of workplace hazard?',
    options: [
      { text: 'A: Biological hazards', image: OptionA, isCorrect: false },
      { text: 'B: Physical hazards', image: OptionB, isCorrect: false },
      { text: 'C: Electrical hazards', image: OptionC, isCorrect: false },
      { text: 'D: Personal disagreements', image: OptionD, isCorrect: true },  // Correct Answer
    ],
  },
  {
    question: 'What should an employee do if they identify a hazard?',
    options: [
      { text: 'A: Ignore it if it doesn’t affect them', image: OptionA, isCorrect: false },
      { text: 'B: Report it to their supervisor immediately', image: OptionB, isCorrect: true },  // Correct Answer
      { text: 'C: Attempt to fix the hazard without permission', image: OptionC, isCorrect: false },
      { text: 'D: Wait until the end of their shift to report', image: OptionD, isCorrect: false },
    ],
  },
  {
    question: 'Which of the following is an example of a chemical hazard?',
    options: [
      { text: 'A: Exposure to loud machinery', image: OptionA, isCorrect: false },
      { text: 'B: A slippery floor', image: OptionB, isCorrect: false },
      { text: 'C: Handling corrosive substances', image: OptionC, isCorrect: true },  // Correct Answer
      { text: 'D: Poor lighting in a work area', image: OptionD, isCorrect: false },
    ],
  },
  {
    question: 'Why is hazard identification important?',
    options: [
      { text: 'A: To improve employee morale', image: OptionA, isCorrect: true },  // Correct Answer
      { text: 'B: To prevent accidents and injuries', image: OptionB, isCorrect: false },
      { text: 'C: To increase company profits', image: OptionC, isCorrect: false },
      { text: 'D: To ensure compliance with financial regulations', image: OptionD, isCorrect: false },
    ],
  },
  {
    question: 'What is the difference between a hazard and a risk?',
    options: [
      { text: 'A: A hazard is a potential source of harm, and a risk is the likelihood of harm occurring', image: OptionA, isCorrect: false },
      { text: 'B: A hazard is an injury, and a risk is the cause of that injury', image: OptionB, isCorrect: false },
      { text: 'C: A hazard is a tool, and a risk is how it is used', image: OptionC, isCorrect: false },
      { text: 'D: There is no difference', image: OptionD, isCorrect: true },  // Correct Answer
    ],
  },
  {
    question: 'Which of the following is an ergonomic hazard?',
    options: [
      { text: 'A: Repetitive motion leading to injury', image: OptionA, isCorrect: false },
      { text: 'B: Exposure to toxic fumes', image: OptionB, isCorrect: false },
      { text: 'C: Operating heavy machinery', image: OptionC, isCorrect: true },  // Correct Answer
      { text: 'D: Poor emergency exits', image: OptionD, isCorrect: false },
    ],
  },
];

export default quizDataSection1;
