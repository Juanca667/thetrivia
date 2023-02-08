import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from '../context/UserContext';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Game = () => {
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(0);
  const { user } = useContext(UserContext);
  const { category, limit, difficulty } = useParams();
  

  useEffect(() => {
    const getQuestions = async () => {
      const response = await axios.get(
        `https://the-trivia-api.com/api/questions?categories=${category}&limit=${limit}&difficulty=${difficulty}`
      );
      setQuestions(response.data);
    };
    getQuestions();
  }, []);

  return (
    <div>
      <h1>Welcome, {user}!</h1>
      <p>Category: {category}</p>
      <p>Difficulty: {difficulty}</p>
      <p>Number of questions: {limit}</p>
      <p>Score: {score}</p>
      <p>Time remaining: {time}</p>
    </div>
  );
};

export default Game;
