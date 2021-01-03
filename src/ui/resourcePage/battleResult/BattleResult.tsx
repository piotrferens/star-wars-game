import { Skeleton, Typography } from 'src/components';

import { getAnnouncementMessage } from './BattleResul.utils';
import { useStyles } from './BattleResult.styles';
import { BattleResultProps } from './BattleResult.types';

export const BattleResult = ({ result, isLoading = false }: BattleResultProps) => {
  const classes = useStyles();

  return (
    <Typography variant="h4" className={classes.title}>
      {isLoading ? <Skeleton data-testid="loadingIndicator" width={250} /> : getAnnouncementMessage[result]}
    </Typography>
  );
};
