import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AnswerView from "./pages/AnswerView";
import PostQuestion from "./pages/postQuestion";

function App() {
  const [question, setQuestion] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:8000/api/questions")
  //     .then(res => res.json())
  //     .then(data => setQuestions(data));
  // }, []);

  return (
    <>
      <div className="min-h-screen bg-black text-white">
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
              <
                PostQuestion
                question={question}
                setQuestion={setQuestion}
                />}
            />
            <Route
              path="/answer/"
              element={<AnswerView question = {question}/>}
            />
          </Routes>
        </BrowserRouter>
      </div>
      
    </>
    
  );
}

export default App;


// import { useEffect, useState } from "react";

// function App() {
//   const [questions, setQuestions] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:8000/api/questions")
//       .then(res => res.json())
//       .then(data => setQuestions(data));
//   }, []);

//   return (
//     <div style={{ padding: "20px" }}>
//       <h1>Community GPT</h1>

//       {questions.map(q => (
//         <div key={q.id} style={{ marginBottom: "12px" }}>
//           <strong>{q.title}</strong>
//           <div>Answers: {q.answers}</div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default App;


// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
