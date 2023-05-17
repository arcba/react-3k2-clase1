import React from 'react';
import './style.css';
import BotonAlerta from './BotonAlerta';

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <BotonAlerta mensaje="Desarrollo de Software" text="DDS" />
      <BotonAlerta mensaje="Otro Mensaje" text="Otro boton" />
      <BotonAlerta text="Sin mensaje" />
    </div>
  );
}
