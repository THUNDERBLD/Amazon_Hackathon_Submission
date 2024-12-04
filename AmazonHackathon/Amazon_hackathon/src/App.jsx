import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import './App.css';
import Dashboard from './pages/Dashboard.jsx';
import Docs from './pages/Docs.jsx';
import Analytics from './pages/Analytics.jsx';
import Payments from './pages/Payments.jsx';
import Tracking from './pages/Tracking.jsx';
import Agents from './pages/Agents.jsx';
import CarbonQuest from './pages/CarbonQuest.jsx';
import LoginPage from './pages/LoginPage.jsx';
import ChatInterface from './pages/ChatInterface.jsx';
import RegisterPage from './pages/RegisterPage.jsx';
import HelpPage from './pages/HelpPage.jsx';

const pageVariants = {
  initial: { x: '100%', opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: '-100%', opacity: 0 },
};

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/dashboard"
          element={
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              transition={{ duration: 0.5 }}
            >
              <div className="w-s">
              <Dashboard />

              </div>
            </motion.div>
          }
        />
        <Route
          path="/"
          element={
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              transition={{ duration: 0.5 }}
            >
              <LoginPage />
            </motion.div>
          }
        />
        <Route
          path="/register"
          element={
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              transition={{ duration: 0.5 }}
            >
              <RegisterPage />
            </motion.div>
          }
        />
        <Route 
          path="/docs"
          element={
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              transition={{ duration: 0.5 }}
            >
              <Docs />
            </motion.div>
          }
        />
        <Route
          path="/analytics"
          element={
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              transition={{ duration: 0.5 }}
            >
              <Analytics />
            </motion.div>
          }
        />
        <Route
          path="/payments"
          element={
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              transition={{ duration: 0.5 }}
            >
              <Payments />
            </motion.div>
          }
        />
        <Route
          path="/tracking"
          element={
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              transition={{ duration: 0.5 }}
            >
              <Tracking />
            </motion.div>
          }
        />
        <Route
          path="/chatinterface"
          element={
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              transition={{ duration: 0.5 }}
            >
              <ChatInterface />
            </motion.div>
          }
        />
        <Route
          path="/agents"
          element={
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              transition={{ duration: 0.5 }}
            >
              <Agents />
            </motion.div>
          }
        />
        <Route
          path="/Help-Page"
          element={
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              transition={{ duration: 0.5 }}
            >
              <HelpPage />
            </motion.div>
          }
        />
        <Route
          path="/carbonquest"
          element={
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              transition={{ duration: 0.5 }}
            >
              <CarbonQuest />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}

export default App;