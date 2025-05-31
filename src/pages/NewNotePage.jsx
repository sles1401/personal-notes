import React from 'react';
import { useNavigate } from 'react-router-dom';
import NoteForm from '../components/NoteForm';
import { addNote } from '../utils/local-data';

function NewNotePage() {
  const navigate = useNavigate();

  const handleAdd = (note) => {
    addNote(note);
    navigate('/');
  };

  return (
    <div>
      <h2>Tambah Catatan Baru</h2>
      <NoteForm onAdd={handleAdd} />
    </div>
  );
}

export default NewNotePage;
