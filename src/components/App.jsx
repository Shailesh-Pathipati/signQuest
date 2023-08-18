import React from "react";
import Login from "./Login";
import SignUp from "./SignUp"
{/*import ASL from "./ASL";*/}


export default function App()
{
    return <div>
        <section id="title">

            {/*<div class="container-fluid">
                <div class="row">
                <div class="col-lg-10">
                    <h1 style={{ fontSize: '80px' }}>Expand Your Communication Skills Today.</h1>
                </div>
                    <h2>Learn sign language and improve communication with SignQuest's innovative education for the deaf and dumb.</h2>

                </div>
</div>*/}
        </section>
        {/* all other components wil be here. */}
        {/*<ASL/>*/}
        <SignUp/>
        <Login/>
    </div>
}
