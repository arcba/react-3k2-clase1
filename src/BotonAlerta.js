import React, { props } from 'react';
function BotonAlerta({ mensaje, text }) {
  function mostrarMensaje(msg) {
    console.log(msg);
    window.alert(msg);
  }
  return (
    <div>
      {/*<input
        type="button"
        value={props.text}
        onClick={() => mostrarMensaje(props.mensaje)}
      />*/}
      <button
        onClick={() =>
          mostrarMensaje(!mensaje ? 'valor predeterminado' : mensaje)
        }
      >
        {text}
      </button>
    </div>
  );
}
export default BotonAlerta;
