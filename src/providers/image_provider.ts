import { ImgDes } from "./types";


const germanyImages = import.meta.glob('../assets/germany_22/*.jpg')
const eilat24Images = import.meta.glob('../assets/eilat_24/*.jpg')
const eilat21Images = import.meta.glob('../assets/eilat_21/*.jpg')
const north23Images = import.meta.glob('../assets/north_23/*.jpg')
const north21Images = import.meta.glob('../assets/north_21/*.jpg')
const eilat_zukimImages = import.meta.glob('../assets/eilat_zukim/*.jpg')
const crazy_23Images = import.meta.glob('../assets/crazy_23/*.jpg')
const crazy_24Images = import.meta.glob('../assets/crazy_24/*.jpg')
const crazy_20Images = import.meta.glob('../assets/crazy_20/*.jpg')
const crazy_22Images = import.meta.glob('../assets/crazy_22/*.jpg')
const crazy_21Images = import.meta.glob('../assets/crazy_21/*.jpg')
const safariImages = import.meta.glob('../assets/safari/*.jpg')
const meetImages = import.meta.glob('../assets/meet/*.jpg')
const artImages = import.meta.glob('../assets/art/*.jpg')

function createImageArray(images: Record<string, ()=>Promise<unknown>>): ImgDes[] {
    return Object.keys(images).map((key) => { 
        return {
        src: "src"+key.slice(2),
        des: "",
    }});
}

export const GERMANY22: ImgDes[] = createImageArray(germanyImages);
export const EILAT24: ImgDes[] = createImageArray(eilat24Images);
export const EILAT21: ImgDes[] = createImageArray(eilat21Images);
export const NORTH23: ImgDes[] = createImageArray(north23Images);
export const NORTH21: ImgDes[] = createImageArray(north21Images);
export const EILAT_ZUKIM: ImgDes[] = createImageArray(eilat_zukimImages);
export const CRAZY_23: ImgDes[] = createImageArray(crazy_23Images);
export const CRAZY_24: ImgDes[] = createImageArray(crazy_24Images);
export const CRAZY_20: ImgDes[] = createImageArray(crazy_20Images);
export const CRAZY_22: ImgDes[] = createImageArray(crazy_22Images);
export const CRAZY_21: ImgDes[] = createImageArray(crazy_21Images);
export const SAFARI: ImgDes[] = createImageArray(safariImages);
export const MEET: ImgDes[] = createImageArray(meetImages);
export const ART: ImgDes[] = createImageArray(artImages);

const IMAGE_PROVIDER={
    GERMANY22:GERMANY22,
    EILAT24:EILAT24,
    EILAT21:EILAT21,
    NORTH23:NORTH23,
    NORTH21:NORTH21,
    EILAT_ZUKIM:EILAT_ZUKIM,
    CRAZY_20:CRAZY_20,
    CRAZY_21:CRAZY_21,
    CRAZY_22:CRAZY_22,
    CRAZY_23:CRAZY_23,
    CRAZY_24:CRAZY_24,
    SAFARI:SAFARI,
    MEET:MEET,
    ART:ART
}
console.log(JSON.stringify(IMAGE_PROVIDER))
export default IMAGE_PROVIDER