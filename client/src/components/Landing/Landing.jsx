import React from "react";

const Landing = (props) => {
    const {handleSubmit}=props
  return (
    <div>
      <h1>Bienvenidos a la pokePagina😁</h1>
      <button onClick={handleSubmit}>ingresar</button>
    </div>
  );
};

export default Landing;
