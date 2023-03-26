import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { css } from 'styled-components'

import { GitHubDataContext } from '../../../context/GitHubData'
import randomId from '../../../utils/randomId'
import Button from '../../atoms/Button'
import GridCell from '../../atoms/GridCell'
import GridContainer from '../../atoms/GridContainer'
import { Container, Hidden } from './styles'
import { type NavigationProps } from './types'

const Navigation: React.FC<NavigationProps> = ({
  dataTestId = randomId('navigation'),
  isHome,
  page,
  styledCss,
}) => {
  const { loading } = useContext(GitHubDataContext)
  const navigate = useNavigate()

  return (
    <>
      {!loading && (
        <Container data-testid={dataTestId} isHome={isHome} styledCss={styledCss}>
          <GridContainer
            templateColumns={{
              desktop: [isHome ? '0 50% 50%' : '33.33% 33.33% 33.34%'],
            }}
            templateRows={{
              mobile: [isHome ? '0 50% 50%' : '33.33% 33.33% 33.34%'],
            }}
            styledCss={css`
              transition: 300ms;
            `}
          >
            <GridCell
              styledCss={css`
                overflow: hidden;
              `}
            >
              <Hidden>
                <Button
                  dataTestId={randomId('btn-nav')}
                  active={isHome}
                  onClick={() => {
                    navigate('')
                  }}
                  icon={''}
                >
                  Início
                </Button>
              </Hidden>
            </GridCell>
            <GridCell>
              <Button
                dataTestId={randomId('btn-nav')}
                active={page === '/projects'}
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
                dataTestId={randomId('btn-nav')}
                active={page === '/about'}
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
