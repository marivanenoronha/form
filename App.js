import "./styles.css";

function App() {
  return (
    <div className="container">
      <h1 className='title'>Contato</h1>

      <div className='containerInput'>
        <input className="input" type="text" placeholder='Digite seu nome...'/>
        <input className="input" type="text" placeholder='Digite seu e-mail...'/>
        <input className="inputt" type="text" placeholder='Digite uma mensagem...'/>
        <button className="button" type="submit">Enviar</button>
      </div>
      
    </div>
    
  );
}

export default App;
