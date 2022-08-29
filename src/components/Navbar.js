// rfc emmet abbriviation (React Function Component)
import React from 'react'

export default function Navbar(props) {
    console.log('Hello this is the navbar component');
    console.log(props);
    return (
        <nav className = "navbar navbar-expand-lg navbar-light bg-light">
            <div className = "container-fluid">
                {/* JSX expression used to call props.name props.city props.a */}
                <a className = "navbar-brand" href = "/">Welcome {props.name} from {props.city} you are Number: {props.a}</a>
                <button className = "navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className = "navbar-toggler-icon"></span>
                </button>
                <div className = "collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className = "navbar-nav">
                    <a className = "nav-link active" aria-current="page" href = "/">Home</a>
                    <a className = "nav-link" href = "/">Features</a>
                    <a className = "nav-link" href = "/">Pricing</a>
                    <a className = "nav-link" href = "/">Others</a>
                </div>
                </div>
            </div>
        </nav>
    )
};
