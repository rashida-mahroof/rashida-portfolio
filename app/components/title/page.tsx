// components/MainTitle.tsx
import React from 'react';

interface MainTitleProps {
  title: string;
  subtitle: string;
}

const MainTitle: React.FC<MainTitleProps> = ({ title, subtitle }) => {
  if (!title) {
    return null; // or return a default title if title is undefined
  }

  const [firstWord, ...restWords] = title.split(' ');
  const restTitle = restWords.join(' ').toLocaleUpperCase();

  return (
    <h2 className="md:text-5xl text-3xl font-bold mb-10 relative text-center">
      <span className="text-gray-700 absolute -top-10 md:text-8xl opacity-20 text-6xl uppercase">
        {subtitle.toUpperCase()}
      </span>
      <span className="text-white">{firstWord.toUpperCase()}</span>{' '}
      <span className="text-yellow-400 uppercase">{restTitle.toUpperCase()}</span>
    </h2>
  );
};

export default MainTitle;
