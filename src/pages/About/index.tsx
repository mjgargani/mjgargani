import React, { useContext } from 'react'
import GridCell from '../../components/atoms/GridCell'
import Card from '../../components/molecules/Card'
import GridContainer from '../../components/atoms/GridContainer'
import Vakinha from '../../assets/vakinha.jpeg'

import Page from '../../components/templates/Page'
import { type PageProps } from '../../components/templates/Page/types'
import { GitHubDataContext } from '../../context/GitHubData'
import mdParser from '../../utils/mdParser'
import Avatar from '../../components/atoms/Avatar'
import IconReplacer from '../../components/molecules/IconReplacer'
import { testIdName } from '../../utils/testIdName'

const About: React.FC<PageProps> = ({ dataTestId = testIdName('page-about'), show }) => {
  const { profile } = useContext(GitHubDataContext)

  return (
    <Page show={show}>
      <GridContainer
        dataTestId={dataTestId}
        templateColumns={{ desktop: ['9fr', '4fr'] }}
        templateRows={{ mobile: ['1fr', '300px'] }}
        columnGap={10}
        rowGap={10}
        style={{
          height: "100%"
        }}
      >
        <GridCell>
          <Card
            dataTestId={testIdName('card-about')}
            title={`Olá! Sou ${profile?.name}`}
            content={1}
          >
            <GridContainer
              templateColumns={{
                desktop: ['1fr', '9fr'],
                mobile: ['1fr', '7fr'],
              }}
              columnGap={10}
            >
              <GridCell>
                <Avatar dataTestId={testIdName('card-about-avatar')} src={profile?.avatar_url!} />
              </GridCell>
              <GridCell
                dataTestId={testIdName('card-about-bio')}
                style={{
                  position: 'relative',
                  backgroundColor: 'rgb(0, 0, 0, .05)',
                  borderRadius: '10px',
                  textAlign: 'justify',
                  lineHeight: '150%',
                  padding: '0 1.5vw',
                }}
              >
                {mdParser(profile?.bio || '')}
              </GridCell>
            </GridContainer>
            <GridContainer style={{ marginTop: '2%', fontSize: "" }}>
              <GridCell dataTestId={testIdName('card-about-contacts')}>
                <ul style={{ 
                  listStyle: 'none', 
                  margin: 0, 
                  padding: 0, 
                  textAlign: 'center',
                  fontSize: 'smaller'
                }}>
                  <li style={{ display: 'inline', padding: 4 }}>
                    <IconReplacer text='github' />
                    <a href='https://github.com/mjgargani' target='_blank' rel='noreferrer'>
                      GitHub
                    </a>
                  </li>
                  <li style={{ display: 'inline', padding: 4 }}>
                    <IconReplacer text='linkedin' />
                    <a href='https://www.linkedin.com/in/rod-olv/' target='_blank' rel='noreferrer'>
                      LinkedIn
                    </a>
                  </li>
                  <li style={{ display: 'inline', padding: 4 }}>
                    <IconReplacer text='email' />
                    <a href='mailto:mjgargani@gmail.com' rel='noreferrer'>
                      E-mail
                    </a>
                  </li>
                </ul>
              </GridCell>
            </GridContainer>
            <GridContainer dataTestId={testIdName('card-about-desc')}>
              <GridCell style={{ textAlign: 'center' }}>
                <p>
                  🪙 Você contribui com meu trabalho divulgando-o e/ou fazendo uma doação na{' '}
                  <a href='https://www.vakinha.com.br/3539654' target='_blank' rel='noreferrer'>
                    minha Vakinha
                  </a>
                  ! 🐄
                </p>
              </GridCell>
            </GridContainer>
          </Card>
        </GridCell>

        <a href='https://www.vakinha.com.br/3539654' target='_blank' rel='noreferrer'>
          <GridCell
            dataTestId={testIdName('img-vakinha')}
            bgImg={{ source: Vakinha, size: 'contain' }}
            style={{ minHeight: '100%', margin: '0 4.5%' }}
          />
        </a>
      </GridContainer>
    </Page>
  )
}

export default About
