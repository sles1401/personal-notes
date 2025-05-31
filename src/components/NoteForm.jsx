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
      <div>
        <label htmlFor="title">Judul:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="body">Isi:</label>
        <textarea
          id="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        />
      </div>
      <button type="submit">Tambah</button>
    </form>
  );
}

NoteForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default NoteForm;
