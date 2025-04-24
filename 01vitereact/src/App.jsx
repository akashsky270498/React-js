
// function App() {

//   return (
//     <h1>RCB || RCB || RCB..</h1>,
//     <p>You're getting a ',' expected.ts(1005) error because your inner $lookup inside the pipeline is not wrapped properly — it's missing braces or syntax is malformed.</p>
//   )
// }

// export default App

// import test from './test'

/*
function App() {
  return (
    <test /> //react-dom_client.js?v=c2598a1b:8153 The tag <test> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.


  )
}

export default App;
*/

import Test from "./test";

function App() {

  const username = "Virat or kohli"
  return (
    // <Test />
    // <h2>Heading2</h2> // error: we need to use div tag or fragment <> we include more then one tag it a rule of jsx.
    <>
      <Test />
      <h3>Heading three {username}</h3>
      <h5>heading five</h5>
    </>
  )
}

export default App;