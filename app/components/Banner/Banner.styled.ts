'use client'
import styled from 'styled-components'

import { colors } from '../../constants/styles'

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 24px 0;
`

export const Background = styled.div`
  width: 90%;
  max-width: 810px;
  height: 300px;
  display: flex;
  flex-direction: column;
  background: ${colors.primary};
  background-image: url("group-of-pets.webp");
  background-repeat: no-repeat;
  background-position: bottom;
  border-radius: 10px;
`

export const Content = styled.h3`
  font-size: 22px;
  margin: 50px 55px 30px;
  line-height: 2;
`

export const Button = styled.button`
  cursor: pointer;
  width: 120px;
  height: 40px;
  padding: 10px;
  font-size: 16px;
  font-weight: bold;
  background: white;
  color: ${colors.primary};
  border-radius: 8px;
  margin-left: 72%;
`
