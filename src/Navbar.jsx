import { useEffect } from "react";
import { Link } from "react-router-dom";
import { auth, signInWithGoogle } from "./firebase.js"
import React from 'react';

let c = (e) => {

    let Nav = document.querySelectorAll(".nav-item .nav-link");
    for(let i=0; i<Nav.length; i++) {

        Nav[i].addEventListener("click", ()=> {

            for(let j=0; j<Nav.length; j++) {
                Nav[j].classList.remove("active");
            }

            Nav[i].classList.add("active");
        })
    }
}

let Navbar = (props) => {

    useEffect( ()=> {

        auth.onAuthStateChanged((user) => {

            if(user) {
                 //console.log(user.uid);
                let {displayName, email, uid} = user;
                props.handleUser({displayName, email, uid});
            }
            else
                props.handleUser(user);
        });

    }, []);

    c();

    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Digital Diary</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link className="nav-link active" to="/">Home</Link>
                            {/* <a class="nav-link active" aria-current="page" href="#">Home</a> */}
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link" to="/post">Post</Link>
                            {/* <a class="nav-link" href="#">Post</a> */}
                        </li>
                        {
                            (props.user) ? <><li class="nav-item" onClick={()=> auth.signOut() }>
                                <Link className="nav-link" to="/">Log Out</Link>
                                {/* <a class="nav-link" href="#">Log out</a> */}
                            </li></>
                             : <> <li class="nav-item" onClick={signInWithGoogle}>
                             <Link className="nav-link" to="/">Log In</Link>
                            </li></>
                        }
                        
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;