
import React from 'react';

const SubjectCard = ({ subject, onClick }) => {
  return (
    <div
      className="bg-gray-800 hover:bg-gray-700 text-white font-bold rounded-lg p-4 cursor-pointer shadow-md"
      onClick={onClick}
    >
      {subject}
    </div>
  );
};

const QuizSubjectSelect = ({ subjects, onSubjectSelect }) => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
        {subjects.map((subject) => (
          <SubjectCard key={subject} subject={subject} onClick={() => onSubjectSelect(subject)} />
        ))}
      </div>
    </div>
  );
};

export default QuizSubjectSelect;
