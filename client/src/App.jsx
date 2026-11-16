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
import ProtectedRoute from './Components/ProtectedRoute';
import { AuthProvider, useAuth } from './context/AuthContext';

function AppRoutes() {
  const { isAuthenticated, loading } = useAuth();
  if (loading) return <div className="auth-loading" role="status">Loading Animal Spirit…</div>;
  return (
    <Routes>
      <Route path="/" element={<Navigate to={isAuthenticated ? '/home' : '/login'} replace />} />
      <Route path="/login" element={isAuthenticated ? <Navigate to="/home" replace /> : <LogIn />} />
      <Route path="/signin" element={isAuthenticated ? <Navigate to="/home" replace /> : <SignUp />} />
      <Route element={<ProtectedRoute />}>
        <Route element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/support" element={<Support />} />
        </Route>
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default function App() {
  return <BrowserRouter><AuthProvider><AppRoutes /></AuthProvider></BrowserRouter>;
}
