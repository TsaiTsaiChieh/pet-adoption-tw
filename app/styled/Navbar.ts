'use client'
import styled from 'styled-components'

import { colors } from '../constants/styles'

export const Container = styled.div`
  width: 100vw;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`

export const LogoWrap = styled.div`
  display: flex;
  align-items: center;
`

export const Title = styled.h1`
  font-size: 24px;
  margin-left: 8px;
  color: ${colors.primary};
`
