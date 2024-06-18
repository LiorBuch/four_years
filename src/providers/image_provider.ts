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


export const GERMANY22: ImgDes[] = []
for (const img in germanyImages) {
    GERMANY22.push({src:("src"+img.slice(2)),des:""})
}

export const CRAZY_24: ImgDes[] = []
for (const img in crazy_24Images) {
    CRAZY_24.push({src:("src"+img.slice(2)),des:""})
}
export const CRAZY_22: ImgDes[] = []
for (const img in crazy_22Images) {
    CRAZY_22.push({src:("src"+img.slice(2)),des:""})
}
export const CRAZY_21: ImgDes[] = []
for (const img in crazy_21Images) {
    CRAZY_21.push({src:("src"+img.slice(2)),des:""})
}
export const CRAZY_20: ImgDes[] = []
for (const img in crazy_20Images) {
    CRAZY_20.push({src:("src"+img.slice(2)),des:""})
}
export const NORTH23: ImgDes[] = []
for (const img in north23Images) {
    NORTH23.push({src:("src"+img.slice(2)),des:""})
}
export const NORTH21: ImgDes[] = []
for (const img in north21Images) {
    NORTH21.push({src:("src"+img.slice(2)),des:""})
}
export const EILAT24: ImgDes[] = []
for (const img in eilat24Images) {
    EILAT24.push({src:("src"+img.slice(2)),des:""})
}
export const EILAT21: ImgDes[] = []
for (const img in eilat21Images) {
    EILAT21.push({src:("src"+img.slice(2)),des:""})
}
export const EILAT_ZUKIM: ImgDes[] = []
for (const img in eilat_zukimImages) {
    EILAT_ZUKIM.push({src:("src"+img.slice(2)),des:""})
}
export const CRAZY_23: ImgDes[] = []
for (const img in crazy_23Images) {
    CRAZY_23.push({src:("src"+img.slice(2)),des:""})
}
export const SAFARI: ImgDes[] = []
for (const img in safariImages) {
    SAFARI.push({src:("src"+img.slice(2)),des:""})
}
export const MEET: ImgDes[] = []
for (const img in meetImages) {
    MEET.push({src:("src"+img.slice(2)),des:""})
}
export const ART: ImgDes[] = []
for (const img in artImages) {
    ART.push({src:("src"+img.slice(2)),des:""})
}