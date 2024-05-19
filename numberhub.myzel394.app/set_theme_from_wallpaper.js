import fs from "node:fs";
import tinycolor from "tinycolor2";

import Vibrant from "node-vibrant";

const IMAGE_PATH = "wallpaper.jpg";
const OUTPUT_PATH = "./src/lib/assets/globals.css";
const THEME_PATH = "./src/lib/components/theme.svelte";

const toRawRgb = (tinycolorInstance) => {
    const { r, g, b } = tinycolorInstance.toRgb();
    return `${r}, ${g}, ${b}`;
}

tinycolor.prototype.ensureMinLightness = function (minLightness) {
    if (this.getLuminance() < minLightness) {
        return this.lighten(minLightness - this.getLuminance());
    }

    return this;
}

async function main() {
    const colors = await Vibrant.from(IMAGE_PATH).getPalette();

    {
        const theme = `
        html {
            --background-null-color: ${toRawRgb(tinycolor(colors.DarkMuted.getHex()).darken(25).ensureMinLightness(2))};
            --background-color: ${toRawRgb(tinycolor(colors.DarkMuted).darken(20).ensureMinLightness(4))};
            --surface-color: ${toRawRgb(tinycolor(colors.DarkMuted).darken(18).ensureMinLightness(6))};
            --surface-tint-color: ${toRawRgb(tinycolor(colors.DarkMuted).darken(15).ensureMinLightness(8))};

            --on-background-null-primary-color: ${toRawRgb(tinycolor(colors.Muted.getHex()).lighten(20))};
            --on-background-null-secondary-color: ${toRawRgb(tinycolor(colors.Vibrant.getHex()).desaturate(30).darken(15).ensureMinLightness(8))};

            --on-background-primary-color: ${toRawRgb(tinycolor(colors.Muted.getHex()).saturate(10).lighten(13))};
            --on-background-secondary-color: ${toRawRgb(tinycolor(colors.Vibrant.getHex()).saturate(30).darken(10))};

            --on-surface-primary-color: ${toRawRgb(tinycolor(colors.Muted.getHex()).saturate(10).lighten(13))};
            --on-surface-secondary-color: ${toRawRgb(tinycolor(colors.Vibrant.getHex()).darken(5))};

            --on-surface-tint-primary-color: ${toRawRgb(tinycolor(colors.Muted.getHex()).saturate(15).lighten(10))};
            --on-surface-tint-secondary-color: ${toRawRgb(tinycolor(colors.Muted.getHex()).darken(8))};
        }
        `;

        fs.writeFileSync(
            OUTPUT_PATH,
            theme,
        );
    }

    {
        const text = `<meta name="theme-color" content="${colors.Vibrant.getHex()}">`;

        fs.writeFileSync(
            THEME_PATH,
            text,
        );
    };
}


main();

