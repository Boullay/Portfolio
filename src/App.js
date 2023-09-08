import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './containers/Home';
import WrongPage from './containers/WrongPage';

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="404" element={<WrongPage />}/>
      <Route path="*" element={<Navigate to="/404"/>}/>
    </Routes>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
