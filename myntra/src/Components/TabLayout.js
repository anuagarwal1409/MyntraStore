import React from 'react'
import { Col, Nav, Row } from 'react-bootstrap'
import { makeStyles } from '@material-ui/core/styles';
import Tab from 'react-bootstrap/Tab'
import TabContainer from 'react-bootstrap/TabContainer'
import Tabs from 'react-bootstrap/Tabs'
import ImageRow from './ImageRow'
import ImageRow2 from './ImageRow2'



const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 500,
  },
  myClass:{
      padding:20,
  },
});

function TabLayout() {
  const classes = useStyles();
    return (
        <div>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first" className="myClass">
            <Row>
    <Col sm={3}>
      <Nav variant="pills" className="flex-column">
        <Nav.Item>
          <Nav.Link eventKey="first" className="myClass" >New Collection</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="second" className="myClass">Summer Incomming</Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
    <Col sm={9}>
      <Tab.Content>
        <Tab.Pane eventKey="first">
          <ImageRow/>
        </Tab.Pane>
        <Tab.Pane eventKey="second">
          <ImageRow2/>
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>
        </div>
    )
}

export default TabLayout
