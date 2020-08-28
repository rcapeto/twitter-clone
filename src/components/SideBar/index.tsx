import React from 'react';
import StickyBox from 'react-sticky-box';

import {
   Container,
   SearchWrapper,
   SearchInput,
   SearchIcon,
   Body,
} from './styles';

import List from '../List';
import FollowersSuggestions from '../FollowersSuggestions';
import News from '../News';

const SideBar: React.FC = () => {
  return(
     <Container>

        <SearchWrapper>
           <SearchInput placeholder="Buscar no twitter..." />
           <SearchIcon />
        </SearchWrapper>

        <StickyBox>

         <Body>
            <List 
               title="Talvez você curta"
               elements={[
                  <FollowersSuggestions 
                     name="Diego Fernandes"
                     nickname="@diego3g"
                  />,
                  <FollowersSuggestions 
                     name="Tim Cook"
                     nickname="@appletimcook"
                  />,
                  <FollowersSuggestions 
                     name="Apple"
                     nickname="@apple"
                  />,

               ]}  
            />

            <List 
               title="O que está acontecendo"
               elements={[
                  <News 
                     theme="Bootcamp da rocketseat"
                  />,
                  <News 
                     theme="Casos de COVID-19 diminuiram"
                  />,
                  <News 
                     theme="Lançamento de novos Smartphones"
                  />,
               ]}  
            />

            <List 
               title="O que está acontecendo"
               elements={[
                  <News 
                     theme="Apple com 3 trilhões"
                  />,
                  <News 
                     theme="Aprenda React rapidamente"
                  />,
                  <News 
                     theme="Como anda o mercado de trabalho?"
                  />,
               ]}  
            />

            <List 
               title="O que está acontecendo"
               elements={[
                  <News 
                     theme="2021 com centenas de shows em São Paulo"
                  />,
                  <News 
                     theme="React Native ou Flutter?"
                  />,
                  <News 
                     theme="Aprenda a usar o GitHub"
                  />,
               ]}  
            />

         </Body>
        </StickyBox>


     </Container>
  );
}

export default SideBar;