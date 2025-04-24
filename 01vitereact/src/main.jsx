import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// function MyApp() {
//   return (
//     <div>
//       <h2>Custom App!!</h2>
//     </div>
//   )
// }

// const reactElement = {
//   type: 'a',
//   props: {
//       'href': 'https://www.google.com',
//       'target': '_blank'
//   },
//   children: 'Click me to visit google'
// }

// const anotherElement = (
//   <a href="https://www.google.com" target='_blank'>Visit Google</a>
// )

const anotherUser = "Vijay Sharma";

const reactElement = React.createElement(
  'a',
  { href: 'https://google.com', target: '_blank' },
  'Click me to visit google',
  anotherUser
) //will work

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <MyApp /> */}
    {reactElement}
    {/* {MyApp()} //this will also work but it is not recommended to use. */}
    {/* reactElement // we will get error as createRoot is expecting some definite syntax. */}
    {/* {anotherElement} // this will work as it is mathcing the syntax that createRoot is expecting. */}

  </StrictMode>,
)
