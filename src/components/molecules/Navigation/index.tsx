import React from 'react'
import { testIdName } from '../../../utils/testIdName'
import Button from '../../atoms/Button'
import GridCell from '../../atoms/GridCell'
import GridContainer from '../../atoms/GridContainer'
import { Container } from './styles'
import { type NavigationProps } from './types'

const Navigation: React.FC<NavigationProps> = ({
  dataTestId = testIdName('navigation'),
  page,
  setPage,
}) => (
  <Container data-testid={dataTestId}>
    <GridContainer templateColumns={{ desktop: ['repeat(3, 1fr)'] }} columnGap={10} rowGap={10}>
      <GridCell>
        <Button
          active={page === 0}
          onClick={() => {
            setPage(0)
          }}
          icon={""}
        >Início</Button>
      </GridCell>
      <GridCell>
        <Button
          active={page === 1}
          onClick={() => {
            setPage(1)
          }}
          icon={""}
        >Projetos</Button>
      </GridCell>
      <GridCell>
        <Button
          active={page === 2}
          onClick={() => {
            setPage(2)
          }}
          icon={""}
        >Sobre</Button>
      </GridCell>
    </GridContainer>
  </Container>
)

export default Navigation
