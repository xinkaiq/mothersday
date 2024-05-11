import { getEnvelopTranslateValue } from "./envelop";

export function getLetterScale(scrollY) {
    const envelopMove = getEnvelopTranslateValue(scrollY);
    const opacity = scrollY <= envelopMove + 600 ? 0 : Math.min((scrollY - (window.innerHeight + 600)/2) / window.innerHeight, 1);
    const scale = scrollY <= envelopMove + 600 ? 1 : Math.min(scrollY / window.innerHeight, 3);
    return {
        opacity: `${opacity}`,
        transform: `translate(-50%, -50%) scale(${scale})`
    }
}