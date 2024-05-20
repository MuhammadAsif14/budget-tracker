// // main.jsx
// import React, { useState, useEffect } from "react";
// import ReactDOM from "react-dom";
// import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
// import LoginForm from "./components/LoginForm";
// import BudgetTracker from "./components/BudgetTracker";
// import "./index.css";

// const Main = () => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const savedUser = sessionStorage.getItem("user");
//     if (savedUser) {
//       setUser(savedUser);
//     }
//   }, []);

//   const handleLogin = (username) => {
//     setUser(username);
//   };

//   const handleLogout = () => {
//     sessionStorage.removeItem("user");
//     setUser(null);
//   };

//   return (
//     <Router>
//       <div className="app-container">
//         <header>
//           <h1>Personal Budget Tracker</h1>
//           {user && (
//             <button onClick={handleLogout} className="logout-button">
//               Logout
//             </button>
//           )}
//         </header>
//         <main>
//           <Routes>
//             <Route 
//               path="/login" 
//               element={user ? <Navigate to="/" /> : <LoginForm onLogin={handleLogin} />} 
//             />
//             <Route 
//               path="/" 
//               element={user ? <BudgetTracker /> : <Navigate to="/login" />} 
//             />
//           </Routes>
//         </main>
//       </div>
//     </Router>
//   );
// };

// ReactDOM.render(<Main />, document.getElementById("root"));

// main.jsx
import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import BudgetTracker from "./components/BudgetTracker";
import "./index.css";

const Main = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = sessionStorage.getItem("user");
    if (savedUser) {
      setUser(savedUser);
    }
  }, []);

  const handleLogin = (username) => {
    setUser(username);
  };

  const handleLogout = () => {
    sessionStorage.removeItem("user");
    setUser(null);
  };

  return (
    <Router>
      <div className="app-container">
        <header>
          <h1>Personal Budget Tracker</h1>
          {user && (
            <button onClick={handleLogout} className="logout-button">
              Logout
            </button>
          )}
        </header>
        <main>
          <Routes>
            <Route 
              path="/login" 
              element={user ? <Navigate to="/" /> : <LoginForm onLogin={handleLogin} />} 
            />
            <Route 
              path="/" 
              element={user ? <BudgetTracker /> : <Navigate to="/login" />} 
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Main />);
