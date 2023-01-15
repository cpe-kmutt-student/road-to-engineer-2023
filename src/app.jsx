import { FrontPage } from './pages/FrontPage';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
<<<<<<< HEAD
import { OpenHousePage } from './pages/OpenHousePage';
=======
import { AnnouncementPage } from './pages/AnnouncementPage';
import { OpenHousePage } from './pages/OpenHousePage';
import { ProfilePage } from './pages/ProfilePage';
import { EstampPage } from './pages/EstampPage';
>>>>>>> 5d62a81767402c4118c5718e6003de5fa8c91cfb
import { AuthProvider } from './contexts/AuthContext';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './assets/css/app.css';

export const App = () => {
  return (
    <>
    <BrowserRouter basename="/">
      <AuthProvider>
        <Routes>
          <Route path="/" element={<FrontPage/>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/openHouse" element={<OpenHousePage/>} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/announcement" element={<AnnouncementPage />} />
          <Route path="/openhouse" element={<OpenHousePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/estamp" element={<EstampPage />} />
          <Route path="*" element={<Navigate to="/" />} />        
        </Routes>
      </AuthProvider>
    </BrowserRouter>

    </>
  );
}

