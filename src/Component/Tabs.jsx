import React, { useState } from 'react';
import { Tab, Row, Col, Nav, NavItem } from 'react-bootstrap';

const HoverTabs = () => {
  const [activeKey, setActiveKey] = useState('first');

  const handleMouseEnter = (eventKey) => {
    setActiveKey(eventKey);
  };

  return (
    <Tab.Container id="left-tabs-example" activeKey={activeKey} onSelect={() => {}}>
      <Row className="clearfix">
        <Col sm={4}>
          <Nav bsStyle="pills" stacked>
            <NavItem eventKey="first" onMouseEnter={() => handleMouseEnter('first')}>
              Tab 1
            </NavItem>
            <NavItem eventKey="second" onMouseEnter={() => handleMouseEnter('second')}>
              Tab 2
            </NavItem>
          </Nav>
        </Col>
        <Col sm={8}>
          <Tab.Content animation>
            <Tab.Pane eventKey="first">Tab 1 content</Tab.Pane>
            <Tab.Pane eventKey="second">Tab 2 content</Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
};

export default HoverTabs;
