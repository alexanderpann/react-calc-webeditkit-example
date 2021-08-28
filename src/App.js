import './App.css';

import React from "react";

import {WebEditKit,Renderer, 
  HorizontalCell as Horizontal, 
  VerticalCell as Vertical, 
  RowCell as Row,
  EmptyRowCell as EmptyRow,
  TabCell as Tab,
  EditableCell as Editable, 
  FixedCell as Fixed, 
  ChildCell as Child,
  VerticalCollectionCell as VerticalCollection}
   from './cells'

class App extends React.Component {
  render() {
    return (
      <WebEditKit 
        baseurl = "localhost:2904"
        model = "com.strumenta.financialcalc.sandbox.company"
        node = "324292001770075100"
        target = "calc">
          <Renderer name="com.strumenta.financialcalc.Input">
            <Horizontal>
              <Editable property="name" />
              <Fixed value="of type" classes={["keyword"]} />
              <Child containment="type" />
            </Horizontal>
          </Renderer>
          <Renderer name="com.strumenta.financialcalc.StringType">
            <Fixed value="string" classes={["type"]} deleter={modelNode => modelNode.deleteMe()} /> 
          </Renderer>
          <Renderer name="com.strumenta.financialcalc.BooleanType">
            <Fixed value="boolean" classes={["type"]} deleter={modelNode => modelNode.deleteMe()} /> 
          </Renderer>
          <Renderer name="com.strumenta.financialcalc.FinancialCalcSheet">
            <Vertical>
              <Row>
                <Fixed value="Calculations" classes={["title"]} />
                <Editable property="name" classes={["title"]} />
              </Row>
              <EmptyRow />
              <Row>
                <Fixed value="inputs:" classes={["strong"]} />
              </Row>
              <Row>
                <Tab />
                <VerticalCollection containment="inputs" />
              </Row>
            </Vertical>  
          </Renderer>
        </WebEditKit>
    )
  }
}


export default App;
