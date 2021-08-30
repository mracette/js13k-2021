import { CircleOscillator1 } from "./CircleOscillator1";
import { CircleOscillator2 } from "./CircleOscillator2";
import { CircleOscillator3 } from "./CircleOscillator3";
import { SquareOscillator1 } from "./SquareOscillator1";
import { SquareOscillator2 } from "./SquareOscillator2";
import { SquareOscillator3 } from "./SquareOscillator3";
import { TriangleOscillator1 } from "./TriangleOscillator1";
import { TriangleOscillator2 } from "./TriangleOscillator2";
import { TriangleOscillator3 } from "./TriangleOscillator3";

export const OSCILLATOR_FACTORIES = {
  co1: (args: ConstructorParameters<typeof CircleOscillator1>[0]): CircleOscillator1 =>
    new CircleOscillator1(args),
  // co2: (args: ConstructorParameters<typeof CircleOscillator2>[0]): CircleOscillator2 =>
  //   new CircleOscillator2(args),
  // co3: (args: ConstructorParameters<typeof CircleOscillator3>[0]): CircleOscillator3 =>
  //   new CircleOscillator3(args),
  to1: (
    args: ConstructorParameters<typeof TriangleOscillator1>[0]
  ): TriangleOscillator1 => new TriangleOscillator1(args),
  // to2: (
  //   args: ConstructorParameters<typeof TriangleOscillator2>[0]
  // ): TriangleOscillator2 => new TriangleOscillator2(args),
  // to3: (
  //   args: ConstructorParameters<typeof TriangleOscillator3>[0]
  // ): TriangleOscillator3 => new TriangleOscillator3(args),
  so1: (args: ConstructorParameters<typeof SquareOscillator1>[0]): SquareOscillator1 =>
    new SquareOscillator1(args)
  // so2: (args: ConstructorParameters<typeof SquareOscillator2>[0]): SquareOscillator2 =>
  //   new SquareOscillator2(args),
  // so3: (args: ConstructorParameters<typeof SquareOscillator3>[0]): SquareOscillator3 =>
  //   new SquareOscillator3(args)
};

export type OscillatorIds = keyof typeof OSCILLATOR_FACTORIES;

export type AnyOscillator = ReturnType<typeof OSCILLATOR_FACTORIES[OscillatorIds]>;

export const OSCILLATOR_LIST: AnyOscillator[] = Object.values(OSCILLATOR_FACTORIES).map(
  (factory) => factory({ preview: true })
);
