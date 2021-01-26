import { Container } from './styles';

const SocialMediaLinkIcon = ({ href, icon: Icon, size = 20 }) => {
  return (
    <Container href={href} target="_blank" rel="noopener noreferrer">
      <Icon size={size} />
    </Container>
  );
};

export default SocialMediaLinkIcon;
