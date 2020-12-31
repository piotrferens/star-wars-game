import MaterialTypography from '@material-ui/core/Typography';
import clsx from 'clsx';

import { useStyles } from './Typography.styles';
import { TypographyProps } from './Typography.types';

export const Typography = ({ bold = false, className, ...rest }: TypographyProps) => {
  const classes = useStyles();
  const rootClassName = clsx(className, bold && classes.bold);

  return <MaterialTypography className={rootClassName} {...rest} />;
};
