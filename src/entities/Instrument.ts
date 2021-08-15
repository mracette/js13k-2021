import { Camera } from "./Camera";
import { MapEntity, MapEntityArgs } from "./MapEntity";
import { SvgImage, SvgImageArgs } from "../components/SvgImage";
import { CanvasCoordinates } from "../core/Coords";
import { TILE_DIMENSIONS } from "../globals";
import { mapToScreen } from "../utils/conversions";

export type InstrumentArgs = MapEntityArgs & SvgImageArgs;

export class Instrument extends MapEntity {
  svg: SvgImage;
  constructor(args: InstrumentArgs) {
    super(args);
    const { dataUrl } = args;
    this.svg = new SvgImage(dataUrl);
  }

  render(ctx: CanvasRenderingContext2D, coords: CanvasCoordinates, camera: Camera): void {
    ctx.save();

    ctx.drawImage(
      this.svg.image,
      mapToScreen.x(this.position.x, coords, camera),
      mapToScreen.y(this.position.y, coords, camera),
      coords.width(TILE_DIMENSIONS.SIZE),
      coords.width(TILE_DIMENSIONS.SIZE)
    );
    ctx.restore();
  }
}
