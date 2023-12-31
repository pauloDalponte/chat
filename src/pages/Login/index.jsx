// Arquivo: MeuComponente.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';

const MeuComponente = () => {
  const [nome, setNome] = useState('');
  const navigate = useNavigate();

  const handleChange = (event) => {
    setNome(event.target.value);
  };

  const irParaChat = () => {
    navigate('/chat');
  };

  return (
    <div>
      <h1>Insira seu nome:</h1>
      <input
        type="text"
        value={nome}
        onChange={handleChange}
        placeholder="Digite seu nome"
      />
      <p className = "Ola">Olá, {nome || 'Visitante'}!</p>
      <button type="button" onClick={irParaChat}>
        Go Chat
      </button>
      <p className="Dupla">Dupla: Paulo Cesar Dal Ponte/Bruno Rosso</p>
    </div>
  );
};

export default MeuComponente;


