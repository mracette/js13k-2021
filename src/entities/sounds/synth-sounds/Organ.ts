import { SynthSound } from "./SynthSound";
import { Sound } from "../Sound";

export class Organ extends SynthSound {
  harmonics: number[];
  constructor(args: ConstructorParameters<typeof Sound>[0] = {}) {
    super(args);
    this.harmonics = [1, 2, 4, 8];
    this.envelop = [
      { time: 0, value: 0 },
      { time: 0.05, value: 1 },
      { time: 0.35, value: 0 }
    ];
    this.lpFilterEnvelope = [{ time: 0.35, value: 0.001, exp: true }];
    this.baseReverb = 0.2;
    this.init();
  }
}