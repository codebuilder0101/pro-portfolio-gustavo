import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';
import { RiTerminalBoxFill } from 'react-icons/ri';
import { useScrollSection } from '@/hooks/use-scroll-section';

interface CodeLines {
  [key: string]: string[];
}

const Terminal = () => {
  const [activeTab, setActiveTab] = useState<'python' | 'javascript'>('python');
  const [typedLines, setTypedLines] = useState<{ [key: string]: string[] }>({ python: ['', '', ''], javascript: ['', '', ''] });
  const [currentLine, setCurrentLine] = useState<{ [key: string]: number }>({ python: 0, javascript: 0 });
  const [currentChar, setCurrentChar] = useState<{ [key: string]: number }>({ python: 0, javascript: 0 });
  const [isTyping, setIsTyping] = useState<{ [key: string]: boolean }>({ python: false, javascript: false });
  const { ref, isVisible } = useScrollSection();

  const codeLines: CodeLines = useMemo(() => ({
    python: [
      'print("Olá! 👋 Sou Gustavo Máximo")',
      'print("Executivo | Liderança situacional | Docente | Mentor | Método C.O.M.A.V.")',
      'print("Atuo na interseção entre gestão estratégica, desenvolvimento de pessoas e liderança em ambientes de alta complexidade.")'
    ],
    javascript: [
      'console.log("Olá! 👋 Sou Gustavo Máximo");',
      'console.log("Executivo | Liderança situacional | Docente | Mentor | Método C.O.M.A.V.");',
      'console.log("Atuo na interseção entre gestão estratégica, desenvolvimento de pessoas e liderança em ambientes de alta complexidade.");'
    ]
  }), []);

  const typeLine = useCallback(async (language: 'python' | 'javascript') => {
    const line = codeLines[language][currentLine[language]];
    if (currentChar[language] <= line.length) {
      setTypedLines(prev => ({
        ...prev,
        [language]: prev[language].map((l, idx) => 
          idx === currentLine[language] ? line.slice(0, currentChar[language]) : l
        )
      }));
      setCurrentChar(prev => ({ ...prev, [language]: prev[language] + 1 }));
    } else {
      if (currentLine[language] < codeLines[language].length - 1) {
        setCurrentLine(prev => ({ ...prev, [language]: prev[language] + 1 }));
        setCurrentChar(prev => ({ ...prev, [language]: 0 }));
      } else {
        setIsTyping(prev => ({ ...prev, [language]: false }));
      }
    }
  }, [codeLines, currentLine, currentChar]);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setIsTyping({ python: true, javascript: true });
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  useEffect(() => {
    if (isTyping[activeTab]) {
      const timer = setTimeout(() => typeLine(activeTab), 50);
      return () => clearTimeout(timer);
    }
  }, [activeTab, isTyping, typeLine]);

  const handleTabChange = (tab: 'python' | 'javascript') => {
    setActiveTab(tab);
  };

  return (
    <></>
  );
};

export default Terminal;
