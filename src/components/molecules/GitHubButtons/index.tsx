import GitHubButton from 'react-github-btn'
import { Container } from './styles'

const GitHubBtnData = {
  common: {
    'data-color-scheme': 'no-preference: dark; light: dark; dark: dark;',
    'data-show-count': 'true',
  },
  specific: [
    // {
    //   href: "https://github.com/mjgargani",
    //   "aria-label": "Follow @mjgargani on GitHub",
    //   description: "Follow @mjgargani"
    // },
    // {
    //   href: "https://github.com/mjgargani/mjgargani/subscription",
    //   "data-icon": "octicon-eye",
    //   "aria-label": "Watch mjgargani/mjgargani on GitHub",
    //   description: "Watch"
    // },
    {
      href: 'https://github.com/mjgargani/mjgargani',
      'data-icon': 'octicon-star',
      'aria-label': 'Star mjgargani/mjgargani on GitHub',
      description: 'Star',
    },
  ],
}

const GitHubButtons = () => (
  <Container>
    <ul>
      {GitHubBtnData.specific.map((el, i) => {
        const props = {
          'aria-label': el['aria-label'],
          'data-icon': el['data-icon'],
          href: el.href,
        }
        return (
          <li key={i}>
            <GitHubButton {...GitHubBtnData.common} {...props}>
              {el.description}
            </GitHubButton>
          </li>
        )
      })}
    </ul>
  </Container>
)

export default GitHubButtons
