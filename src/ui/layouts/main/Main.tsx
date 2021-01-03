import { Container } from 'src/components';

import { useStyles } from './Main.styles';
import { MainLayoutProps } from './Main.types';

export const MainLayout = ({ children }: MainLayoutProps) => {
  const classes = useStyles();

  return (
    <Container>
      <div className={classes.wrapper}>{children}</div>
    </Container>
  );
};
