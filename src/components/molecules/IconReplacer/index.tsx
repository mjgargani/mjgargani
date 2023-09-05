import randomId from '../../../utils/randomId';
import { iconList } from './iconList';
import { Container } from './styles';
import { type IconReplacerProps } from './types';

const IconReplacer: React.FC<IconReplacerProps> = ({
  dataTestId = randomId('icon-replacer'),
  text,
  color,
  brighter = false,
  darker = false,
  styledCss,
}) => (
  <Container data-testid={dataTestId} color={color} brighter={brighter} darker={darker} styledCss={styledCss}>
    {text.split('-').map((tech) => {
      if (Object.keys(iconList).some((el) => el === tech)) {
        return (
          <span
            data-testid={randomId(`icon-${tech}`)}
            style={{
              color: iconList[tech][0],
              padding: '0 5px',
            }}
            key={randomId(`icon-item-${tech}`, true)}
          >
            {iconList[tech][1]}
          </span>
        );
      }

      return <></>;
    })}
  </Container>
);

export default IconReplacer;
