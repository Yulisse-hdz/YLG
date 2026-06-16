import { useState } from 'react';
import api from '../services/api';

function Registro() {
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [password, setPassword] = useState('');

    const registrar = async (e) => {
        e.preventDefault();

        try {
            const res = await api.post('/usuarios/registro', {
                nombre,
                correo,
                password
            });

            alert(res.data.mensaje);

        } catch (error) {
            alert('Error al registrar');
        }
    };

    return (
        <form onSubmit={registrar}>
            <h2>Registro</h2>

            <input
                type="text"
                placeholder="Nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
            />

            <input
                type="email"
                placeholder="Correo"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
            />

            <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <button type="submit">
                Registrarse
            </button>
        </form>
    );
}

export default Registro;