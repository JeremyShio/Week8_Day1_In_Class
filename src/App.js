import React from 'react';
import Navbar from './components/Navbar';


// function App() {
//     let random = Math.floor(Math.random() * 2)
//     if (random) {
//         return (
//             <h1>Hello World, my name is Jeremy!</h1>
//         );
//     } else {
//         return (
//             <h3>Good Bye World, see you tomorrow!</h3>
//         );
//     }
// };


// function App() {
//     // React.createElement('h1', null, 'Hello World', '-')
//     const element = <h1>Hello World! My name is <b>Jeremy!</b> - {Math.floor(Math.random() * 10)}</h1>
//     return (
//         element
//     )
// };


// function App() {
//     // React.createElement('h1', null, 'Hello World', '-')
//     const element = <h1>Hello World! My name is <b>Jeremy!</b> - {Math.floor(Math.random() * 10)}</h1>
//     return (
//         // React fragment '<>... </>'
//         <>
//             <div>Hello</div>
//             <div>World</div>
//             <div>My</div>
//             <div>Name</div>
//             <div>Is</div>
//             <div>Jeremy</div>
//         </>
//         // Fragment connects divs without giving them a <div> container
//     )
// };


function App(props) {
    return (
        <>
            <Navbar a = {1} name = 'Jeremy' city = 'San Diego'/>
        </>
        // JSX expression used for (anything other than string) numbers '{}' 
    )
};


export default App;


