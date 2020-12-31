import { CardContent, Typography } from 'src/components';

import { MainPageResourceCardTitleProps } from './Title.types';

export const MainPageResourceCardTitle = ({ title }: MainPageResourceCardTitleProps) => (
  <CardContent>
    <Typography bold align="center">
      {title}
    </Typography>
  </CardContent>
);
