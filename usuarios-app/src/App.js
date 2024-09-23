import React, { useState, useEffect } from 'react';
import Usuario from './Component/Usuario'; 

function App() {
  const [usuarios, setUsuarios] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error('Error al cargar los usuarios');
        }
        const data = await response.json();
        setUsuarios(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setCargando(false);
      }
    };

    fetchUsuarios();
  }, []);

  if (cargando) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div style={styles.container}>
      <h1>Lista de Usuarios</h1>
      <ul style={styles.lista}>
        {usuarios.map((usuario) => (
          <Usuario key={usuario.id} nombre={usuario.name} email={usuario.email} />
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '50px',
    width: '300px',
    margin: 'auto',
  },
  lista: {
    listStyleType: 'none',
    padding: 0,
    width: '100%',
  },
};

export default App;


