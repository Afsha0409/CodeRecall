
import { React, useState, useEffect } from "react";
import { BrowserRouter, Router, Route, Routes, Navigate } from 'react-router-dom';
import './styles.css'; // Import the styles
import axios from "axios";
// Import components
import { Header } from './components/Header';
// import Footer from './components/Footer';
// import FQAS from './components/Faqs';
import ChatbotIcon from './components/ChatbotIcon';
// Import pages
import Home from './components/Home';
// Add more page imports as needed
import ConnectPage from './pages/ConnectPage';
import SignupPage from './components/SignUp';
import LoginPage from './components/Login';
import Frontend from './pages/Frontend';
import Backend from './pages/Backendpage';
import NavbarTask from './pages/tasks/task-navbar';
import Carousal from './pages/tasks/carousel-task-btn'
import Grid from './pages/tasks/grid';
import Fetch from './pages/tasks/fetch';
import FlexNavbar from './pages/tasks/task-flexbox-navbar';
import Cssani from './pages/tasks/css-animations';
import Form from './pages/tasks/form-validation';
import Pwa from './pages/tasks/pwa';
import Quizzes from './pages/tasks/quizes/QuizzesPage';
import Quize from './pages/tasks/quizes/HtmlQuize';
import ProfileMenu from "./components/ProfileMenu";
import Dashboard from "./components/Dashboard";
import DailyStory from "./components/Stories/DailyStory";
import StoriesDetails from "./components/Stories/StoriesDetails";
import ChallengesPage from './pages/ChallengesPage';
import SubmissionForm from './components/Challenges/SubmissionForm';
import ChallengeDetail from './components/Challenges/ChallengeDetail';
import Project from './pages/Projects';
import { ProjectDetail } from "./pages/Projects";
// import HomeStoriesCarousel from "./components/HomeStoriesCarousel";

// import SubmissionForm from './components/Challenges/SubmissionForm';
// import View from './views/home.ejs';
// import Head from './components/Header';
// import Backend from './pages/Backend';
// import Frameworks from './pages/Frameworks';
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:3001/user', { withCredentials: true })
      .then(response => {
        if (response.data.user) {
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
      })
      .catch(() => setIsLoggedIn(false));
  }, []);

  return (
    <BrowserRouter>
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <div className="App">
        <ProfileMenu />
        <Routes>
          {/* Define routes for different pages */}
          <Route path="/" element={<Home />} />
          <Route path="/connect" element={<ConnectPage />} />
          <Route path="/login" element={isLoggedIn ? <Navigate to="/home" /> : <LoginPage setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/signup" element={isLoggedIn ? <Navigate to="/home" /> : <SignupPage setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/frontend" element={<Frontend />} />
          <Route path="/Backendpage" element={<Backend />} />
          <Route path="/task-navbar" element={<NavbarTask />} />
          <Route path="/carousel-task-btn" element={<Carousal />} />
          <Route path="/grid" element={<Grid />} />
          <Route path="/fetch" element={<Fetch />} />
          <Route path="/task-flexbox-navbar" element={<FlexNavbar />} />
          <Route path="/css-animations" element={<Cssani />} />
          <Route path="/form-validation" element={<Form />} />
          <Route path="/pwa" element={<Pwa />} />
          <Route path="/QuizzesPage" element={<Quizzes />} />
          <Route path="/HtmlQuize" element={<Quize />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/startups" element={<DailyStory />} />
          <Route path="/startups/:id" element={<StoriesDetails />} />
          {/* <Route path="/storiescarousal" element={<HomeStoriesCarousel />} /> */}

          {/* <Route
            path="/dashboard"
            element={() => {
              window.location.href = "http://localhost:3001/dashboard";
              return null;
            }}
          /> */}

          {/* Uncomment and add more routes as needed */}
          {/* 
          <Route path="/backend" element={<Backend />} />
          <Route path="/frameworks" element={<Frameworks />} /> */}

          <Route path="/challenges" element={<ChallengesPage />} />
          <Route path="/challenges/:id" element={<ChallengeDetail />} />
          <Route path="/challenges/:id/submission" element={<SubmissionForm />} />
          <Route path="/Projects" element={<Project />} />
          {/* <Route path="/challenges/:id/submit" element={<SubmissionForm />} /> */}
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
        {/* <FQAS/> */}
        <ChatbotIcon />
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;


