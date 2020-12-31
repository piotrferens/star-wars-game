import { Container } from 'src/components';

import { useStyles } from './Layout.styles';
import { MainPageLayoutProps } from './Layout.types';

export const MainPageLayout = ({ children }: MainPageLayoutProps) => {
  const classes = useStyles();

  return (
    <Container>
      <div className={classes.wrapper}>{children}</div>
    </Container>
  );
};
