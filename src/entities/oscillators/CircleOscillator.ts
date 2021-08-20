import { Oscillator } from "./Oscillator";
import { CANVAS_CONTEXTS, LINE_WIDTH, TAU, TILE_DIMENSIONS } from "../../globals";
import { COORDS } from "../../index";
import { mapToScreen } from "../../utils/conversions";
import { rotatePoint } from "../../utils/math";

export class CircleOscillator extends Oscillator {
  radius: number;

  constructor(args: ConstructorParameters<typeof Oscillator>[0] = {}) {
    super(args);
    this.radius = 1;
  }

  renderBaseShape(
    cx: number,
    cy: number,
    ctx: CanvasRenderingContext2D = CANVAS_CONTEXTS.oscillator,
    radius: number = COORDS.width(TILE_DIMENSIONS.HALF - LINE_WIDTH.VALUE),
    lineWidth: number = COORDS.width(LINE_WIDTH.VALUE),
    color: string = this.disabled ? this.colorDisabled : this.color
  ): void {
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    ctx.lineWidth = lineWidth;
    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, TAU);
  }

  renderArm(cx: number, cy: number): void {
    CANVAS_CONTEXTS.oscillator.moveTo(cx, cy);
    const point = rotatePoint(
      cx + COORDS.width(TILE_DIMENSIONS.SIZE * this.radius),
      cy,
      cx,
      cy,
      TAU * this.getCyclePosition() - Math.PI / 2
    );
    CANVAS_CONTEXTS.oscillator.lineTo(point.x, point.y);
    CANVAS_CONTEXTS.oscillator.stroke();
    CANVAS_CONTEXTS.oscillator.beginPath();
    CANVAS_CONTEXTS.oscillator.arc(
      point.x,
      point.y,
      COORDS.width(TILE_DIMENSIONS.QUARTER),
      0,
      TAU
    );
    CANVAS_CONTEXTS.oscillator.fill();
  }

  render(): void {
    const cx = mapToScreen.x(this.position.x + 0.5);
    const cy = mapToScreen.y(this.position.y - 0.5);
    this.renderBaseShape(cx, cy);
    this.renderArm(cx, cy);
  }
}
