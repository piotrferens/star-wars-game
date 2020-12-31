import { CardMedia } from 'src/components';

import { useStyles } from './Image.styles';
import { MainPageResourceCardImageProps } from './Image.types';

export const MainPageResourceCardImage = ({ title, imageSrc }: MainPageResourceCardImageProps) => {
  const classes = useStyles();

  return <CardMedia className={classes.root} image={imageSrc} title={title} />;
};
