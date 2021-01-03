import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ spacing }) => ({
  title: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: spacing(2),
  },
}));
