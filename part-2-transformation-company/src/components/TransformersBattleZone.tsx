import React from 'react';
import { TransformersData } from '../transformers-data'
import { Transformer, Allegiances } from '../interfaces'
import TransformersList from './TransformersList'
import { Button } from '@material-ui/core';

type Props = {}
type State = {
  autobots: Transformer[],
  decepticons: Transformer[],
  selectedAutobots: Transformer[],
  selectedDecepticons: Transformer[],
  battles: Battle[],
  winningTeam: Battler[],
  losingTeam: Battler[],
  catastrophe: boolean
}

interface Battle {
  winner: Battler,
  autobot: Battler,
  decepticon: Battler
}

interface Battler extends Transformer {
  overallRating: number
}

export class TransformersBattleZone extends React.Component<Props, State> {
  constructor(props: any) {
    super(props)
    this.state = {
      autobots: TransformersData[Allegiances.AUTOBOTS],
      decepticons: TransformersData[Allegiances.DECEPTICONS],
      selectedAutobots: [],
      selectedDecepticons: [],
      battles: [],
      winningTeam: [],
      losingTeam: [],
      catastrophe: false
    }
  }

  handleUpdateAutobots(event: any) {
    this.setState({
      selectedAutobots: event,
      catastrophe: false,
      battles: []
    })
  }

  handleUpdateDecepticons(event: any) {
    this.setState({
      selectedDecepticons: event,
      catastrophe: false,
      battles: []
    })
  }

  //   The teams should be sorted by rank and faced off one on one against each other in order to
  // determine a victor, the loser is eliminated
  // ● A battle between opponents uses the following rules:
  // ○ If any fighter is down 4 or more points of courage and 3 or more points of strength
  // compared to their opponent, the opponent automatically wins the face - off regardless of
  // overall rating(opponent has run away)
  // ○ Otherwise, if one of the fighters is 3 or more points of skill above their opponent, they win
  // the fight regardless of the overall rating
  // ○ The winner is the Transformer with the highest overall rating
  // ● In the event of a tie, both Transformers are considered destroyed
  // ● Any Transformers who don’t have a fight are skipped(i.e.if it’s a team of 2 vs.a team of 1, there’s
  // only going to be one battle)
  // ● The team who eliminated the largest number of the opposing team is the winner
  battleTime() {
    const { selectedAutobots, selectedDecepticons } = this.state
    const battles: Battle[] = []

    const autobotBattlers: Battler[] = selectedAutobots.map(autobot => {
      return {
        ...autobot,
        overallRating: autobot.strength +
          autobot.intelligence +
          autobot.speed +
          autobot.endurance +
          autobot.firepower
      }
    }).sort((a: Battler, b: Battler) => a.rank - b.rank)

    const decepticonBattlers: Battler[] = selectedDecepticons.map(decepticon => {
      return {
        ...decepticon,
        overallRating: decepticon.strength +
          decepticon.intelligence +
          decepticon.speed +
          decepticon.endurance +
          decepticon.firepower
      }
    }).sort((a: Battler, b: Battler) => a.rank - b.rank)

    for (let i = 0;
      i < (autobotBattlers.length > decepticonBattlers.length ? decepticonBattlers.length : autobotBattlers.length);
      i++) {
      let autobot: Battler = autobotBattlers[i], decepticon: Battler = decepticonBattlers[i]
      let winner = this.performBattle(autobot, decepticon)
      battles.push({ winner, autobot, decepticon })
    }

    let survivingAutobots: Battler[] = []
    let survivingDecepticons: Battler[] = []

    battles.forEach(battle => {
      if (battle.winner.allegiance === Allegiances.AUTOBOTS) {
        survivingAutobots.push(battle.winner)
      } else if (battle.winner.allegiance === Allegiances.DECEPTICONS) {
        survivingDecepticons.push(battle.winner)
      }
    })

    this.setState({
      battles: battles,
      winningTeam: survivingAutobots.length > survivingDecepticons.length ? autobotBattlers : decepticonBattlers,
      losingTeam: survivingAutobots.length < survivingDecepticons.length ? survivingAutobots : survivingDecepticons
    })
  }

  performBattle(autobot: Battler, decepticon: Battler) {
    let winner = null

    if (autobot.name === 'Optimus Prime' && decepticon.name === 'Predaking') {
      this.setState({
        catastrophe: true
      })
      return autobot
    } else if (autobot.name === 'Optimus Prime') {
      winner = autobot
    } else if (decepticon.name === 'Predaking') {
      winner = decepticon
    } else if (Math.abs(autobot.courage - decepticon.courage) > 4) {
      winner = autobot.courage - decepticon.courage > -1 ? autobot : decepticon
    } else if (Math.abs(autobot.strength - decepticon.strength) > 3) {
      winner = autobot.strength - decepticon.strength > -1 ? autobot : decepticon
    } else {
      winner = autobot.overallRating > decepticon.overallRating ? autobot : decepticon
    }

    return winner
  }

  render() {
    const { autobots, decepticons, battles, winningTeam, losingTeam, catastrophe } = this.state
    let winningTeamName = '', losingTeamName = ''

    if (winningTeam.length) {
      winningTeamName = winningTeam[0].allegiance === Allegiances.AUTOBOTS ? 'Autobots' : 'Decepticons'
      losingTeamName = winningTeamName === 'Autobots' ? 'Decepticons' : 'Autobots'
    }

    return (
      <div>
        <div style={{ width: '50%', float: 'left', display: 'inline-block' }}>
          <h3>Autobots</h3>
          <TransformersList transformers={autobots} direction='left' onChange={this.handleUpdateAutobots.bind(this)} />
        </div>
        <div style={{ width: '50%', float: 'right', display: 'inline-block' }}>
          <h3>Decepticons</h3>
          <TransformersList transformers={decepticons} direction='right' onChange={this.handleUpdateDecepticons.bind(this)} />
        </div>
        <div style={{ width: '100%', paddingTop: '30px', display: 'block' }}>
          <Button variant="outlined" color="secondary" onClick={this.battleTime.bind(this)}>Start Battle!</Button>
        </div>
        <div style={{ width: '500px', margin: '30px auto', display: battles.length && !catastrophe ? 'block' : 'none' }}>
          <strong>{battles.length}</strong> battle{battles.length > 1 ? 's' : ''} <br /><br />
          <strong>Winning team ({winningTeamName}):</strong> {winningTeam.map(transformer => transformer.name).join(', ')} <br /><br />
          <strong>Survivors from the losing team ({losingTeamName}):</strong> {losingTeam.map(transformer => transformer.name).join(', ')}
        </div>
        <div style={{ width: '100%', margin: '30px auto', display: catastrophe ? 'block' : 'none' }}>
          Catastrophe!! Optimus Prime and Predaking clashed and destroyed everyone.
        </div>
      </div >
    )
  }
}