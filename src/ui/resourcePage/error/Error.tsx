import { Typography } from 'src/components';
import { ResourcesLayout } from 'src/ui/layouts/resources/Resources';

import { ActionButton } from '../actionButton/ActionButton';

import { useStyles } from './Error.styles';
import { ErrorProps } from './Error.types';

export const Error = ({ onClick }: ErrorProps) => {
  const classes = useStyles();

  return (
    <ResourcesLayout>
      <Typography variant="h4" bold color="error" className={classes.title} align="center">
        Can not find resources
      </Typography>
      <ActionButton onClick={onClick} text="Try again" />
    </ResourcesLayout>
  );
};
