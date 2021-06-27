import { 
  Container,
  Retweet,
  RocketseatIcon,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon,
 } from './styles';

export function Tweet() {
  return (
    <Container>
      <Retweet>
        <RocketseatIcon />
        Você retweetou
      </Retweet>

      <Body>
        <Avatar />
        
        <Content>
          <Header>
            <strong>Rocketseat</strong>
            <span>@Rocketseat</span>
            <Dot />
            <time>27 de jun</time>
          </Header>
          <Description>Foguete não tem ré 🚀, até aparecer o Elon Musk.</Description>
        
          <ImageContent />

          <Icons>
            <Status>
              <CommentIcon />
              578
            </Status>
            <Status>
              <RetweetIcon />
              234
            </Status>
            <Status>
              <LikeIcon />
              2437
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
}