import { Button, Skeleton } from 'src/components';

import { useStyles } from './ActionButton.styles';
import { ActionButtonProps } from './ActionButton.types';

export const ActionButton = ({ onClick, text = 'Play again', isLoading = false }: ActionButtonProps) => {
  const classes = useStyles();

  return (
    <div className={classes.buttonContainer}>
      {isLoading ? (
        <Skeleton height={48} width={110} />
      ) : (
        <Button size="large" onClick={onClick}>
          {text}
        </Button>
      )}
    </div>
  );
};
