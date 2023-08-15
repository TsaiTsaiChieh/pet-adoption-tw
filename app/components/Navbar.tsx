'use client'
import { MdPets } from 'react-icons/md'
import { colors } from '../constants/styles'
import { Container, LogoWrap, Title } from '../styled/Navbar'

const Navbar = () => {

  return (
    <Container>
      <LogoWrap>
        <MdPets size={28} color={colors.primary}/>
        <Title>PET ADOPTION</Title>
      </LogoWrap>
    </Container>

  )
}

export default Navbar
