import { TriangleOscillator } from "./TriangleOscillator";
import { DURATIONS } from "../../globals/audio";
import { COLORS } from "../../globals/colors";

export class TriangleOscillator3 extends TriangleOscillator {
  constructor(args: ConstructorParameters<typeof TriangleOscillator>[0] = {}) {
    super(args);
    this.interval = DURATIONS.WHOLE_TRIPLETS;
    this.id = "to3";
    this.cost = 5000;
    this.color = COLORS.HOT_BLUE;
    this.sequence = [
      [0, 3],
      [3, -3],
      [-3, -3]
    ];
    this.duration = this.interval * this.sequence.length;
    this.init();
  }
}
