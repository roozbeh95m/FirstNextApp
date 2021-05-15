import styled from "styled-components";

const FooterSection = styled.div`
    background-color:#000;
    color:#fff;
    display:flex;
    align-items:center;
    justify-content:center;
    height:10vh;
`
const Footer = () => {
    return (
        <FooterSection>
            <p>@My first Next app by Roozbeh 2021</p>
        </FooterSection>
    )
}

export default Footer
