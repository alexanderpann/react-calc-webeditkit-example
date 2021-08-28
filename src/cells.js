import React from "react"

import * as webeditkit from 'webeditkit'

import { emptyRow, row, childCell, editableCell, horizontalGroupCell, verticalGroupCell, registerRenderer, tabCell, fixedCell, verticalCollectionCell } from 'webeditkit'
import {Data} from 'webeditkit/dist/presentation/cells/data'

export class WebEditKit extends React.Component {

    componentDidMount() {
        webeditkit.setup()
        webeditkit.addModel(this.props.baseurl,this.props.model, this.props.node, this.props.target)
    }

    render() {
        return (
            <>
            {this.props.children}
            <div id={this.props.target} className="editor"></div>
        </>
        )
    }
}

class RenderlessComponent extends React.Component {
    render() {
        return null
    }
}

class ContainerComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = { cellsFns: []}

    }

    createCellInternal(cellsFn) {
        this.state.cellsFns.push(cellsFn)
    }

    childrenWithProps() {
        let f= this.createCellInternal.bind(this)
        return React.Children.map(this.props.children, child => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { createCell:f })
        }
        return child
      })
    }

    render() {
        return <>{this.childrenWithProps()}</>
    }
}

export class Renderer extends ContainerComponent {
 
    componentDidMount() {
        let that = this
        registerRenderer(this.props.name, function(modelNode) {
            if (!modelNode) {
                throw new Error("modelNode should not be undefined in renderer")
            }
            return that.state.cellsFns[0](modelNode)
        })   
    } 
  }
  
  export class HorizontalCell extends ContainerComponent {
    componentDidMount() {
        let cell = modelNode => horizontalGroupCell(this.state.cellsFns.map(cellFn => cellFn(modelNode)))
        this.props.createCell(cell)
    }
  }
  
  export class VerticalCell extends ContainerComponent {
    componentDidMount() {
        let cell = modelNode => verticalGroupCell(this.state.cellsFns.map(cellFn => cellFn(modelNode)))
        this.props.createCell(cell)
    }
  }

  export class RowCell extends ContainerComponent {
    componentDidMount() {
        let cell = modelNode => row(this.state.cellsFns.map(cellFn => cellFn(modelNode)))
        this.props.createCell(cell)
    }
  }
  
  export class EmptyRowCell extends RenderlessComponent {
    componentDidMount() {
        let cell = modelNode => emptyRow()
        this.props.createCell(cell)
    }
  }
  

  export class EditableCell extends RenderlessComponent {
     
    componentDidMount() {
         let cell = modelNode => editableCell(new Data(), modelNode, this.props.property, this.props.classes?this.props.classes:[])
         this.props.createCell(cell)
     } 
  }
  
  export class FixedCell extends RenderlessComponent {
    componentDidMount() {
        let that = this
        let cell = modelNode => fixedCell(modelNode, this.props.value, this.props.classes?this.props.classes:[],null,function() {
            if(that.props.deleter) {
                return that.props.deleter(modelNode)
            }
        })
        this.props.createCell(cell)
    } 
  }
  
  export class ChildCell extends RenderlessComponent {
    componentDidMount() {
        let cell = modelNode => childCell(modelNode, this.props.containment)
        this.props.createCell(cell)
    } 
  }

  export class TabCell extends RenderlessComponent {
    componentDidMount() {
        let cell = modelNode => tabCell()
        this.props.createCell(cell)
    } 
  }

  export class VerticalCollectionCell extends RenderlessComponent {
    componentDidMount() {
        let cell = modelNode => verticalCollectionCell(modelNode, this.props.containment)
        this.props.createCell(cell)
    } 
  }