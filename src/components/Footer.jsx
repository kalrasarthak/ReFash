import React from 'react'
import styled from 'styled-components'
import Pinterest from '@mui/icons-material/Pinterest';
import Instagram from '@mui/icons-material/Instagram';
import Facebook from '@mui/icons-material/Facebook';
import Twitter from '@mui/icons-material/Twitter';
import Room from '@mui/icons-material/Room';
import EmailIcon from '@mui/icons-material/Email';
import Call from '@mui/icons-material/Call';
import { mobile } from '../responsive';


const Container = styled.div`
display: flex;
${mobile({ flexDirection: "column" })}

`
const Left = styled.div`
flex:1;
display: flex;
flex-direction: column;
padding: 20px;
`

const Logo = styled.h1`

`

const Desc = styled.p`
margin: 20px 0px;

`


const SocialContainer = styled.div`
display: flex;

`


const SocialIcon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
color: white;
background-color: #${props => props.color} ;
display: flex;
align-items: center;
justify-content: center;
margin-right: 20px;
cursor: pointer;
`



const Center = styled.div`
flex:1;
padding: 20px;
${mobile({ display: "none" })}
`

const Title = styled.h3`
margin-bottom: 30px ;
`

const List = styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;


`
const ListItem = styled.li`
width:50%;
margin-bottom: 10px;
`

const Right = styled.div`
flex: 1;
padding: 20px;
${mobile({ backgroundColor: "#fff8f8" })}
`

const ContactItem = styled.div`
display: flex;
margin-bottom: 20px;
align-items: center;

`
const Payment = styled.img`
width: 50%;

`

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>ReFash.</Logo>
                <Desc>
                    There are many variations of passages of Lorem Ipsum available, but
                    the majority have suffered alteration in some form, by injected
                    humour, or randomised words which don't look even slightly believable.
                </Desc>
                <SocialContainer>
                    <SocialIcon color='3B5999'>
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon color='E4405F'>
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon color='55ACEE'>
                        <Twitter />
                    </SocialIcon>
                    <SocialIcon color='E60023'>
                        <Pinterest />
                    </SocialIcon>

                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <Room style={{ marginRight: "10px" }} /> 420 Misisipi Road, Ohio, United States
                </ContactItem><br></br>
                <ContactItem>
                    <Call style={{ marginRight: "10px" }} />   +1 234 56 78
                </ContactItem>
                <ContactItem>
                    <EmailIcon style={{ marginRight: "10px" }} />
                    contact@refash.support
                </ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
            </Right>
        </Container>
    )
}

export default Footer