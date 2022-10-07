import React, { useState } from "react";
import { Button, Col, Input, InputGroup, InputGroupText, Row } from "reactstrap";

function APINavBar(props) {
    const [inputUserId, setInputUserId] = useState(1)
    const onSubmit = (e) => {
        e.preventDefault();
        props.updateUserID(+inputUserId);
    }
  return (
    <nav className="mt-5 ">
      <Row >
        <Col md={{offset: 4, size: 3}}>
        <InputGroup>
          <InputGroupText>Enter User ID</InputGroupText>
          <Input type="number" onChange={e => {setInputUserId(e.target.value)}} value={inputUserId}/>
          <Button color="success" onClick={onSubmit}>Submit</Button>
        </InputGroup>
        </Col>
      </Row>
    </nav>
  );
}

export default APINavBar;
