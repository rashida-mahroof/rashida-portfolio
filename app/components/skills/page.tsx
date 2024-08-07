"use client"
import React, { useEffect, useRef, useState } from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaNodeJs, FaReact, FaDatabase } from 'react-icons/fa';
import { SiFlutter, SiNextdotjs, SiMongodb, SiMysql } from 'react-icons/si';

interface Skill {
  name: string;
  percentage: number;
  Icon: React.ComponentType<{ color?: string; className?: string }>;
  color: string;
}

const skills: Skill[] = [
  { name: 'Flutter', percentage: 95, Icon: SiFlutter, color: '#02569B' },
  { name: 'NEXTJS', percentage: 85, Icon: SiNextdotjs, color: '#000000' },
  { name: 'NODEJS', percentage: 70, Icon: FaNodeJs, color: '#339933' },
  { name: 'MYSQL', percentage: 60, Icon: SiMysql, color: '#00758F' },
  { name: 'MONGODB', percentage: 65, Icon: SiMongodb, color: '#47A248' },
  { name: 'HTML', percentage: 100, Icon: FaHtml5, color: '#E34F26' },
  { name: 'JAVASCRIPT', percentage: 90, Icon: FaJsSquare, color: '#F7DF1E' },
  { name: 'CSS', percentage: 90, Icon: FaCss3Alt, color: '#1572B6' },
];

const SkillCircle: React.FC<Skill> = ({ name, percentage, Icon, color }) => {
  const [isVisible, setIsVisible] = useState(false);
  const circleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (circleRef.current) {
      observer.observe(circleRef.current);
    }

    return () => {
      if (circleRef.current) {
        observer.unobserve(circleRef.current);
      }
    };
  }, []);

  const circumference = 2 * Math.PI * 45; // 45 is the radius of the circle
  const strokeDashoffset = isVisible ? circumference - (percentage / 100) * circumference : circumference;

  return (
    <div className="flex flex-col items-center animate-on-scroll"  id="skills" ref={circleRef} data-animation="animate-slideUp" >
      <div className="relative">
        <svg className="w-32 h-32" viewBox="0 0 100 100">
          <circle
            className="text-gray-700"
            strokeWidth="10"
            stroke="currentColor"
            fill="transparent"
            r="45"
            cx="50"
            cy="50"
          />
          <circle
            className="text-yellow-400"
            strokeWidth="10"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            stroke="currentColor"
            fill="transparent"
            r="45"
            cx="50"
            cy="50"
            style={{ transition: 'stroke-dashoffset 2s ease-in-out' }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <Icon className={`text-4xl transition-colors duration-300 ${isVisible ? color : 'text-gray-400'}`} />
        </div>
      </div>
      <div className="mt-2 text-center">
        <div className="text-xl font-bold">{isVisible ? `${percentage}%` : '0%'}</div>
        <div className="text-sm uppercase">{name}</div>
      </div>
    </div>
  );
};

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="text-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center">MY SKILLS</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <SkillCircle key={skill.name} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
