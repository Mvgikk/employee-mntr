import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Panel from './pages/Panel';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/panel" element={<Panel />} />
      </Routes>
    </Router>
  );
};

export default App;
