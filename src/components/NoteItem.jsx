import React from 'react';
import PropTypes from 'prop-types';

function NoteItem({ id, title, body, createdAt, onDelete }) {
  return (
    <div className="note-item">
      <h3>{title}</h3>
      <small>{new Date(createdAt).toLocaleString()}</small>
      <p>{body}</p>
    </div>
  );
}

NoteItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default NoteItem;
