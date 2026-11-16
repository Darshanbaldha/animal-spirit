import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Layout';
import Home from './Components/Home';
import Gallery from './Components/Gallery';
import Contact from './Components/Contact';
import Blog from './Components/Blog';
import Support from './Components/Support';
import LogIn from './Components/LogIn';
import SignUp from './Components/SignUp';
import Profile from './Components/Profile';
import { AuthProvider, useAuth } from './context/AuthContext';

function AppRoutes() {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return <div className="auth-loading" role="status">Loading Animal Spirit…</div>;
  }

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route element={<Layout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/support" element={<Support />} />
        <Route path="/profile" element={isAuthenticated ? <Profile /> : <Navigate to="/login" replace state={{ from: { pathname: '/profile' } }} />} />
      </Route>
      <Route path="/login" element={isAuthenticated ? <Navigate to="/profile" replace /> : <LogIn />} />
      <Route path="/signin" element={isAuthenticated ? <Navigate to="/profile" replace /> : <SignUp />} />
      <Route path="*" element={<Navigate to="/home" replace />} />
    </Routes>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  );
}