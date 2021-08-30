import { AspectRatio } from "../core/AspectRatio";

const enum MAP_DIMENSION {
  SIZE = 255 // must be odd
}

const enum VIEWPORT_DIMENSION {
  SIZE = 13 // must be odd
}

export const enum MAP_DIMENSIONS {
  W = MAP_DIMENSION.SIZE,
  W_HALF = (MAP_DIMENSION.SIZE - 1) / 2,
  H = MAP_DIMENSION.SIZE,
  H_HALF = (MAP_DIMENSION.SIZE - 1) / 2,
  MIN_X = -(MAP_DIMENSION.SIZE - 1) / 2,
  MAX_X = (MAP_DIMENSION.SIZE - 1) / 2,
  MIN_Y = -(MAP_DIMENSION.SIZE - 1) / 2,
  MAX_Y = (MAP_DIMENSION.SIZE - 1) / 2
}

export const enum VIEWPORT_DIMENSIONS {
  W = VIEWPORT_DIMENSION.SIZE,
  H = VIEWPORT_DIMENSION.SIZE,
  W_HALF = (VIEWPORT_DIMENSION.SIZE - 1) / 2,
  H_HALF = (VIEWPORT_DIMENSION.SIZE - 1) / 2
}

export const enum ENTITY_ARRAY_DIMENSIONS {
  W = MAP_DIMENSION.SIZE,
  W_HALF = (MAP_DIMENSION.SIZE - 1) / 2,
  H = MAP_DIMENSION.SIZE,
  H_HALF = (MAP_DIMENSION.SIZE - 1) / 2,
  MIN_X = 0,
  MAX_X = MAP_DIMENSION.SIZE - 1,
  MIN_Y = 0,
  MAX_Y = MAP_DIMENSION.SIZE - 1
}

export const enum TILE_DIMENSION {
  SIZE = 0.07
}

export const enum TILE_DIMENSIONS {
  SIZE = TILE_DIMENSION.SIZE,
  HALF = TILE_DIMENSION.SIZE / 2,
  QUARTER = TILE_DIMENSION.SIZE / 4
}

export const MOUSE_POSITION: {
  screenX: number;
  screenY: number;
  mapX: number;
  mapY: number;
} = {
  screenX: undefined,
  screenY: undefined,
  mapX: undefined,
  mapY: undefined
};

export const ASPECT_RATIO = new AspectRatio(9, 16);

export const enum LINE_WIDTH {
  VALUE = 0.006,
  HALF = 0.003,
  DOUBLE = 0.012
}

const enum FONT_SIZE_BASE {
  VALUE = 0.035
}

export const enum FONT_SIZE {
  TRIPLE = FONT_SIZE_BASE.VALUE * 3,
  DOUBLE = FONT_SIZE_BASE.VALUE * 2,
  VALUE = FONT_SIZE_BASE.VALUE,
  HALF = FONT_SIZE_BASE.VALUE / 2
}

export const enum MARGIN_TOP_STATS {
  VALUE = -0.85
}
