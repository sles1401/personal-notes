import React, { useState } from 'react';
import PropTypes from 'prop-types';

function NoteForm({ onAdd }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ title, body });
    setTitle('');
    setBody('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Judul"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Isi catatan"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        required
      />
      <button type="submit">Tambah</button>
    </form>
  );
}

NoteForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default NoteForm;
