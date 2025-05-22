import React, { useState } from 'react';
import { quizQuestions } from '../../data/quizData';

const AtomQuiz: React.FC = () => {
  // Filter only atom-related questions
  const atomQuestions = quizQuestions.filter(q => q.topic.toLowerCase().includes('atom'));
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleAnswer = (questionId: string, answer: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const handleRestart = () => {
    setAnswers({});
    setSubmitted(false);
  };

  const correctCount = atomQuestions.filter(q => answers[q.id] === q.correctAnswer).length;
  const accuracy = atomQuestions.length > 0 ? (correctCount / atomQuestions.length) * 100 : 0;

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Atom Quiz</h2>
      {!submitted ? (
        <form
          onSubmit={e => {
            e.preventDefault();
            handleSubmit();
          }}
          className="space-y-8"
        >
          {atomQuestions.map((question, idx) => (
            <div key={question.id} className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-500">
                  Question {idx + 1} of {atomQuestions.length}
                </span>
                <span className="text-xs font-medium py-1 px-2 rounded-full bg-primary-50 text-primary-600">
                  {question.difficulty}
                </span>
              </div>
              <h3 className="text-lg font-medium text-gray-800 mb-2">{question.question}</h3>
              <div className="space-y-2">
                {question.options.map(option => (
                  <label
                    key={option}
                    className={`block w-full p-3 border rounded-lg cursor-pointer transition-all duration-200
                      ${answers[question.id] === option
                        ? 'border-primary-600 bg-primary-50 ring-2 ring-primary-600 ring-opacity-25'
                        : 'border-gray-200 hover:border-primary-300 hover:bg-gray-50'}
                    `}
                  >
                    <div className="flex items-center">
                      <input
                        type="radio"
                        name={`question-${question.id}`}
                        value={option}
                        checked={answers[question.id] === option}
                        onChange={() => handleAnswer(question.id, option)}
                        className="mr-3"
                        required
                      />
                      <span className="text-gray-700">{option}</span>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          ))}
          <div className="flex justify-end">
            <button
              type="submit"
              className="py-2 px-6 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors duration-200"
            >
              Submit Quiz
            </button>
          </div>
        </form>
      ) : (
        <div className="space-y-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Quiz Results</h2>
            <p className="text-gray-600">You scored {correctCount} out of {atomQuestions.length}</p>
            <div className="mt-6">
              <div className="relative h-4 w-full bg-gray-200 rounded-full overflow-hidden">
                <div
                  className={`absolute h-full rounded-full
                    ${accuracy >= 80 ? 'bg-green-500' : accuracy >= 60 ? 'bg-yellow-500' : 'bg-red-500'}`}
                  style={{ width: `${accuracy}%` }}
                />
              </div>
              <div className="flex justify-between text-sm mt-2">
                <span>0%</span>
                <span>{Math.round(accuracy)}%</span>
                <span>100%</span>
              </div>
            </div>
            <div className="mt-6 inline-block py-3 px-6 bg-gray-50 rounded-lg text-gray-700">
  {accuracy >= 80
    ? 'অসাধারণ! আপনি পরমাণু সম্পর্কে চমৎকার ধারণা রাখেন।'
    : accuracy >= 60
    ? 'ভালো করেছেন! যেসব পরমাণু বিষয়গুলো ভুল হয়েছে, সেগুলো আবার দেখুন।'
    : 'আপনাকে আরও সময় নিয়ে পরমাণু বিষয়টি পড়া উচিত।'}
</div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-800">Question Summary</h3>
            {atomQuestions.map((question, idx) => {
              const isCorrect = answers[question.id] === question.correctAnswer;
              return (
                <div
                  key={question.id}
                  className={`p-4 border rounded-lg ${isCorrect ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50'}`}
                >
                  <div className="flex items-start">
                    <div className={`p-1 rounded-full mt-1 mr-3 flex-shrink-0 ${isCorrect ? 'bg-green-500' : 'bg-red-500'}`}></div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <h4 className="font-medium text-gray-800">Question {idx + 1}</h4>
                        <span className="text-xs py-1 px-2 rounded-full bg-white text-gray-600 border border-gray-300">
                          {question.topic}
                        </span>
                      </div>
                      <p className="mt-1 text-gray-600">{question.question}</p>
                      <div className="mt-3 space-y-2 text-sm">
                        <p>
                          <span className="font-medium">Your answer:</span>{' '}
                          <span className={isCorrect ? 'text-green-600' : 'text-red-600'}>
                            {answers[question.id]}
                          </span>
                        </p>
                        {!isCorrect && (
                          <p>
                            <span className="font-medium">Correct answer:</span>{' '}
                            <span className="text-green-600">{question.correctAnswer}</span>
                          </p>
                        )}
                        <p className="text-gray-600 mt-2 bg-white p-2 rounded-md border border-gray-200">
                          <span className="font-medium">Explanation:</span>{' '}
                          {question.explanation}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex justify-center mt-8">
            <button
              onClick={handleRestart}
              className="flex items-center py-2 px-6 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors duration-200"
            >
              Restart Quiz
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AtomQuiz;
