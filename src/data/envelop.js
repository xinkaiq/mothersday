export function getEnvelopCoverRotate(scrollY) {
    const rotateX = scrollY <= 200 ? 0 : Math.min(180/(window.innerHeight - 200) * scrollY * 0.5, 180);
    return {
        transform: `rotateX(${rotateX}deg)`
    }
}


export function getEnvelopTranslateValue(scrollY) {
    return scrollY * 0.5;
}


export function getEnvelopTranslate(scrollY) {
    const translateY = getEnvelopTranslateValue(scrollY);
    return {
        transform: `translate(0px, ${translateY}px)`
    }
}


export function shouldEnvelopDisplay(scrollY) {
    return getEnvelopCoverRotate(scrollY) > window.innerHeight + 200;
}
