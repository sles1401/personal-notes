import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import DetailPage from '../pages/DetailPage';
import NewNotePage from '../pages/NewNotePage';
import ArchivePage from '../pages/ArchivePage';
import NotFoundPage from '../pages/NotFoundPage';

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/notes/:id" element={<DetailPage />} />
      <Route path="/notes/new" element={<NewNotePage />} />
      <Route path="/archives" element={<ArchivePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRouter;
