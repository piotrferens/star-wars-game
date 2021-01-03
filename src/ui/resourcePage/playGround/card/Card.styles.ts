import { makeStyles, Theme } from '@material-ui/core/styles';

import { UseStylesProps } from './Card.types';

export const useStyles = makeStyles<Theme, UseStylesProps>(
  ({ spacing, palette: { success, error, warning, divider } }) => ({
    card: {
      border: ({ result, side, isLoading }) =>
        spacing(
          0.25,
          'solid',
          isLoading ? divider : result === side ? success.main : result === 'draw' ? warning.main : error.main,
        ),
    },
    title: { marginBottom: spacing(2) },
  }),
);
