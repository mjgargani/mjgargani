import React from 'react'
import { testIdName } from '../../../utils/testIdName'
import Button from '../../atoms/Button'
import GridCell from '../../atoms/GridCell'
import GridContainer from '../../atoms/GridContainer'
import { Container, Show } from './styles'
import { type NavigationProps } from './types'

const Navigation: React.FC<NavigationProps> = ({
  dataTestId = testIdName('navigation'),
  isHome,
  page,
  setPage,
}) => (
  <Container data-testid={dataTestId} isHome={isHome}>
    <GridContainer 
      templateColumns={{ 
        desktop: [isHome ? '0 repeat(2, 1fr)' : 'repeat(3, 1fr)'] 
      }} 
      templateRows={{ 
        mobile: [isHome ? '0 repeat(2, 1fr)' : 'repeat(3, 1fr)'] 
      }} 
      columnGap={10} 
      rowGap={10}
    >
      <Show isHome={isHome}>
        <GridCell>
          <Button
            active={isHome}
            onClick={() => {
              setPage(0)
            }}
            icon={''}
          >
            Início
          </Button>
        </GridCell>
      </Show>
      <GridCell>
        <Button
          active={page === 1}
          onClick={() => {
            setPage(1)
          }}
          icon={''}
        >
          Projetos
        </Button>
      </GridCell>
      <GridCell>
        <Button
          active={page === 2}
          onClick={() => {
            setPage(2)
          }}
          icon={''}
        >
          Sobre
        </Button>
      </GridCell>
    </GridContainer>
  </Container>
)

export default Navigation
