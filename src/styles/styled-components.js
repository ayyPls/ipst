import styled from 'styled-components'

export const Container = styled.div`
padding: 10vh 0;
flex-direction: row;
display: flex;
width: 80vw;
margin: 0 auto;
`

export const HeaderContainer = styled(Container)`
padding: 0;
width: 100%;
background-color: white;
position: fixed;
`
export const FooterContainer = styled(Container)`
flex-direction: column;
padding: 20px 10vw;
background-color: #333333;
&>a{
  padding: 1vh;
  font-size: 2vh;
  color: white;
}
&>a:hover{
  color: #61dafb;
}
`
export const GridContainer = styled(Container)`
display: grid; 
grid-template-columns: repeat(${props => props.colsNumber || '3'}, 1fr);  
gap: 20px; 
@media (max-width: 768px) {
  grid-template-columns: repeat(${props => props.colsNumber || '2'}, 1fr);  
}
@media (max-width: 425px) {
  grid-template-columns: repeat(${props => props.colsNumber || '1'}, 1fr);  
}
`

export const GridBlock = styled.div`
margin: 0 auto;
`

export const HeaderBlock = styled.div`
text-transform: ${props => props.uppercase ? "uppercase" : ""};
font-size: ${props => props.fontSize || '2vh'};
display: flex;
align-items: center;
justify-content: center;
flex-grow:${props => props.flexGrow || '0'};
`

export const FlexBlock = styled(Container)`
height: 100%;
flex-direction: column;
margin: 0;
padding: ${props => props.padding || '0'};
`
export const TextBlock = styled.p`
font-weight: ${props => props.fontWeight || 'lighter'};
line-height: 1.5;
color: #333333;
margin: 0 5vh 0 0;
font-size: ${props => props.size || '2vh'};
`

export const MenuItem = styled.ul`
display: inline;
list-style: none;
font-size: 2vh;
text-decoration: none;
text-transform: uppercase;
padding: 10px;
`

export const Button = styled.button`
cursor: pointer;
padding: 15px;
border: none;
width: 10vw;
color: white;
font-size: 2vh;
background-color: black;
font-weight: 800;
&:hover {
    color: black;
    background-color: #61dafb;
}
`
export const LogoutButton = styled(Button)`
width: 2vw;
padding: 0;
background-color: white;
`

export const LoginMenu = styled(HeaderContainer)`
position: relative;
`

export const Form = styled.form`
display: flex;
flex-direction: column;
`
export const Input = styled.input`
margin: 10px 0;
border: 1px solid black;
width: 30vw;
height: 4vh;
font-size: 3vh;
`

export const HeadingLarge = styled.h2`
text-transform: ${props => props.uppercase ? "uppercase" : ""};
font-size: ${props => props.size};
font-weight: 800;

`
export const HeadingSmall = styled.h3`
font-size: ${props => props.size};
`
export const Image = styled.img`
width: ${props => props.width};
height: ${props => props.height};
${props => props.square ? `object-fit: cover; height: ${props.width}; width: ${props.width};` : ''}
`

export const ErrorBlock = styled.span`
color: red;
margin: 10px 0;
`