import { Feed } from '../Feed';

import { 
  Container, 
  Banner, 
  Avatar, 
  ProfileData, 
  LocationIcon, 
  CakeIcon, 
  Followage,
  EditButton,
} from './styles';

export function ProfilePage() {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>Leandro Henrique</h1>
        <h2>@leandrosiq1</h2>

        <p>
          Developer at <a href="#">@clube_6e1</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            São Paulo, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 01 de junho de 2001
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>94</strong>
          </span>
          <span>
            <strong>672 </strong>
            seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
}