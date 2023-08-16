'use client'

import { Background, Button, Container, Content } from './Banner.styled'

const Banner = () => {
  return (
    <Container>
      <Background>
        <Content>
        Please sponsor me a coffee to continue this service.
        </Content>
        <Button>Sponsor me</Button>
      </Background>
    </Container>
  
  )
}

export default Banner

