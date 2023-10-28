import React, { useState } from 'react'
import styled from 'styled-components';
import image from '../assets/man.svg'
import '../App.css'

const Container = styled.div`
    width: 100%;
    height: 650px;
    padding:1.5rem;
    @media only screen and (max-width: 480px) {
        padding:0px; 
        height: 50vh;
    }
    @media only screen and (max-width: 800px) {
        padding:0px; 
        height: 100%;
    }
`;
const Box = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: space-evenly;
align-items: center;
`

const Man = styled.div`
    height: 100%;
    padding: 7rem 5rem;
    
`
const Credential = styled.div`
    width: 60%;
    height: 100%;
    border-radius: 5px;
    padding: 6rem 5rem;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    @media only screen and (max-width: 768px) {
        width: 100%;
        padding:2rem;
    }
    @media only screen and (max-width: 480px) {
        width: 100%;
        padding:10px;
        box-shadow:none;
        outline: none;
    }
`
const Wel = styled.h1`
    color: black;
    font-size: 32px;
    font-weight: 900;
    line-height: 52.8px;
    text-align: center;
    padding:1.4rem 5rem 5rem ;
    color:#04072F;
    font-family: 'Poppins', sans-serif;
    margin-bottom: 4rem;
`
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 25%;
  width: 100%;
`;
const StyledLabel = styled.label`
 margin-bottom: 7px;
 font-size: 13px;
 font-weight:510;
 margin-top: 10px;
 font-family: 'Poppins', sans-serif;
 `
const Input = styled.input`
 padding:6px;
 margin-bottom: 10px;
 border: 1px solid gray;
 outline: none;
 color:#04072F;
 border-radius: 5px;
 &::placeholder {
    font-size: 12px;
    font-weight:500;
    color:#737B86;
    font-family: 'Poppins', sans-serif;
}
  &:-moz-placeholder {
    text-align: center;
  }`
const PasswordFeild = styled.div`
    position: relative;
    width: 100%;
    top: 0;
    left: 0;`
const Ch = styled.div`
    display: flex;
    justify-content: space-between;
    align-items:center ;`
const CheckInput = styled.div`
 display: flex;
 align-items:center;
 padding:4px;
 `
const Inputcheck = styled.input`
  padding-top:0px;
  margin:1px 0;
 width:11px;
 cursor: pointer;
 border:1px solid #737B86;
 `

const H5 = styled.h5`
 opacity: .5;
font-size: 13px;
margin:0px 5px;
font-weight:500;
line-height: 19.8px;
 
`
const P = styled.p`
font-size: 12px;
color:#F78719;
font-family: 'Poppins', sans-serif;
font-weight:600;
`
const A = styled.a`
color:#F78719;
text-decoration: solid;
text-decoration: underline;
font-size: 12px;
font-family: 'Poppins', sans-serif;
font-weight:600;
letter-spacing: 0.3px;
`

const RegisterAnchor = styled.a`
color:#F78719;
text-decoration: solid;
text-decoration: underline;
font-size: 12px;
font-weight:800;
`
const Buttonbox = styled.div`
display: flex;
align-items: center;    
  flex-direction: column;
  justify-content: flex-end;
  gap: 1.8rem;
  margin:2rem;
`
const Button = styled.button`
width:28vw;
background-color:#1575A7;
color:#FFFFFF;
font-size: 13px;
padding:10px;
border-radius: 5px;
`
const H4 = styled.h4`
color:#04072F;
font-size: 12px;
font-weight:500;
 
`
const Login = () => {
    const [password, setpassword] = useState('')
    const [showpassword, setshowpassword] = useState(false)
    const handleclick = (e) => {
        setpassword(e.target.value)
        console.log(e.target.value)
    }
    const handleShowIcon = () => {
        setshowpassword(!showpassword)
    }
    return (
        <Container >
            <Box>
                <Man className='hidden md:hidden lg:block'>
                    <img className='w-[390px]' src={image} alt="" />
                </Man>
                <Credential >
                    <Wel>Login</Wel>
                    <InputContainer>
                        <StyledLabel>Login ID</StyledLabel>
                        <Input type="text" placeholder="Enter Login ID" />
                        <StyledLabel>Password</StyledLabel>
                        <PasswordFeild>
                            <Input className='  w-full' type={showpassword ? "text" : "password"} placeholder="Password" onChange={handleclick} />
                            {showpassword ? (
                                <i
                                    onClick={handleShowIcon}
                                    className="fa-regular fa-eye absolute top-[.8rem] right-[.8rem] text-[.8rem] opacity-60 cursor-pointer"
                                ></i>

                            ) : (
                                <i
                                    onClick={handleShowIcon}
                                    className="fa-solid fa-eye-slash absolute top-[.8rem] right-[.8rem] text-[.8rem] opacity-60 cursor-pointer"
                                ></i>
                            )}
                        </PasswordFeild>
                        <Ch>
                            <CheckInput>
                                <Inputcheck type="checkbox" />
                                <H5> Remember me</H5>
                            </CheckInput>
                            <P>Change Password</P>
                        </Ch>
                        <CheckInput>
                            <Inputcheck type="checkbox" />
                            <H5> Agree to </H5>
                            <A href='/'>Terms & Condition</A>
                        </CheckInput>
                        <Buttonbox>
                            <Button>Login</Button>
                            <H4>Don't have an account ?   <RegisterAnchor href='/'>Register Here</RegisterAnchor></H4>

                        </Buttonbox>
                    </InputContainer>
                </Credential>
            </Box>
        </Container >
    )
}

export default Login
