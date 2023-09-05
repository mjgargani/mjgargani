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
    {Object.entries(iconList).map(([key, value], i) => {
      if (text.includes(key)) {
        return (
          <span
            data-testid={randomId(`icon-${key}`)}
            style={{
              color: value[0],
              padding: '0 5px',
            }}
            key={randomId(`icon-item-${key}`, true)}
          >
            {value[1]}
          </span>
        );
      }

      return false;
    })}
  </Container>
);

export default IconReplacer;
