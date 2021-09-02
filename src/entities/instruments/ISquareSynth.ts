import { Instrument } from "./Instrument";
import { TinSquare } from "../sounds/harmonic-synth/TinSquare";

export class ISquareSynth extends Instrument {
  constructor(args: ConstructorParameters<typeof Instrument>[0] = {}) {
    super(args);
    this.id = "in8";
    this.type = "bs";
    this.display = "Square";
    this.cost = 15;
    this.notes = 2;
    this.outline = [
      [0, 0],
      [1, 0],
      [2, 0],
      [2, -1],
      [1, -1],
      [1, -2],
      [0, -2],
      [0, -1]
    ];
    this.sound = new TinSquare();
    this.init();
  }
}
