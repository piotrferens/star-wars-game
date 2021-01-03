import { Grid, Skeleton, Typography } from 'src/components';

import { PlayerCard } from './card/Card';
import { useStyles } from './Playground.styles';
import { PlaygroundProps } from './Playground.types';

export const Playground = ({
  leftSidePlayerScore,
  rightSidePlayerScore,
  leftSidePlayer,
  rightSidePlayer,
  battleResult,
  isLoading,
}: PlaygroundProps) => {
  const classes = useStyles();

  return (
    <Grid container spacing={4} className={classes.root}>
      <Typography bold>{isLoading ? <Skeleton width={9} /> : leftSidePlayerScore}</Typography>
      <Grid xs={12} md={3} item>
        <PlayerCard
          name={leftSidePlayer.name}
          value={leftSidePlayer.value}
          result={battleResult}
          side="left"
          isLoading={isLoading}
        />
      </Grid>
      <Typography bold>VS</Typography>
      <Grid xs={12} md={3} item>
        <PlayerCard
          name={rightSidePlayer.name}
          value={rightSidePlayer.value}
          result={battleResult}
          side="right"
          isLoading={isLoading}
        />
      </Grid>
      <Typography bold>{isLoading ? <Skeleton width={9} /> : rightSidePlayerScore}</Typography>
    </Grid>
  );
};
