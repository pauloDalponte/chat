import  { useState } from 'react';
import './chat.css';
import PropTypes from 'prop-types';

// Remova a declaração de interface
// interface MessageProps {
//   user: string;
//   content: string;
// }

const Message = ({ user, content }) => (
  <div className={`message-item ${user === 'Você' ? 'message-user' : ''}`}>
    <div className="msg-user">
      <strong>{`${user} diz:`}</strong>
    </div>
    <div className="msg-chat">{content}</div>
  </div>
);

// Se você estiver usando PropTypes, adicione a validação de tipo aqui
Message.propTypes = {
  user: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

const Chat = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { user: 'Atendente', content: 'Em que posso lhe ajudar?' },
    // Adicione mais mensagens conforme necessário
  ]);

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (message.trim() !== '') {
      setMessages((prevMessages) => [
        ...prevMessages,
        { user: 'Você', content: message },
      ]);
      setMessage('');
    }
  };

  return (
    <div id="chat-screen">
      <header>
        <h2>Atendimento on-line</h2>
      </header>
      <div className="messages-list">
        {messages.map((msg, index) => (
          <Message key={index} user={msg.user} content={msg.content} />
        ))}
      </div>
      <form id="form-chat-send" onSubmit={handleSubmit}>
        <input
          type="text"
          id="message"
          name="message"
          placeholder="Digite sua mensagem..."
          value={message}
          onChange={handleChange}
        />
        <button type="submit">ENVIAR</button>
      </form>
    </div>
  );
};

export default Chat;
