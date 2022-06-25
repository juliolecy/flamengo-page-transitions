import { transform } from 'framer-motion';
import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'


const Navbar = styled.nav`
height: 60px;
background: transparent;
padding: 0rem calc((100vw - 1300px) /2);
display: flex;
justify-content: space-between;
align-items:center;
`;

const Logo = styled(Link)`
color: #fff;
padding-left: 1rem;
text-decoration:none;
font-size: 1.5rem;
font-weight: bold;
font-style: italic;

width: 130px;
margin-left: 50px;
color: white;
position: relative;
text-transform: uppercase;
font-size: 30px;
letter-spacing: 4px;
overflow: hidden;
background: linear-gradient(90deg, #000, #fff, #000);
background-repeat: no-repeat;
animation: animate 6s linear infinite;
background-size: 80%;
-webkit-background-clip: text;
-webkit-text-fill-color: rgba(255,255,255,0);
font-family: 'Lobster', cursive;
margin-bottom: 0;
margin-top: 0;
text-decoration: none;

@keyframes animate{
    0%{
        background-position: -500%;
    }
    100%{
        background-position: 500%;
    }
}
`;

const NavItems = styled.div``;

const NavbarLink = styled(Link)`
color: #fff;
text-decoration: none;
padding: 1rem;
font-family: 'Merriweather', serif;
font-size: 18px;

 
    &:hover{
        border-bottom: 1px solid #fff;
        transition: .5s;
    }
`;

const Header = () =>{
    return <Navbar> 
        <Logo to='/'>Jlins</Logo>
        <NavItems>
            <NavbarLink to='/'>Raça</NavbarLink>
            <NavbarLink to='/amor'>Amor</NavbarLink>
            <NavbarLink to='/paixao'>Paixão</NavbarLink>
        </NavItems>
    </Navbar>
}

export default Header;