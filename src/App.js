import { useState } from "react";
import "./styles.css";

function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')



  function sendEmail(e){
    e.preventDefault();

    if(name === "" || email === "" || message === ""){
      alert("preencha todos os campos");
      return;
    }
    alert("TESTE")
  }


  return (
    <div className="container">
      <h1 className='title'>Contato</h1>
      <form className="form" onSubmit={sendEmail}>
        <div className='containerInput'> 
            <input className="input" type="text" placeholder='Digite seu nome...'
              onChange={(e) => setName(e.target.value)} value={name} />

            <input className="input" type="text" placeholder='Digite seu email...'
              onChange={(e) => setEmail(e.target.value)} value={email}
              />

            <textarea className="input" type="text" placeholder='Digite uma mensagem...'
              onChange={(e) => setMessage(e.target.value)} value={message}
            />

            <button className="button" type="submit">Enviar</button>
        </div>
      </form>
    </div>

  );
         
}

export default App;
