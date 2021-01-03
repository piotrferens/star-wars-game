import { Card, CardContent, Skeleton, Typography } from 'src/components';

import { useStyles } from './Card.styles';
import { PlayerCardProps } from './Card.types';

export const PlayerCard = ({ name, value, result, side, isLoading = false }: PlayerCardProps) => {
  const classes = useStyles({ result, side, isLoading });

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography color="textSecondary" className={classes.title} align="center">
          {isLoading ? <Skeleton /> : name}
        </Typography>
        <Typography bold align="center">
          {isLoading ? <Skeleton /> : value}
        </Typography>
      </CardContent>
    </Card>
  );
};
