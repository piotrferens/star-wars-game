import Link from 'next/link';

import { Button, KeyboardArrowLeft } from 'src/components';

import { MainLayout } from '../main/Main';

import { useStyles } from './Resources.styles';
import { ResourcesLayoutProps } from './Resources.types';

export const ResourcesLayout = ({ children }: ResourcesLayoutProps) => {
  const classes = useStyles();

  return (
    <MainLayout>
      <Link href="/">
        <a>
          <Button size="large" className={classes.button}>
            <KeyboardArrowLeft />
            Back
          </Button>
        </a>
      </Link>
      {children}
    </MainLayout>
  );
};
