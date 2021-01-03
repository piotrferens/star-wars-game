import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { fetchResourceList } from 'src/api/resources/resources';
import { ResourceURL } from 'src/api/resources/resources.types';
import { useGameDispatch, useGameState } from 'src/game/context/hooks';
import { fightNewBattle } from 'src/game/fightNewBattle/fightNewBattle';

import { PageTitle } from '../shared';

import { Error } from './error/Error';
import { ResourcePage } from './ResourcePage';
import { CountState, ResourcePageContainerProps, StatusState } from './ResourcePage.types';

export function ResourcePageContainer<T extends ResourceURL>(props: ResourcePageContainerProps<T>) {
  const [status, setStatus] = useState<StatusState>('idle');
  const [count, setCount] = useState<CountState>(props.count);
  const gameDispatch = useGameDispatch();
  const gameState = useGameState();

  const onError = () => toast.error('Something went wrong, looks like swapi.dev is not responding');

  const handleRefetch = async () => {
    try {
      setStatus('loading');

      let freshCount = count;

      if (!freshCount) {
        try {
          const resourceList = await fetchResourceList(props.resource);
          freshCount = resourceList.count;
          setCount(freshCount);
        } catch {
          setStatus('error');
          onError();
          return;
        }
      }

      const { players, fightResult } = await fightNewBattle(props.resource, freshCount, props.attribute);

      gameDispatch({ type: 'BATTLE_FINISHED', payload: { players, fightResult, resource: props.resource } });
      setStatus('success');
    } catch {
      setStatus('error');
      onError();
    }
  };

  useEffect(() => {
    return () => {
      toast.dismiss();
    };
  }, []);

  const resource = gameState[props.resource];

  if (!resource) {
    return (
      <>
        <PageTitle title={props.resource} />
        <Error onClick={handleRefetch} />
      </>
    );
  }

  return (
    <>
      <PageTitle title={`${resource.players.left.name} vs ${resource.players.right.name}`} />
      <ResourcePage
        refetch={handleRefetch}
        battleResult={resource.fightResult}
        leftSidePlayerScore={resource.leftSideWins}
        rightSidePlayerScore={resource.rightSideWins}
        leftSidePlayer={resource.players.left}
        rightSidePlayer={resource.players.right}
        isLoading={status === 'loading'}
      />
    </>
  );
}
