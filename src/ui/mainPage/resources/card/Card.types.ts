import { ResourceTypes } from 'src/ui/mainPage/resources/Resources.types';

export type MainPageResourceCardProps = Omit<ResourceTypes, 'id' | 'path'>;
