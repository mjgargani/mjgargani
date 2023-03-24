import React, { useContext, useEffect, useState } from 'react'

import QrCodePadrim from '../../assets/qr-code-padrim.png'
import Avatar from '../../components/atoms/Avatar'
import GridCell from '../../components/atoms/GridCell'
import GridContainer from '../../components/atoms/GridContainer'
import Loading from '../../components/atoms/Loading'
import Card from '../../components/molecules/Card'
import IconReplacer from '../../components/molecules/IconReplacer'
import Page from '../../components/templates/Page'
import { type PageProps } from '../../components/templates/Page/types'
import { GitHubDataContext } from '../../context/GitHubData'
import imgLoader from '../../utils/imgLoader'
import mdParser from '../../utils/mdParser'
import randomId from '../../utils/randomId'

const About: React.FC<PageProps> = ({ dataTestId = randomId('page-about'), show = true }) => {
  const { loading, profile } = useContext(GitHubDataContext)
  const [isLoaded, setIsLoaded] = useState<boolean>(false)

  useEffect(() => {
    imgLoader([profile?.avatar_url!, QrCodePadrim], () => setIsLoaded(true))
  }, [profile])

  return !loading ? (
    isLoaded ? (
      <Page show={show}>
        <GridContainer
          dataTestId={dataTestId}
          templateColumns={{ desktop: ['9fr', '4fr'] }}
          templateRows={{ mobile: ['min-content', '30vh'] }}
          columnGap={4}
          rowGap={2}
          style={{
            position: 'absolute',
            width: 'inherit',
            minHeight: '100%',
          }}
        >
          <GridCell>
            <Card
              dataTestId={randomId('card-about')}
              title={`Olá! Sou ${profile?.name}`}
              isContent={true}
            >
              <div id={randomId('card-about-content')}>
                <GridContainer
                  templateColumns={{
                    desktop: ['1fr', '9fr'],
                    mobile: ['1fr', '7fr'],
                  }}
                  columnGap={1}
                >
                  <GridCell>
                    <Avatar
                      dataTestId={randomId('card-about-avatar')}
                      src={profile?.avatar_url!}
                    />
                  </GridCell>
                  <GridCell
                    dataTestId={randomId('card-about-bio')}
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
                <GridContainer style={{ marginTop: '2%', fontSize: '' }}>
                  <GridCell dataTestId={randomId('card-about-contacts')}>
                    <ul
                      style={{
                        listStyle: 'none',
                        margin: 0,
                        padding: 0,
                        textAlign: 'center',
                        fontSize: 'smaller',
                      }}
                    >
                      <li style={{ display: 'inline', padding: 4 }}>
                        <IconReplacer text='github' />
                        <a href='https://github.com/mjgargani' target='_blank' rel='noreferrer'>
                          GitHub
                        </a>
                      </li>
                      <li style={{ display: 'inline', padding: 4 }}>
                        <IconReplacer text='linkedin' />
                        <a
                          href='https://www.linkedin.com/in/rod-olv/'
                          target='_blank'
                          rel='noreferrer'
                        >
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
                <GridContainer dataTestId={randomId('card-about-desc')}>
                  <GridCell style={{ textAlign: 'center' }}>
                    <p>
                      🪙 Você contribui com meu trabalho divulgando-o e/ou sendo{' '}
                      <a
                        href='https://www.padrim.com.br/mjgargani'
                        target='_blank'
                        rel='noreferrer'
                      >
                        meu Padrim ou Madrim
                      </a>
                      !
                    </p>
                  </GridCell>
                </GridContainer>
              </div>
            </Card>
          </GridCell>

          <a href='https://www.padrim.com.br/mjgargani' target='_blank' rel='noreferrer'>
            <GridCell
              dataTestId={randomId('img-qr-code-padrim')}
              bgImg={{ source: QrCodePadrim, size: 'contain' }}
              style={{ minHeight: '100%' }}
            />
          </a>
        </GridContainer>
      </Page>
    ) : (
      <Loading />
    )
  ) : (
    <></>
  )
}

export default About
