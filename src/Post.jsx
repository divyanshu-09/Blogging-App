import { useState } from "react";
import { Redirect } from "react-router-dom";
import {firestore} from "./firebase";

let Post = (props) => {

    let [title, setTitle] = useState("");

    let [para, setPara] = useState("");

    return (
        <>
            <div class="container mt-4">
                <div class="row">
                    <div class="col">
                    </div>
                    <div class="col-8">
                        <div class="input-group input-group-lg">
                            <input onChange={(e) => setTitle(e.currentTarget.value)} type="text" class="form-control" placeholder="Title" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
                        </div>
                    </div>
                    <div class="col">
                    </div>
                </div>
                <div class="row mt-5">
                    <div class="col">
                        <div class="input-group">
                            <textarea onChange={(e) => setPara(e.currentTarget.value)} placeholder = "Write your mind here" class="form-control" aria-label="With textarea"></textarea>
                        </div>
                    </div>
                </div>
                <div class="row mt-5">
                    <div class="col-10"></div>
                    <div class="col-2">
                    <button onClick={()=>{

                        if(props.user == null)
                            alert("You are not logged in");

                        else if(para != "" && title != "") {
                             
                            //console.log("posted");
                            firestore.collection(props.user.uid).add({ Title: title, Body: para });
                            <Redirect to='/'/>
                        }
                        else
                            alert("Either title or Post body is empty or you have not logged in")

                }} type="button" class="btn btn-primary">Post...</button>
                    </div>
                </div>
            </div>
        </>
    );

}

export default Post;