import React from 'react';
import Formulario from './components/Formulario'

function App() {
  return (
    <div className="container" >
      <header>
        <nav>
        <h1>Copy & Paste</h1>
        </nav>
        

        <div className="contenido-principal contenido">
          <Formulario/>
        </div>
      </header>
    </div>
    
  );
}

export default App;
