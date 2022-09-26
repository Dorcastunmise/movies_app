import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../src/components/Header/Header';
import Home from '../src/components/Home/Home';
import MovieDetail from '../src/components/MovieDetail/MovieDetail';
import PageNotFound from '../src/components/PageNotFound/PageNotFound';
import Footer from '../src/components/Footer/Footer';
import '../src/App.scss';

function App() {
  const [darkMode, setDarkMode] = React.useState(true);
    function toggleDarkMode() {
        setDarkMode(prevMode => !prevMode)
    }
  return (
    <div className="App">
      <Router>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <div className='container'>     
      <Routes>
      <Route darkMode={darkMode} path='/' exact element={<Home />} />
      <Route path='/movie/:movieID' exact element={<MovieDetail />}/>
      <Route path="*" element={<PageNotFound />}/>
      </Routes>
      </div>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
