import { getEnvelopTranslateValue } from "./envelop";

export function getImageRoseTranslate(scrollY) {
    const envelopMove = getEnvelopTranslateValue(scrollY);
    const translate = scrollY <= envelopMove + 600 ? 1 : Math.min((scrollY - envelopMove - 600), 580);
    return {
        transform: `translate(-${translate}px, ${translate}px)`
    }
}

export function getImagePenTranslate(scrollY) {
    const envelopMove = getEnvelopTranslateValue(scrollY);
    const translate = scrollY <= envelopMove + 600 ? 1 : Math.min((scrollY - envelopMove - 600), 640);
    return {
        transform: `translate(${translate}px, 0)`
    }
}
