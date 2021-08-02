import { useState, useEffect } from "react";
import { firestore, auth, signInWithGoogle } from "./firebase.js"
let Home = (props) => {

    let [post, setPost] = useState([]);

    useEffect(()=> {

        let f = async () => {

            await firestore.collection(props.user.uid).onSnapshot((querySnapshot) => {

                let tempArr = [];
        
                querySnapshot.forEach((doc) => {

                    //console.log("empty");
                    //console.log(doc.data().Title);
                    let {Title, Body} = doc.data();
                    tempArr.push({Title, Body});
                });
        
                setPost(tempArr)
              });
        }
        if(props.user)
            f();
    },[props.user])

    return (
        <>
            {
                (props.user) 
                ? <><div className = "container">{
                    post.map((el)=>{

                        return(<div class="card mt-5">
                        <div class="card-body">
                          <h5 class="card-title">{el.Title}</h5>
                          <h6 class="card-subtitle mb-2 text-muted"></h6>
                          <p class="card-text">{el.Body}</p>
                          {/* <a href="#" class="card-link">Card link</a>
                          <a href="#" class="card-link">Another link</a> */}
                        </div>
                      </div>);
                    })
                } </div></> 
                : (<><h3> Welcome to Personal Blogginng App</h3> <button type="button" class="btn btn-primary" onClick={signInWithGoogle}>Click here to Login</button></>)
            }
            
        </>
    );
}

export default Home;