import {
  AnyInstrument,
  InstrumentId,
  INSTRUMENT_FACTORIES,
  INSTRUMENT_LIST
} from "./entities/instruments/factories";
import {
  AnyOscillator,
  OscillatorIds,
  OSCILLATOR_FACTORIES,
  OSCILLATOR_LIST
} from "./entities/oscillators/factories";
import { COLORS } from "./globals/colors";
import { ELEMENTS } from "./globals/dom";
import { DEBUG } from "./globals/game";
import { ASPECT_RATIO } from "./globals/sizes";
import { FONT_STYLE, STYLES } from "./globals/styles";
import { dragEntityToMap } from "./interactions";
import { clearCanvasAndState } from "./utils/canvas";
import { abbreviateNumber, toggleMenu } from "./utils/dom";

const drawMenuButtonUi = (
  canvas: HTMLCanvasElement,
  entity: AnyOscillator | AnyInstrument
): void => {
  clearCanvasAndState(canvas);
  const ctx = canvas.getContext("2d");
  const type = entity.id.substr(0, 2);
  if (entity.name === "oscillator") {
    (entity as AnyOscillator).renderBaseShape(
      canvas.width / 2,
      canvas.height / 1.75,
      ctx,
      canvas.width * (type === "co" ? 0.15 : 0.3),
      canvas.width / 15
    );
    ctx.stroke();
  }
  if (entity.name === "instrument") {
    canvas.width = ELEMENTS.canvasInstruments.width;
    canvas.height = ELEMENTS.canvasInstruments.height;
    const zoom = 5.5;
    const { x: ax, y: ay } = ASPECT_RATIO;
    ctx.save();
    ctx.setTransform(
      zoom,
      0,
      0,
      (zoom * ay) / ax,
      (-(zoom - 1) * canvas.width) / 2,
      (-((zoom * ay) / ax - 1) * canvas.height) / 2
    );
    entity.render(ctx);
    ctx.restore();
    ctx.scale(1, ay / ax);
  }
  ctx.font = `${canvas.width / 5}px ${FONT_STYLE}`;
  ctx.fillStyle = COLORS.WHITE;
  ctx.textAlign = "center";
  const text = abbreviateNumber(entity.cost);
  const metrics = ctx.measureText(text);
  ctx.fillText(text, canvas.width / 2, metrics.actualBoundingBoxAscent * 1.75);
};

export const setupMenuUI = (): void => {
  const allEntities = [...OSCILLATOR_LIST, ...INSTRUMENT_LIST];
  console.log(allEntities);
  allEntities.forEach((entity, i) => {
    const id = entity.id as OscillatorIds | InstrumentId;
    const name = entity.name;
    const button = document.createElement("button");
    const canvas = document.createElement("canvas");
    button.append(canvas);
    button.disabled = !DEBUG;
    button.id = id;
    console.log(id);

    // appends button to it's corresponding <div /> in the menu
    const type = entity.id.substr(0, 2);
    (ELEMENTS as any)[type].append(button);

    Object.assign(button.style, {
      width: "7.5vh",
      height: "7.5vh",
      background: COLORS.BACKGROUND
    });

    button.onclick = (e: MouseEvent | TouchEvent) => {
      e.stopPropagation();
      toggleMenu();
      dragEntityToMap(
        allEntities[i],
        name === "instrument"
          ? INSTRUMENT_FACTORIES[id as InstrumentId]
          : OSCILLATOR_FACTORIES[id as OscillatorIds]
      );
    };

    const observer = new ResizeObserver(() => {
      clearCanvasAndState(canvas);
      drawMenuButtonUi(canvas, entity);
    });

    observer.observe(button);
  });
};

export const setupBaseStyles = (): void => {
  Object.entries(ELEMENTS).forEach(([k, v]) => {
    Object.assign(v.style, STYLES[k as keyof typeof STYLES]);
  });

  document.body.style.background = "black";
  // document.body.style.background = COLORS.BACKGROUND;
};
