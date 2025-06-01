import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function NoteItem({ id, title, body, createdAt }) {
  return (
    <div className="note-item">
      <Link to={`/notes/${id}`} className="note-item__title">
        <h3>{title}</h3>
      </Link>
      <p className="note-item__createdAt">{new Date(createdAt).toLocaleString()}</p>
      <p className="note-item__body">{body}</p>
    </div>
  );
}

NoteItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default NoteItem;
