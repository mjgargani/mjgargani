import React, { useContext, useEffect, useState } from 'react'
import { css } from 'styled-components'

import QrCodePadrim from '../../assets/qr-code-padrim.png'
import Avatar from '../../components/atoms/Avatar'
import CoinFountain from '../../components/atoms/CoinFountain'
import GridCell from '../../components/atoms/GridCell'
import GridContainer from '../../components/atoms/GridContainer'
import Loading from '../../components/atoms/Loading'
import Card from '../../components/molecules/Card'
import IconReplacer from '../../components/molecules/IconReplacer'
import Page from '../../components/templates/Page'
import { type PageProps } from '../../components/templates/Page/types'
import { GitHubDataContext } from '../../context/GitHubData'
import { device } from '../../utils/devices'
import imgLoader from '../../utils/imgLoader'
import mdParser from '../../utils/mdParser'
import randomId from '../../utils/randomId'

const About: React.FC<PageProps> = ({ dataTestId = randomId('page-about'), show = true }) => {
  const { loading, profile } = useContext(GitHubDataContext)
  const [isLoaded, setIsLoaded] = useState<boolean>(false)

  useEffect(() => {
    if (!isLoaded) {
      imgLoader([profile?.avatar_url!, QrCodePadrim], () => setIsLoaded(true))
    }
  }, [profile, isLoaded])

  return !loading ? (
    isLoaded ? (
      <Page show={show}>
        <GridContainer
          dataTestId={dataTestId}
          templateColumns={{ desktop: ['9fr', '4fr'] }}
          templateRows={{ mobile: ['min-content', '30vh'] }}
          columnGap={2}
          rowGap={2}
          styledCss={css`
            position: absolute;
            width: inherit;
            min-height: 100%;
          `}
        >
          <GridCell>
            <div style={{ width: '100%', height: '100%' }}>
              <Card
                dataTestId={randomId('card-about')}
                title={`Olá! Sou ${profile?.name}`}
                isContent={true}
              >
                <CoinFountain />
                <GridContainer
                  templateColumns={{
                    desktop: ['2fr', '8fr'],
                    mobile: ['3fr', '7fr'],
                  }}
                  columnGap={2}
                >
                  <GridCell
                    styledCss={css`
                      z-index: 2000;
                    `}
                  >
                    <Avatar dataTestId={randomId('card-about-avatar')} src={profile?.avatar_url!} />
                  </GridCell>
                  <GridCell
                    dataTestId={randomId('card-about-bio')}
                    styledCss={css`
                      position: relative;
                      background-color: rgb(0, 0, 0, 0.05);
                      border-radius: calc(0.5vw + 0.5vh);
                      text-align: justify;
                      line-height: 150%;
                      padding: 0 1.5vw;
                      z-index: 2000;
                    `}
                  >
                    {mdParser(profile?.bio || '')}
                  </GridCell>
                </GridContainer>
                <GridContainer
                  styledCss={css`
                    margin-top: 2%;
                  `}
                >
                  <GridCell
                    dataTestId={randomId('card-about-contacts')}
                    styledCss={css`
                      z-index: 2000;
                      ul {
                        list-style: none;
                        margin: 0.25vh 0 0 0;
                        padding: 0;
                        text-align: center;
                      }
                      li {
                        display: inline;
                        border-radius: 0.25vw;
                        background-color: rgba(255, 255, 255, 0.35);
                        padding: 0.25vw;
                        margin: 0 0.25vw;
                        font-size: 110%;
                      }
                    `}
                  >
                    <ul>
                      <li>
                        <IconReplacer text='github' />
                        <a href='https://github.com/mjgargani' target='_blank' rel='noreferrer'>
                          GitHub
                        </a>
                      </li>
                      <li>
                        <IconReplacer text='linkedin' />
                        <a
                          href='https://www.linkedin.com/in/rod-olv/'
                          target='_blank'
                          rel='noreferrer'
                        >
                          LinkedIn
                        </a>
                      </li>
                      <li>
                        <IconReplacer text='email' />
                        <a href='mailto:mjgargani@gmail.com' rel='noreferrer'>
                          E-mail
                        </a>
                      </li>
                    </ul>
                  </GridCell>
                </GridContainer>
                <GridContainer dataTestId={randomId('card-about-desc')}>
                  <GridCell
                    styledCss={css`
                      z-index: 2000;
                      p {
                        text-align: center;
                        font-size: 120%;
                      }
                      @media ${device.tablet} {
                        p {
                          font-size: 90%;
                        }
                      }
                    `}
                  >
                    <p>
                      <span
                        style={{
                          borderRadius: '.25vw',
                          backgroundColor: 'rgba(255,255,255,.35)',
                          padding: '.25vw',
                        }}
                      >
                        🪙 Você contribui com meu trabalho divulgando-o e/ou sendo{' '}
                        <a
                          href='https://www.padrim.com.br/mjgargani'
                          target='_blank'
                          rel='noreferrer'
                        >
                          meu Padrim ou Madrim
                        </a>
                        !
                      </span>
                    </p>
                  </GridCell>
                </GridContainer>
              </Card>
            </div>
          </GridCell>

          <a href='https://www.padrim.com.br/mjgargani' target='_blank' rel='noreferrer'>
            <GridCell
              dataTestId={randomId('img-qr-code-padrim')}
              bgImg={{ source: QrCodePadrim, size: 'contain' }}
              styledCss={css`
                min-height: 100%;
              `}
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
