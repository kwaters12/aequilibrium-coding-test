import { makeStyles, Theme, createStyles } from "@material-ui/core";
import React from 'react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: 'auto',
    },
    paper: {
      width: 250,
      height: 500,
      overflow: 'auto',
    },
    button: {
      margin: theme.spacing(0.1, 0),
    },
    transformersList: {
      margin: 0,
      padding: 0
    },
    transformersListItem: {
      margin: 0,
      marginRight: '4px',
      padding: 0,
      display: 'block'
    },
    listItem: {
      borderTop: '1px solid #ddd',
      borderBottom: '1px solid #ddd',
    },
    selected: {
      border: '1px solid rgb(195, 31, 60)'
    }
  }),
);

export default function TransformersListItem(props: { transformer: Transformer }) {
  const classes = useStyles();
  const { transformer } = props

  return (
    <span style={{ width: '100%', fontSize: '12px' }}>
      <span style={{ width: '100%', fontSize: '14px' }}><strong>{transformer.name}</strong></span>
      <ul className={classes.transformersList}>
        <li className={classes.transformersListItem}><strong>Strength: </strong>
          {transformer.strength}
          <div style={{ width: '100%', border: '1px solid grey' }}>
            <div style={{ height: '5px', width: `${transformer.strength}0%`, backgroundColor: 'black' }}></div>
          </div>
        </li>
        <li className={classes.transformersListItem}><strong>Endurance: </strong>
          {transformer.endurance}
          <div style={{ width: '100%', border: '1px solid grey' }}>
            <div style={{ height: '5px', width: `${transformer.endurance}0%`, backgroundColor: 'black' }}></div>
          </div>
        </li>
        <li className={classes.transformersListItem}><strong>Firepower: </strong>
          {transformer.firepower}
          <div style={{ width: '100%', border: '1px solid grey' }}>
            <div style={{ height: '5px', width: `${transformer.firepower}0%`, backgroundColor: 'black' }}></div>
          </div>
        </li>
        <li className={classes.transformersListItem}><strong>Intelligence: </strong>
          {transformer.intelligence}
          <div style={{ width: '100%', border: '1px solid grey' }}>
            <div style={{ height: '5px', width: `${transformer.intelligence}0%`, backgroundColor: 'black' }}></div>
          </div>
        </li>
        <li className={classes.transformersListItem}><strong>Rank: </strong>
          {transformer.rank}
          <div style={{ width: '100%', border: '1px solid grey' }}>
            <div style={{ height: '5px', width: `${transformer.rank}0%`, backgroundColor: 'black' }}></div>
          </div>
        </li>
        <li className={classes.transformersListItem}><strong>Skill: </strong>
          {transformer.skill}
          <div style={{ width: '100%', border: '1px solid grey' }}>
            <div style={{ height: '5px', width: `${transformer.skill}0%`, backgroundColor: 'black' }}></div>
          </div>
        </li>
        <li className={classes.transformersListItem}><strong>Speed: </strong>
          {transformer.speed}
          <div style={{ width: '100%', border: '1px solid grey' }}>
            <div style={{ height: '5px', width: `${transformer.speed}0%`, backgroundColor: 'black' }}></div>
          </div>
        </li>
        <li className={classes.transformersListItem}><strong>Courage: </strong>
          {transformer.courage}
          <div style={{ width: '100%', border: '1px solid grey' }}>
            <div style={{ height: '5px', width: `${transformer.courage}0%`, backgroundColor: 'black' }}></div>
          </div>
        </li>
      </ul>
    </span>
  )
}
