import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './components/homepage';
import AboutPage from './components/About';
import CaseStudyDetail from './pages/CaseStudyDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
      {/*<Route path="/about" element={<AboutPage />} />*/}
        <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;