import React, { useState } from 'react';
import './ChatbotServicePage.css';

const FAQPage = () => {
  const faqs = [
    {
      question: 'What is a Chatbot Facility for Deaf and Mute Individuals?',
      answer: 'A chatbot facility in a web application designed for deaf and mute users is an interactive communication tool that enables individuals with speech and hearing impairments to engage in text-based conversations. It bridges the communication gap by allowing users to communicate in their preferred mode, be it sign language or written text.',
    },
    {
      question: 'How does the chatbot facility work?',
      answer: 'The chatbot operates through a user-friendly interface where users can input their messages in text format. For deaf users, these messages can be converted into sign language, while responses from the chatbot are presented as text. This two-way communication channel facilitates smooth interactions and information exchange.',
    },
    {
      question: 'What Are the Benefits of Using a Chatbot Facility?',
      answer: 'The chatbot facility enhances communication for deaf and mute users by providing a platform where they can express themselves, seek information, and engage in conversations. It offers real-time accessibility, immediate responses, and the ability to learn and practice sign language in a supportive environment.',
    },
    {
      question: 'Can I Use the Chatbot to Learn Sign Language?',
      answer: 'Yes, the chatbot can serve as a valuable learning tool. Users who are learning sign language can interact with the chatbot to practice their skills. The chatbot responds with accurate signs, helping users improve their signing proficiency and gain confidence in their communication abilities.',
    },
    {
      question: 'Is the Chatbot Available 24/7?',
      answer: 'Absolutely, one of the advantages of the chatbot facility is its availability around the clock. Users can access the chatbot at any time, making it convenient for seeking information, assistance, or engaging in conversations regardless of time zones.',
    },
    {
      question: 'Is the Chatbot Facility Secure and Private?',
      answer: 'Absolutely, privacy and security are prioritized. The chatbot facility ensures that user interactions are private and confidential, fostering a safe space for open communication.',
    },
    {
      question: 'How Does the Chatbot Facility Enhance Accessibility and Inclusivity?',
      answer: 'The chatbot facility promotes inclusivity by catering to the communication preferences of deaf and mute individuals. It ensures that everyone can engage in meaningful conversations and access information, thereby breaking down barriers and fostering a more inclusive digital environment.',
    },
    {
      question: 'Can I Use the Chatbot to Communicate with Others?',
      answer: 'Yes, the chatbot acts as a bridge between users who communicate using different modes, such as sign language and written text. It can convert text messages to signs or vice versa, facilitating effective communication between individuals with diverse communication needs.',
    }
  ];

  const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAnswer = () => {
      setIsOpen(!isOpen);
    };

    return (
      <div className="faq-item">
        <div className="faq-question" onClick={toggleAnswer}>
          <h3>{question}</h3>
          <span className={`icon ${isOpen ? 'open' : 'closed'}`}></span>
        </div>
        {isOpen && <div className="faq-answer">{answer}</div>}
      </div>
    );
  };

  return (
    <div className="intro-box">
      <div className="intro-paragraph fade-in">
        <p></p>
          <p align='justify'>In a deaf and mute web application, the inclusion of a chatbot facility 
        plays a pivotal role in revolutionizing communication and accessibility 
        for individuals with speech and hearing impairments. This innovative feature offers
         a platform through which users, who communicate primarily through sign language or
          written text, can interact seamlessly. The chatbot serves as a bridge, enabling effective
           communication between users using different modes of language expression. By allowing users 
           to input text messages, the chatbot can convert them into sign language or vice versa, 
           breaking down language barriers and fostering meaningful interactions. This technology not only 
           provides practical benefits, such as immediate customer support and assistance, but also serves 
           as a dynamic tool for learning and practicing sign language. Users, especially those in the process 
           of acquiring sign language skills, can engage with the chatbot in a safe environment, honing their
            abilities and building confidence in their communication capabilities. Furthermore, the chatbot's 
            presence enhances the overall inclusivity and accessibility of the application, offering a private
             and comfortable means of expression for users who might feel hesitant to communicate through traditional 
             methods. As technology continues to advance, the potential for AI-driven enhancements within the chatbot 
             opens up opportunities for nuanced understanding.</p>
            
      <p></p>
      <img src='chatbot.gif' className='centered-img' alt='Chatbot' width='500' height='500' />
      </div>
      <p></p>
      <p></p>
      <h1 align='center'>Frequently Asked Questions (FAQs)</h1>
      <p></p>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQPage;
