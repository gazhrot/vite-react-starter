import { BrowserRouter, Routes, Route } from 'react-router';
import Home from './routes/Home';
import Login from './routes/Login';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}