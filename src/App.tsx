import {  HashRouter, Routes, Route } from 'react-router-dom';
import { HeroUIProvider } from "@heroui/system";
import Navigation from './components/Navigation';
import AboutPage from './pages/AboutPage';
import ParcoursPage from './pages/ParcoursPage';

export function App() {
  return (
    <HeroUIProvider>
      <HashRouter>
        <Navigation />
          <AboutPage/>
          <ParcoursPage/>
      </HashRouter>
    </HeroUIProvider>
  );
}