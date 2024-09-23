import React from 'react';

const Usuario = ({ nombre, email }) => {
  return (
    <li style={styles.item}>
      <strong>Nombre:</strong> {nombre} <br />
      <strong>Email:</strong> {email}
    </li>
  );
};

const styles = {
  item: {
    padding: '10px',
    border: '1px solid #ccc',
    marginBottom: '10px',
    borderRadius: '5px',
  },
};

export default Usuario;
