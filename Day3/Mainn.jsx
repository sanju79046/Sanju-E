import React from "react";

const Mainn = () => {
  return (
    <div>
      <center>

      <label for="name">Email Id: &emsp;</label>
      <input id="name" type="box" placeholder="Email ID"></input>
      <br></br>
      <label for="na">Password: &emsp;</label>
      <input id="na" type="box" placeholder="Password"></input>
      <br></br>
      <label for="n" style={{color: "aqua",fontFamily:"inherit"}}>Submit: &emsp;</label>
      <input id="n" type="box" placeholder="click"></input>

      </center>
    </div>
  );
};

export default Mainn;