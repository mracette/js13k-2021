import { CircleOscillator, CircleOscillatorArgs } from "./CircleOscillator";
import { COLORS, DURATIONS } from "../../globals";

export class CircleOscillator1 extends CircleOscillator {
  constructor(args: CircleOscillatorArgs = {}) {
    super(args);
    this.interval = DURATIONS.QUARTER;
    this.color = COLORS.HOT_PINK;
    this.sequence = [
      [0, 1],
      [1, 0],
      [0, -1],
      [-1, 0]
    ];
    this.duration = this.interval * this.sequence.length;
  }
}