import { Card, CardActionArea } from 'src/components';

import { MainPageResourceCardProps } from './Card.types';
import { MainPageResourceCardImage } from './image/Image';
import { MainPageResourceCardTitle } from './title/Title';

export const MainPageResourceCard = ({ title, imageSrc }: MainPageResourceCardProps) => (
  <Card>
    <CardActionArea>
      <MainPageResourceCardImage imageSrc={imageSrc} title={title} />
      <MainPageResourceCardTitle title={title} />
    </CardActionArea>
  </Card>
);
