import { Instrument } from "./Instrument";

export class Basic2 extends Instrument {
  constructor(args: ConstructorParameters<typeof Instrument>[0] = {}) {
    super(args);
    this.notes = 5;
    this.shape = [
      [-1, 1],
      [0, 1],
      [1, 1],
      [1, 0],
      [0, 0],
      [-1, 0],
      [-1, -1],
      [0, -1],
      [1, -1]
    ];
    this.outline = [
      [-1, 1],
      [1, 1],
      [1, -1],
      [-1, -1]
    ];
    this.init();
  }
}
