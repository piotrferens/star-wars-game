import { Link } from '@material-ui/core';

import { Grid } from 'src/components';

import { MainPageResourceCard } from './card/Card';
import { MainPageResourcesProps } from './Resources.types';

export const MainPageResources = ({ resources }: MainPageResourcesProps) => (
  <Grid container spacing={4} alignItems="flex-end" justifyContent="center">
    {resources.map(({ id, path, ...rest }) => (
      <Grid key={id} xs={12} md={6} lg={3} item>
        <Link underline="none" href={path}>
          <MainPageResourceCard {...rest} />
        </Link>
      </Grid>
    ))}
  </Grid>
);
