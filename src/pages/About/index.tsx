import React, { useContext } from 'react'
import GridCell from '../../components/UI/atoms/GridCell'
import Card from '../../components/UI/molecules/Card'
import GridContainer from '../../components/UI/atoms/GridContainer'
import Vakinha from '../../assets/vakinha.jpeg'

import Page from '../../components/UI/templates/Page'
import { type PageProps } from '../../components/UI/templates/Page/types'
import { GitHubDataContext } from '../../context/GitHubData'
import mdParser from '../../utils/mdParser'
import Avatar from '../../components/UI/atoms/Avatar'
import IconReplacer from '../../components/UI/molecules/IconReplacer'
import { testIdName } from '../../components/utils/testIdName'

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
                <Avatar 
                  dataTestId={testIdName("card-about-avatar")} 
                  src={profile?.avatar_url!} 
                />
              </GridCell>
              <GridCell
                dataTestId={testIdName("card-about-bio")}
                style={{
                  position: 'relative',
                  backgroundColor: 'rgb(0, 0, 0, .05)',
                  borderRadius: '10px',
                  textAlign: 'justify',
                  lineHeight: '200%',
                  textIndent: '5%',
                  padding: '0 1.5vw',
                }}
              >
                {mdParser(profile?.bio || '')}
              </GridCell>
            </GridContainer>
            <GridContainer style={{ marginTop: '2%' }}>
              <GridCell dataTestId={testIdName("card-about-contacts")}>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0, textAlign: 'center' }}>
                  <li style={{ display: 'inline', padding: 10 }}>
                    <a href='https://github.com/mjgargani' target='_blank' rel='noreferrer'>
                      <IconReplacer text='github' />
                      GitHub
                    </a>
                  </li>
                  <li style={{ display: 'inline', padding: 10 }}>
                    <a href='https://www.linkedin.com/in/rod-olv/' target='_blank' rel='noreferrer'>
                      <IconReplacer text='linkedin' />
                      LinkedIn
                    </a>
                  </li>
                  <li style={{ display: 'inline', padding: 10 }}>
                    <a href='mailto:mjgargani@gmail.com' rel='noreferrer'>
                      <IconReplacer text='email' />
                      E-mail
                    </a>
                  </li>
                </ul>
              </GridCell>
            </GridContainer>
            <GridContainer 
              dataTestId={testIdName("card-about-desc")} 
              style={{ marginTop: '2%' }}
            >
              <GridCell>
                <p>Você pode contribuir com meu trabalho divulgando este portfólio e/ou fazendo uma doação na <a href='https://www.vakinha.com.br/3539654' target="_blank" rel="noreferrer">minha Vakinha</a>!</p>
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
