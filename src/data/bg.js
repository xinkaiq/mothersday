import { getEnvelopTranslateValue } from "./envelop";

const TO = [240, 128, 128];
const FROM = [211, 211, 211];
const INTERVAL = 500;


function getColor(x) {
    if (x <= 0) return FROM;
    if (x >= INTERVAL) return TO;
    const color = FROM.map((item, index) => (TO[index] - item) / INTERVAL * x + item);
    return color;
}


export function getBackgroundColor(scrollY) {
    const envelopMove = getEnvelopTranslateValue(scrollY);
    const color = scrollY <= envelopMove + 600 ? FROM : getColor(scrollY - envelopMove - 600);
    return {
        'background-color': `rgb(${color[0]}, ${color[1]}, ${color[2]})`
    }
}
