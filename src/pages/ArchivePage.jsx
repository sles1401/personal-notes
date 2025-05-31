import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getArchivedNotes, deleteNote, unarchiveNote } from '../utils/local-data';
import NoteList from '../components/NoteList';

function ArchivePage() {
  const [notes, setNotes] = useState(getArchivedNotes());
  const navigate = useNavigate();

  const handleDelete = (id) => {
    deleteNote(id);
    setNotes(getArchivedNotes());
  };

  const handleUnarchive = (id) => {
    unarchiveNote(id);
    setNotes(getArchivedNotes());
  };

  return (
    <div>
      <h2>Arsip Catatan</h2>
      <button onClick={() => navigate('/')} style={{ marginBottom: '12px' }}>
        ⬅ Kembali
      </button>
      <NoteList notes={notes} onDelete={handleDelete} onArchive={handleUnarchive} />
    </div>
  );
}

export default ArchivePage;
