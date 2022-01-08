import styled from 'styled-components'

export const GridContainer = styled.div`
padding: 10vh 0;
display: grid; 
width: 80vw;
margin: 0 auto;
grid-template-columns: 1fr 1fr 1fr; 
gap: 20px 20px; 
grid-template-areas: 
  ". ."
  ". ."
  ". ."; 
`

//row или column
export const Container = styled.div`
padding: 10vh 0;
flex-direction: row;
display: flex;
width: 80vw;
margin: 0 auto;
`

export const FlexBlock = styled(Container)`
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

export const Button = styled.button`
cursor: pointer;
padding: 15px;
border: none;
width: 10vw;
color: white;
font-size: 2vh;
background-color: black;
&:hover {
    color: black;
    background-color: #61dafb;
}
`

export const LoginMenu = styled.div`
display: flex;
align-items: center;
`

export const LogoutButton = styled(Button)`
width: 2vw;
padding: 0;
background-color: transparent;
&:hover{
  background-color: #61dafb;
}
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
`
export const HeadingSmall = styled.h3`
font-size: ${props => props.size};
`
export const Image = styled.img`
width: ${props => props.width};
height: ${props => props.height};
${props => props.square ? `object-fit: cover; height: ${props.width}; width: ${props.width};` : `margin: 10px`}
`