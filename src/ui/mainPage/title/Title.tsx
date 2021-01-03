import { Typography } from 'src/components';

import { useStyles } from './Title.styles';
import { MainPageTitleProps } from './Title.types';

export const MainPageTitle = ({ title }: MainPageTitleProps) => {
  const classes = useStyles();

  return (
    <Typography className={classes.root} variant="h5" align="center" bold>
      {title}
    </Typography>
  );
};
