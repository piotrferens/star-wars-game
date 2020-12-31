import { ResourceTypes } from 'src/mainPage/resources/Resources.types';

export type MainPageResourceCardProps = Omit<ResourceTypes, 'id' | 'path'>;
