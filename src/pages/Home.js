import React from "react";


import {Link} from "react-router-dom";

function Home(){
    return(
        <div>
            <Link to='/SignUp' >
                
                SignUp(회원가입) 페이지로 이동
            </Link>
        </div>

    )
}

export default Home