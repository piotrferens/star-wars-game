import { ResourcesLayout } from 'src/ui/layouts/resources/Resources';

import { ActionButton } from './actionButton/ActionButton';
import { BattleResult } from './battleResult/BattleResult';
import { Playground } from './playGround/Playground';
import { ResourcePageProps } from './ResourcePage.types';

export const ResourcePage = ({ refetch, isLoading, ...rest }: ResourcePageProps) => (
  <ResourcesLayout>
    <BattleResult result={rest.battleResult} isLoading={isLoading} />
    <Playground isLoading={isLoading} {...rest} />
    <ActionButton onClick={refetch} isLoading={isLoading} />
  </ResourcesLayout>
);
