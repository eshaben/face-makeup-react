import React from 'react';
import { Card, CardImg, CardDeck } from 'reactstrap';
import brand from '../../assets/brand.png';
import face from '../../assets/bronzer.png';
import eye from '../../assets/eyelinernmascara.png';
import lip from '../../assets/lipstick.png';
import nail from '../../assets/nailpolish.png';

const ProductMenu = (props) => {
  return (
    <CardDeck className="container" style={{ 'margin': '5% auto' }}>
      <Card>
        <CardImg top width="100%" src={ brand } alt="Card image cap" />
      </Card>
      <Card>
        <CardImg top width="100%" src={ face } alt="Card image cap" />
      </Card>
      <Card>
        <CardImg top width="100%" src={ eye } alt="Card image cap" />
      </Card>
      <Card>
        <CardImg top width="100%" src={ lip } alt="Card image cap" />
      </Card>
      <Card>
        <CardImg top width="100%" src={ nail } alt="Card image cap" />
      </Card>
    </CardDeck>
  );
};

export default ProductMenu;
