import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {

  const [name, setName] = useState('');
  const [occupation, setOccupation] = useState('');
  const [interest, setInterest] = useState('');
  const [age, setAge] = useState('');
  const [message, setMessage] = useState('');
  const [todoList, setTodoList] = useState([]);
  const [todoText, setTodoText] = useState('');
  const recommendedTasks = [
    'Try thai cuisine!',
    'Try learning chess, its not too difficult!',
    'Thai fried rice, and tom yum soup',
    'South Indian parota with salna',
    // Add more recommended tasks
  ];
  const handleSaveData = () => {
    const userData = {
      name,
      occupation,
      interest,
      age: parseInt(age),
      message,
    };

    axios
        .post('/api/users', userData)
        .then((response) => {
          console.log('User data saved successfully:', response.data);
        })
        .catch((error) => {
          console.error('Error saving user data:', error);
        });
  };
  const images = [
    'family.jpeg',
    'WhatsApp Image 2023-07-16 at 9.21.30 PM.jpeg',
    'WhatsApp Image 2023-07-16 at 9.29.38 PM.jpeg',
      'WhatsApp Image 2023-07-16 at 9.35.13 PM.jpeg',
      'WhatsApp Image 2023-07-16 at 9.38.07 PM.jpeg',
      'WhatsApp Image 2023-07-16 at 9.45.04 PM.jpeg',
    // Add more image paths
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleAddTodo = (event) => {
    event.preventDefault();
    if (todoText !== '') {
      setTodoList([...todoList, todoText]);
      setTodoText('');
    }
  };

  const handleTodoChange = (event, index) => {
    const updatedTodoList = [...todoList];
    updatedTodoList[index] = event.target.checked;
    setTodoList(updatedTodoList);
  };

  return (
      <div className="app">
        <header>
          <h1>Mrithunjay Tanish Shanmuganand</h1>
          <nav>
            <a href="https://mrithunjaytanishshan2026.itch.io/">MyBuiltGames</a>
            <a href="https://www.linkedin.com/in/mrithunjay-tanish-shanmuganand-560578235/">LinkedIn</a>
            <a href="https://www.youtube.com/channel/UCdcpUie7A8VGL2zsv9_ILMg">YouTube Channel</a>
          </nav>
        </header>
        <div className="grid">
          <div className="slideshow">
            <img src={images[currentImageIndex]} alt="Slideshow" />
          </div>
          <div className="dotted-list">
            <h2>Things that Mitu is doing right now:</h2>
            <ul>
              <li>Working on an internship</li>
              <li>Learning cs50</li>
              <li>Learning full stack development</li>
              <li>Teaching kids how to game program</li>
              <li>Mastering chess</li>
              <li>studying for sophomore year 😅</li>
              <li>Playing soccer</li>
              <li>chores ;(</li>

              {/* Add more random things to do */}
            </ul>
          </div>
          <div className="user-section">
            <h2>User Section</h2>
            <form>
              <label>
                Name:
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
              </label>
              <label>
                Occupation:
                <input
                    type="text"
                    value={occupation}
                    onChange={(e) => setOccupation(e.target.value)}
                />
              </label>
              <label>
                Why are you interested in the web app?
                <textarea
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)}
                />
              </label>
              <label>
                Age:
                <input
                    type="text"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />
              </label>
              <label>
                What do you want to tell Mrithunjay?
                <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
              </label>

              <button type="button" onClick={handleSaveData}>
                Save User Data
              </button>
            </form>
          </div>
          <div className="dotted-list">
            <h2>Skills:</h2>
            <ul>
              <li>Soccer (intermediate)</li>
              <li>Spanish (intermediate)</li>
              <li>Chess (FM level)</li>
              <li>Full stack development (beginner)</li>
              <li>C, C# (intermediate)</li>
              <li>Game Programming (mastered)</li>
              <li>App development (ok)</li>
              {/* Add more skills */}
            </ul>
          </div>
          <div className="background-info">
            <h2>Background Info:</h2>
            <img src="dog.jpeg" alt="Mitu" />
            <p>Phone Number: 425-394-2112</p>
            <p>Age: 15</p>
            <p>Grade Level: 10</p>
          </div>
          <div className="about-me">
            <h2>About Me</h2>
            <p>An programmer, chess player, soccer enthusiast and bored 15 year old I have embarked on my own journey of programming throughout the last 4 years through full stack, online courses and recently cs50. I have also embarked on a long standing journey of chess at 2300 rating on chess.com a tireless battle of learning and strategy that has kept me in the top of chess. Soccer on the other hand has been with me every since my arrival to the United States an way for me to connect with new friends which I have kept playing throughout my school career</p>
            <h2>Things I recommend to try:</h2>
            <ul>
              {recommendedTasks.map((task, index) => (
                  <li key={index}>
                    {task}
                  </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
  );
}

export default App;

