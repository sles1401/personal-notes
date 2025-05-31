import React from 'react';
import { useParams } from 'react-router-dom';
import { getNote } from '../utils/local-data';

function DetailPage() {
  const { id } = useParams();
  const note = getNote(id);

  if (!note) return <p>Catatan tidak ditemukan</p>;

  return (
    <div>
      <h2>{note.title}</h2>
      <small>{new Date(note.createdAt).toLocaleString()}</small>
      <p>{note.body}</p>
    </div>
  );
}

export default DetailPage;
