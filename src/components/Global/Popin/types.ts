export enum PopupPlacement {
  Bottom = 'Bottom',
  Top = 'Top',
}

export enum PopupAlignement {
  Center = 'Center',
  Start = 'Start',
  ContainerFull = 'ContainerFull',
  ContainerStart = 'ContainerStart',
  ContainerEnd = 'ContainerEnd',
  End = 'End',
  Full = 'Full',
}

export type Position = {
  left: number;
  top: number;
};

export interface Size {
  width: number;
  height: number;
}

export type Mesure = Position & Size;
