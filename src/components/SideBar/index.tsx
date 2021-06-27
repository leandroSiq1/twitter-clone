import StickyBox from 'react-sticky-box';
import { List } from '../List';
import { News } from '../News';
import { FollowSuggestion } from '../FollowSuggestion';

import { 
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from './styles';

export function SideBar() {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <StickyBox>
        <Body>
        <List 
          title="Talvez Você curta"
          elements={[
            <FollowSuggestion 
              name="Leo Neto"
              nickname="@TickMuralha"
            />,
            <FollowSuggestion 
              name="Daniel Garcia"
              nickname="@danielIce"
            />,
            <FollowSuggestion 
              name="Miguel Oliveira"
              nickname="@Miguel Asap"
            />,
          ]}
        />
        <List 
          title="Talvez Você curta"
          elements={[
            <News />,
            <News />,
            <News />,
          ]}
        />
        <List 
          title="Talvez Você curta"
          elements={[
            <News />,
            <News />,
            <News />,
          ]}
        />
        <List 
          title="Talvez Você curta"
          elements={[
            <News />,
            <News />,
            <News />,
          ]}
        />
        </Body>
      </StickyBox>
    </Container>
  );
}