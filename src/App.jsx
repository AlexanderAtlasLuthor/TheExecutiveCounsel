import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import WhyJoin from './pages/WhyJoin';
import Membership from './pages/Membership';
import Events from './pages/Events';
import LaunchReception from './pages/LaunchReception';
import Sponsorship from './pages/Sponsorship';
import Standards from './pages/Standards';
import Vision from './pages/Vision';
import Apply from './pages/Apply';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="why-join" element={<WhyJoin />} />
        <Route path="membership" element={<Membership />} />
        <Route path="events" element={<Events />} />
        <Route path="launch" element={<LaunchReception />} />
        <Route path="sponsorship" element={<Sponsorship />} />
        <Route path="standards" element={<Standards />} />
        <Route path="vision" element={<Vision />} />
        <Route path="apply" element={<Apply />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
