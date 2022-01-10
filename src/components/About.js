import { HeadingLarge, Image, Container, FlexBlock, TextBlock } from "../styles/styled-components"

export default function About() {
    return (
        <div className="about">
            <Container>
                <FlexBlock>
                    <HeadingLarge uppercase size="4vh">О бренде</HeadingLarge>
                    <TextBlock>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </TextBlock>
                </FlexBlock>
                <FlexBlock>
                    <Image square width ="40vw" src="/images/about-us.jpg" />
                </FlexBlock>
            </Container>
        </div>
    )
}