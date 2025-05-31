import React, { useState } from 'react';
import { getActiveNotes, deleteNote } from '../utils/local-data';
import NoteList from '../components/NoteList';
import SearchBar from '../components/SearchBar';

function HomePage() {
  const [notes, setNotes] = useState(getActiveNotes());
  const [keyword, setKeyword] = useState('');

  const handleDelete = (id) => {
    deleteNote(id);
    setNotes(getActiveNotes());
  };

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <div>
      <h2>Daftar Catatan</h2>
      <SearchBar keyword={keyword} onKeywordChange={setKeyword} />
      <NoteList notes={filteredNotes} onDelete={handleDelete} />
    </div>
  );
}

export default HomePage;
