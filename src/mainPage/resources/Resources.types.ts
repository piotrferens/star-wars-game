export type ResourceTypes = {
  id: number;
  title: string;
  imageSrc: string;
  path: string;
};

export type MainPageResourcesProps = { resources: ResourceTypes[] };
