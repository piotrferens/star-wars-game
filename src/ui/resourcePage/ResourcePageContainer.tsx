import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { fetchPlayers, fetchResourceList } from 'src/api/resources/resources';
import { ResourceURL } from 'src/api/resources/resources.types';
import { useGameDispatch, useGameState } from 'src/game/context/hooks';

import { Error } from './error/Error';
import { ResourcePage } from './ResourcePage';
import { ResourcePageContainerProps, StatusState } from './ResourcePage.types';

export function ResourcePageContainer<T extends ResourceURL>(props: ResourcePageContainerProps<T>) {
  const [status, setStatus] = useState<StatusState>('idle');
  const [count, setCount] = useState<number>(props.count);
  const gameDispatch = useGameDispatch();
  const gameState = useGameState();

  const onError = () => toast.error('Something went wrong, looks like swapi.dev is not responding');

  const handleRefetch = async () => {
    try {
      setStatus('loading');

      if (!props.count) {
        try {
          const resourceList = await fetchResourceList(props.resource);
          setCount(resourceList.count);
        } catch {
          setStatus('error');
          onError();
          return;
        }
      }

      const { players, fightResult } = await fetchPlayers(props.resource, props.count || count, props.attribute);

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

  if (resource === null) {
    return <Error onClick={handleRefetch} />;
  }

  return (
    <ResourcePage
      refetch={handleRefetch}
      battleResult={resource.fightResult}
      leftSidePlayerScore={resource.leftSideWins}
      rightSidePlayerScore={resource.rightSideWins}
      leftSidePlayer={resource.players.left}
      rightSidePlayer={resource.players.right}
      isLoading={status === 'loading'}
    />
  );
}
