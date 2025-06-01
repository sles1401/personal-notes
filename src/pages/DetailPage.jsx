import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getNote } from '../utils/local-data';

function DetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const note = getNote(id);

  if (!note) {
    return <p>Catatan tidak ditemukan.</p>;
  }

  return (
    <div className="detail-page">
      <div className="detail-page__action">
        <button
          className="action"
          onClick={() => navigate('/')}
          title="Kembali ke Beranda"
        >
          Kembali
        </button>
      </div>

      <h2 className="detail-page__title">{note.title}</h2>
      <p className="detail-page__createdAt">{new Date(note.createdAt).toLocaleString()}</p>
      <div className="detail-page__body">{note.body}</div>
    </div>
  );
}

export default DetailPage;
