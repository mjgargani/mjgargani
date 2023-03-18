import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { GitHubDataContext } from '../../../context/GitHubData'
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
}) => {
  const { loading } = useContext(GitHubDataContext)
  const navigate = useNavigate()

  return (
    <>
      {!loading && (
        <Container data-testid={dataTestId} isHome={isHome}>
          <GridContainer
            templateColumns={{
              desktop: [isHome ? '0 repeat(2, 1fr)' : 'repeat(3, 1fr)'],
            }}
            columnGap={2}
            rowGap={1}
          >
            <Show isHome={isHome}>
              <GridCell>
                <Button
                  dataTestId={testIdName('btn-nav')}
                  active={isHome}
                  onClick={() => {
                    navigate('')
                  }}
                  icon={''}
                >
                  Início
                </Button>
              </GridCell>
            </Show>
            <GridCell>
              <Button
                dataTestId={testIdName('btn-nav')}
                active={page === 1}
                onClick={() => {
                  navigate('projects')
                }}
                icon={''}
              >
                Projetos
              </Button>
            </GridCell>
            <GridCell>
              <Button
                dataTestId={testIdName('btn-nav')}
                active={page === 2}
                onClick={() => {
                  navigate('about')
                }}
                icon={''}
              >
                Sobre
              </Button>
            </GridCell>
          </GridContainer>
        </Container>
      )}
    </>
  )
}

export default Navigation
