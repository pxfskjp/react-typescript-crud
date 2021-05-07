import React, { useState } from 'react';
import { 
  Container, 
  ButtonGroup, 
  Button,
  Card,
  Row
} from 'react-bootstrap';

const Counter: React.FC = () => {
	const [counter, setCounter] = useState(0);

	return(
		<>
      <Container>
        <Card className="mt-5 m-auto" style={{width: '50%'}}>
          <Row>
            <Card.Text className="text-center p-5 h3">
              {
                counter
              }
            </Card.Text>
          </Row>
          <Row>
            <ButtonGroup>
              <Button variant="primary" onClick={() => { setCounter( counter + 1 ) }}>Count+</Button>
              <Button variant="primary" onClick={() => { setCounter(0) }}>Reset</Button>
            </ButtonGroup>
          </Row>
        </Card>
      </Container>
		</>
	)
}

export default Counter;