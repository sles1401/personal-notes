import React from 'react';
import PropTypes from 'prop-types';
import NoteItem from './NoteItem';

function NoteList({ notes, onDelete, onArchive }) {
  if (!notes.length) {
    return <p>Tidak ada catatan.</p>;
  }

  return (
    <div>
      {notes.map((note) => (
        <div key={note.id} style={{ border: '1px solid #ddd', padding: '12px', marginBottom: '8px' }}>
          <NoteItem {...note} />
          <div style={{ marginTop: '8px' }}>
            <button onClick={() => onDelete(note.id)} style={{ marginRight: '8px' }}>
              Hapus
            </button>
            <button onClick={() => onArchive(note.id)}>
              Arsipkan
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

NoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
};

export default NoteList;
