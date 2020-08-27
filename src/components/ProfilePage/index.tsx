import React from 'react';

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

import Feed from '../Feed';

const ProfilePage: React.FC = () => {
  return(
     <Container>

        <Banner>
            <Avatar />
        </Banner>

        <ProfileData>
           <EditButton outlined>Editar perfil</EditButton>
           <h1>Raphael Capeto</h1>
           <h2>@rapha_capeto</h2>

           <p>
              Desenvolvedor Front-end e Mobile <a href="https://www.github.com/rcapeto" target="_blank">Github</a>.
           </p>

           <ul>
              <li>
                 <LocationIcon />
                 São Paulo, Brasil
              </li>

              <li>
                 <CakeIcon />
                 Nascido(a) em 20 de fevereiro
              </li>
           </ul>

           <Followage>
              <span>
                 Seguindo <strong>94</strong>
              </span>
              <span>
                  <strong>945</strong> Seguidores
              </span>
           </Followage>
        </ProfileData>

        <Feed />

     </Container>
  );
}

export default ProfilePage;