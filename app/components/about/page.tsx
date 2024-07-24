"use client"
import React from 'react';
import MainTitle from '../title/page';
import CountUp from 'react-countup';
const calculateAge = (dob: Date) => {
    const diff = Date.now() - dob.getTime();
    const ageDt = new Date(diff);
  
    return Math.abs(ageDt.getUTCFullYear() - 1970);
  };
  
const AboutSection = () => {
    const dob = new Date('1998-03-27'); // Use ISO format for date
  const age = calculateAge(dob);
  const personalInfo = [
    { label: 'First Name', value: 'Rashida' },
    { label: 'Last Name', value: 'Mahroof' },
    { label: 'Age', value: `${age} Years` },
    { label: 'Nationality', value: 'Indian' },
    { label: 'Freelance', value: 'Available' },
    { label: 'Address', value: 'Dubai, UAE' },
    { label: 'Phone', value: '+971543600230' },
    { label: 'Email', value: 'rashidamahroofp@gmail.com' },
    { label: 'Skype', value: 'rashida.mahroof' },
    { label: 'Languages', value: 'English, Malayalam, Hindi, Tamil, Arabic' }
  ];
  const stats = [
    { value: 4, suffix: '+', label: 'YEARS OF EXPERIENCE' },
    { value: 20, suffix: '+', label: 'COMPLETED PROJECTS' },
    { value: 30, suffix: '+', label: 'HAPPY CUSTOMERS' },
    { value: 3, suffix: '+', label: 'COURSES COMPLETED' },
  ];
  
 
  return (
    <section id="about" className=" text-white py-20">
      <div className="container mx-auto px-4">
      <MainTitle title="ABOUT ME" subtitle="RESUME" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-semibold mb-5">PERSONAL INFOS</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {personalInfo.map((info, index) => (
                <div key={index}>
                  <span className="text-gray-400">{info.label}: </span>
                  <span>{info.value}</span>
                </div>
              ))}
            </div>
            <button className="mt-8 bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition duration-300 uppercase tracking-wider flex items-center">
              Download CV
              <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          <div className="grid grid-cols-2 gap-6">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-gray-800 p-6 rounded-lg text-center transform transition-transform duration-300 hover:scale-105 hover:bg-gray-700 shadow-lg"
        >
          <div className="text-4xl font-bold text-yellow-400 mb-2">
            <CountUp end={stat.value} suffix={stat.suffix} duration={2} />
          </div>
          <div className="text-sm text-gray-300">{stat.label}</div>
        </div>
      ))}
    </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;