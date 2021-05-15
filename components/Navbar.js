import styled from "styled-components";
import Link from "next/link"
const Nav = styled.nav`
      height:10vh;
        background-color:#000;
    color:#fff;
    display:flex;
    align-items:center;
    justify-content:space-between;

`
const StyledLink = styled.a`
    padding:0rem 2rem;
`
const StyledLinkLogo = styled.a`
font-size:1.5rem;
font-weight:600;
    padding:0rem 2rem;
`
const Navbar = () => {
    return (
        <Nav>
            <div>
                <Link href="/" passHref>
                    <StyledLinkLogo>FIRST NEXT APP</StyledLinkLogo>
                </Link>
            </div>
            <div>
                <Link href="/" passHref>
                    <StyledLink>Home</StyledLink>
                </Link>
                <Link href="/about" passHref>
                    <StyledLink>About</StyledLink>
                </Link>
                <Link href="/contact" passHref>
                    <StyledLink>Contact</StyledLink>
                </Link>
            </div>
        </Nav>
    )
}

export default Navbar
