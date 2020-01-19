import { makeStyles, Theme, createStyles } from "@material-ui/core";
import React from 'react';
import { Transformer } from '../interfaces/transformer.interface'
import { Allegiances } from "../interfaces";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    transformersList: {
      margin: 0,
      padding: 0
    },
    transformersListItem: {
      margin: 0,
      marginRight: '4px',
      padding: 0,
      display: 'block'
    }
  }),
);

type TransformersListItemProps = {
  transformer: Transformer
}

export default function TransformersListItem({ transformer }: TransformersListItemProps) {
  const classes = useStyles();
  const powerBarStyle = (transformer: Transformer, property: string) => {
    return {
      height: '5px',
      width: `${(transformer as any)[property]}0%`,
      backgroundColor: (transformer.allegiance === Allegiances.AUTOBOTS ? 'rgb(1, 78, 192' : 'rgb(195, 31, 60)')
    }
  }

  return (
    <span style={{ width: '100%', fontSize: '12px' }}>
      <span style={{ width: '100%', fontSize: '14px' }}><strong>{transformer.name}</strong></span>
      <ul className={classes.transformersList}>
        <li className={classes.transformersListItem}><strong>Strength: </strong>
          {transformer.strength}
          <div style={{ width: '100%', border: '1px solid grey' }}>
            <div style={powerBarStyle(transformer, 'strength')}></div>
          </div>
        </li>
        <li className={classes.transformersListItem}><strong>Endurance: </strong>
          {transformer.endurance}
          <div style={{ width: '100%', border: '1px solid grey' }}>
            <div style={powerBarStyle(transformer, 'endurance')}></div>
          </div>
        </li>
        <li className={classes.transformersListItem}><strong>Firepower: </strong>
          {transformer.firepower}
          <div style={{ width: '100%', border: '1px solid grey' }}>
            <div style={powerBarStyle(transformer, 'firepower')}></div>
          </div>
        </li>
        <li className={classes.transformersListItem}><strong>Intelligence: </strong>
          {transformer.intelligence}
          <div style={{ width: '100%', border: '1px solid grey' }}>
            <div style={powerBarStyle(transformer, 'intelligence')}></div>
          </div>
        </li>
        <li className={classes.transformersListItem}><strong>Rank: </strong>
          {transformer.rank}
          <div style={{ width: '100%', border: '1px solid grey' }}>
            <div style={powerBarStyle(transformer, 'rank')}></div>
          </div>
        </li>
        <li className={classes.transformersListItem}><strong>Skill: </strong>
          {transformer.skill}
          <div style={{ width: '100%', border: '1px solid grey' }}>
            <div style={powerBarStyle(transformer, 'skill')}></div>
          </div>
        </li>
        <li className={classes.transformersListItem}><strong>Speed: </strong>
          {transformer.speed}
          <div style={{ width: '100%', border: '1px solid grey' }}>
            <div style={powerBarStyle(transformer, 'speed')}></div>
          </div>
        </li>
        <li className={classes.transformersListItem}><strong>Courage: </strong>
          {transformer.courage}
          <div style={{ width: '100%', border: '1px solid grey' }}>
            <div style={powerBarStyle(transformer, 'courage')}></div>
          </div>
        </li>
      </ul>
    </span>
  )
}
