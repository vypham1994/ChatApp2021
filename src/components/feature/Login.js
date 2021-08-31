import React, {useState} from 'react'
import styled from 'styled-components';
import {Button} from "@material-ui/core";
function Login() {
    const [signInManual, setSignInManual] = useState(false);
    const toggleSignInManually = () =>{
        setSignInManual(true);
    }
    return (
        <LoginContainer>
            <LoginInnerContainer>
            <img src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd-1024-80.jpg.webp"/>
            <h1>Sign in to Chat App</h1>
            {
                !signInManual? (
                    <>
          <ManualBtn>
                <Button onClick={toggleSignInManually}>Sign in manually</Button>
            </ManualBtn>
            <GoogleBtn>
                <Button>
                    {""}
                    <Logo>
                <svg

version="1.1"

xmlns="http://www.w3.org/2000/svg"

viewBox="0 0 48 48"

className="c-third_party_auth__icon"

>

<g>

  <path

    className="c-third_party_auth__icon__google--red"

    fill="#EA4335"

    d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"

  ></path>

  <path

    className="c-third_party_auth__icon__google--blue"

    fill="#4285F4"

    d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"

  ></path>

  <path

    className="c-third_party_auth__icon__google--yellow"

    fill="#FBBC05"

    d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"

  ></path>

  <path

    className="c-third_party_auth__icon__google--green"

    fill="#34A853"

    d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"

  ></path>

  <path fill="none" d="M0 0h48v48H0z"></path>

</g>

</svg>
</Logo>
                    Sign in with Google
                </Button>
            </GoogleBtn>
                    </>
                ): (
                    <Form>
                    <h3>Manually</h3>
                    <input placeholder="Username" value={""}></input>
                    <input placeholder="Password" value={""}></input>
                    <Button>Sign in manually</Button>
                    <span>Back</span>
                    <span>Sign up</span>
                    </Form>
                )}
  
            </LoginInnerContainer>
        </LoginContainer>
    );
}

export default Login;

const Form = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    > h3 {
        margin-bottom: 20px;
    }
    > input {
        padding: 0 20px;
        height: 40px;
        width: 100%;
        border-radius: 1px solid #e01e5a;
        box-sizing: border-box;
        margin: 0 0 20px;
    }
    >button{
        color: white;
        background-color: #4a154b;
        border: 1px solid #e01e5a;
        margin: 0 auto;
    }
    >button:hover {
        background-color: #4a154b;
    }
    >span {
        cursor: pointer;
        margin-top: 10px;
        color: #1264a3;
    }
`;

const Logo = styled.div`
    width: 18px;
    height: 18px;
    margin-right: 12px;
`

const LoginContainer = styled.div`
    background-color: #f8f8f8 ;
    height: 100vh;
    display:grid;
    place-items: center;
`;
const LoginInnerContainer = styled.div`
    padding: 100px;
    text-align: center;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    > img {
        object-fit: contain;
        height: 100px;
        margin-bottom: 40px;
    }
`;
const ManualBtn = styled.div`
    margin-top: 20px;
    border-radius: 5px;
    background-color: #4a154b;
    > button {
        color: white;
    }
`;
const GoogleBtn = styled.div`
margin-top: 20px;
border-radius: 5px;
border: 2px solid #4385f4;
    > button {
    color: #4385f4;
    }
`