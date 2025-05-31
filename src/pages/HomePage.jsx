import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getActiveNotes, deleteNote, archiveNote } from '../utils/local-data';
import NoteList from '../components/NoteList';
import SearchBar from '../components/SearchBar';

function HomePage() {
  const [notes, setNotes] = useState(getActiveNotes());
  const [keyword, setKeyword] = useState('');
  const navigate = useNavigate();

  const handleDelete = (id) => {
    deleteNote(id);
    setNotes(getActiveNotes());
  };

  const handleArchive = (id) => {
    archiveNote(id);
    setNotes(getActiveNotes());
  };

  const handleAddNote = () => {
    navigate('/notes/new');
  };

  const handleToArchivePage = () => {
    navigate('/archives');
  };

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <div>
      <h2>Daftar Catatan</h2>

      <div style={{ marginBottom: '16px' }}>
        <button onClick={handleAddNote} style={{ marginRight: '12px' }}>
          + Tambah Catatan
        </button>
        <button onClick={handleToArchivePage}>
          📦 Lihat Arsip
        </button>
      </div>

      <SearchBar keyword={keyword} onKeywordChange={setKeyword} />
      <NoteList notes={filteredNotes} onDelete={handleDelete} onArchive={handleArchive} />
    </div>
  );
}

export default HomePage;
