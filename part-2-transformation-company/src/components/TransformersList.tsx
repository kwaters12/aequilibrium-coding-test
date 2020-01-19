import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Paper from '@material-ui/core/Paper';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';
import TransformersListItem from './TransformersListItem';

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

function not(a: Transformer[], b: Transformer[]) {
  return a.filter(value => b.indexOf(value) === -1);
}

function intersection(a: Transformer[], b: Transformer[]) {
  return a.filter(value => b.indexOf(value) !== -1);
}

export default function TransformersList(props: { transformers: Transformer[], direction: string, onChange: any }) {
  const classes = useStyles();
  const [checked, setChecked] = React.useState<Transformer[]>([]);
  const [left, setLeft] = React.useState<Transformer[]>(props.direction === 'left' ? props.transformers : []);
  const [right, setRight] = React.useState<Transformer[]>(props.direction === 'right' ? props.transformers : []);

  const leftChecked = intersection(checked, left);
  const rightChecked = intersection(checked, right);

  const handleToggle = (value: Transformer) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const handleAllRight = () => {
    const newRight = right.concat(left)
    const newLeft: Transformer[] = []
    setRight(newRight);
    setLeft(newLeft);
    props.onChange(props.direction === 'left' ? newRight : newLeft)
  };

  const handleCheckedRight = () => {
    const newRight = right.concat(leftChecked)
    const newLeft = not(left, leftChecked)
    setRight(newRight);
    setLeft(newLeft);
    setChecked(not(checked, leftChecked));
    props.onChange(props.direction === 'left' ? newRight : newLeft)
  };

  const handleCheckedLeft = () => {
    const newRight = not(right, rightChecked)
    const newLeft = left.concat(rightChecked)
    setLeft(newLeft);
    setRight(newRight);
    setChecked(not(checked, rightChecked));
    props.onChange(props.direction === 'left' ? newRight : newLeft)

  };

  const handleAllLeft = () => {
    const newRight: Transformer[] = []
    const newLeft = left.concat(right)
    setLeft(newLeft);
    setRight(newRight);
    props.onChange(props.direction === 'left' ? newRight : newLeft)
  };

  const customList = (items: Transformer[]) => (
    <Paper className={classes.paper}>
      <List dense component="div" role="list">
        {items.map((value: Transformer, index: number) => {
          const labelId = `transfer-list-item-${value}-label`;

          return (
            <ListItem className={`listItem ${checked.indexOf(value) !== -1 ? classes.selected : ''}`} key={index} role="listitem" button onClick={handleToggle(value)}>
              <TransformersListItem transformer={value as Transformer} />
            </ListItem>
          );
        })}
        <ListItem />
      </List>
    </Paper>
  );

  return (
    <Grid container spacing={2} justify="center" alignItems="center" className={classes.root}>
      <Grid item>{customList(left)}</Grid>
      <Grid item>
        <Grid container direction="column" alignItems="center">
          <Button
            variant="outlined"
            size="small"
            className={classes.button}
            onClick={handleAllRight}
            disabled={left.length === 0}
            aria-label="move all right"
          >
            ≫
          </Button>
          <Button
            variant="outlined"
            size="small"
            className={classes.button}
            onClick={handleCheckedRight}
            disabled={leftChecked.length === 0}
            aria-label="move selected right"
          >
            &gt;
          </Button>
          <Button
            variant="outlined"
            size="small"
            className={classes.button}
            onClick={handleCheckedLeft}
            disabled={rightChecked.length === 0}
            aria-label="move selected left"
          >
            &lt;
          </Button>
          <Button
            variant="outlined"
            size="small"
            className={classes.button}
            onClick={handleAllLeft}
            disabled={right.length === 0}
            aria-label="move all left"
          >
            ≪
          </Button>
        </Grid>
      </Grid>
      <Grid item>{customList(right)}</Grid>
    </Grid>
  );
}