import React from 'react';
import { TransformersData } from '../transformers-data'
import { Transformer } from '../interfaces'
import TransferList from './TransferList'
import { Button } from '@material-ui/core';

type Props = {}
type State = {
  autobots: any[],
  decepticons: any[],
  selectedAutobots: any[],
  selectedDecepticons: any[]
}

export class TransformersList extends React.Component<Props, State> {
  constructor(props: any) {
    super(props)
    this.state = {
      autobots: TransformersData.autobots,
      decepticons: TransformersData.decepticons,
      selectedAutobots: [],
      selectedDecepticons: []
    }
  }

  componentWillMount() {
    console.log(this.state)
  }

  handleUpdateAutobots(event: any) {
    console.log(event)
    this.setState({
      selectedAutobots: event
    })
  }

  handleUpdateDecepticons(event: any) {
    console.log(event)
    this.setState({
      selectedDecepticons: event
    })
  }

  battleTime() {
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <div style={{ width: '50%', float: 'left', display: 'inline-block' }}>
          <TransferList transformers={this.state.autobots} direction='left' onChange={this.handleUpdateAutobots.bind(this)} />
        </div>
        <div style={{ width: '50%', float: 'right', display: 'inline-block' }}>
          <TransferList transformers={this.state.decepticons} direction='right' onChange={this.handleUpdateDecepticons.bind(this)} />
        </div>
        <div style={{ width: '100%', display: 'block' }}>
          <Button onClick={this.battleTime.bind(this)}>Let the Battle Commence!</Button>
        </div>
      </div >
    )
  }
}