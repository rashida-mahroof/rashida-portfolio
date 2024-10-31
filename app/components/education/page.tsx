import React from 'react';

interface TimelineItem {
  year: string;
  title: string;
  organization: string;
  description: string;
}

const experienceItems: TimelineItem[] = [
  {
    year: 'AUG 2024 - PRESENT',
    title: "AMBASSODOR",
    organization: "GOOGLE'S WOMEN TECH MAKERS",
    description: '',
  },
  {
    year: 'AUG 2024 - SEP 2024',
    title: 'FLUTTER DEVELOPER',
    organization: 'BEAMS IT SOLUTIONS',
    description: '',
  },
  {
    year: 'JUNE 2023 - APR 2024',
    title: 'LEAD FLUTTER DEVELOPER',
    organization: 'SCREL INFO PVT LTD',
    description: '',
  },
  {
    year: 'MAR 2023 - JUNE 2023',
    title: 'FULL STACK DEVELOPER',
    organization: 'WEBEAZ TECHNOLOGIES PVT LTD',
    description: '',
  },
  {
    year: 'JAN 2022 - MAR 2023',
    title: 'FRONTEND ENGINEER',
    organization: 'TIP TOP FURNITURES PVT LTD',
    description: '',
  },
  {
    year: 'JULY 2020 - DEC 2022',
    title: 'WEB DEVELOPER',
    organization: 'IQ TECH SOLUTIONS',
    description: '',
  },
 
];

const educationItems: TimelineItem[] = [
  {
    year: '2018',
    title: 'DIPLOMA IN COMPUTER ENGINEERING (BSC Equilant)',
    organization: 'BOARD OF TECHNICAL EDUCATION, KERALA',
    description: '8.8/9 CGPA',
  },
  {
    year: '2015',
    title: 'HIGHER SECONDARY EDUCATION',
    organization: 'BOARD OF HIGHER EDUCATION, KERALA',
    description: '83%',
  },
  
];

const TimelineColumn: React.FC<{ items: TimelineItem[] }> = ({ items }) => (
  <div className="space-y-8">
    {items.map((item, index) => (
      <div key={index} className="relative pl-8">
        <div className="absolute left-0 top-0 w-4 h-4 bg-yellow-400 rounded-full mt-1"></div>
        <div className="text-yellow-400 text-sm mb-1">{item.year}</div>
        <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
        <div className="text-gray-400 text-sm mb-2">{item.organization}</div>
        <p className="text-gray-300">{item.description}</p>
      </div>
    ))}
  </div>
);

const ExperienceEducationSection: React.FC = () => {
  return (
    <section id="experience" className=" text-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">EXPERIENCE & EDUCATION</h2>
        <div className="grid md:grid-cols-2 gap-8 animate-on-scroll" data-animation="animate-slideUp">
          <div className='animate-on-scroll' data-animation="animate-slideRight">
          <TimelineColumn items={experienceItems} /></div>
          <div className='animate-on-scroll' data-animation="animate-slideLeft">
          <TimelineColumn items={educationItems} /></div>
          
        </div>
      </div>
    </section>
  );
};

export default ExperienceEducationSection;