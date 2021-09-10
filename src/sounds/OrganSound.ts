import { Sound } from "./Sound";
import { SynthSound } from "./SynthSound";

export class OrganSound extends SynthSound {
  harmonics: number[];
  constructor(args: ConstructorParameters<typeof Sound>[0] = {}) {
    super(args);
    this.harmonics = [1, 2, 4, 8];
    this.envelopes = {
      amplitude: [
        { time: 0, value: 0 },
        { time: 0.05, value: 1 },
        { time: 0.35, value: 0 }
      ],
      lpFilter: [{ time: 0.35, value: 0.001, exp: true }]
    };
    this.effectOptions.baseReverb = 0.2;
    this.effects = {
      filters: [
        {
          type: "lowpass",
          frequency: 2500,
          q: 0.71
        },
        {
          type: "highpass",
          frequency: 120,
          q: 0.71
        }
      ]
    };
  }
}
