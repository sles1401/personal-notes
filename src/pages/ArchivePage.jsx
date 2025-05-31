import React from 'react';
import { getArchivedNotes } from '../utils/local-data';
import NoteList from '../components/NoteList';

function ArchivePage() {
  const notes = getArchivedNotes();

  return (
    <div>
      <h2>Arsip Catatan</h2>
      <NoteList notes={notes} />
    </div>
  );
}

export default ArchivePage;
