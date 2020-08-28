import React from 'react';

import { Container } from './styles';

interface Props {
   theme: string;
}

const News: React.FC<Props> = ({ theme }) => {
  return(
     <Container>
        <span>Assuntos do momento no Brasil</span>
        <strong>{theme}</strong>
     </Container>
  );
}

export default News;