import React from 'react';
import Router from 'react-router-dom';
import 

function App() {
  return (
    <div className='container'>
      {/**
       * TODO:
       * > Use the Router component from react-router-dom to wrap the Navbar and Routes (contains a closing tag) components.
       * > Inside the Routes component, add the following Route components:
       *   - The first Route component should have the following props:
       *      - exact (This is a boolean prop that should be set to true)
       *      - path: "/" (This is the root path)
       *      - element: A Home component
       *  - The second Route component should have the following props:
       *      - path: "/about"
       *      - element: An About component
       *  - The third Route component should have the following props:
       *      - path: "/contact"
       *    - element: A Contact component
       * 
       * > The Navbar component should be rendered above the Routes component.
       * 
       * Reference (BrowserRouter, Route, Routes, Link): https://reactrouter.com/en/6.22.3/router-components/browser-router#basename
       * 
       */}
       {
        const Router ({}) = {
          Route ({props}) = {
            (exact = true),
            path,
            element
          }
          Route ({props}) = {
            path, 
            element
          }
          Route ({props}) = { 
            path, 
            element
          };
        };
      };

    </div>
  );
}



export default App;
