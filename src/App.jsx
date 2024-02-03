//import { useState } from "react";

function App() {
  //comma Operator
  let x = 11;
  x = (x++, x);
  console.log(x);

  let y = (5 + 4, 3 + 4);
  console.log(y);

  let z = (5, 5) + (6, 9);
  console.log(z);
  return (
    <>
      <h2 className="text-cyan-500 flex justify-center">
        Hello Brother,I love you so much.
      </h2>
    </>
  );
}

export default App;
