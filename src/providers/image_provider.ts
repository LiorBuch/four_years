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

function createImageArray(images: Record<string, () => Promise<unknown>>): ImgDes[] {
    return Object.keys(images).map((key) => {
        return {
            src: "https://github.com/LiorBuch/four_years/blob/main/public" + key.slice(2) + "?raw=true",
            des: "",
        }
    });
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

const IMAGE_PROVIDER_OLD = {
    GERMANY22: GERMANY22,
    EILAT24: EILAT24,
    EILAT21: EILAT21,
    NORTH23: NORTH23,
    NORTH21: NORTH21,
    EILAT_ZUKIM: EILAT_ZUKIM,
    CRAZY_20: CRAZY_20,
    CRAZY_21: CRAZY_21,
    CRAZY_22: CRAZY_22,
    CRAZY_23: CRAZY_23,
    CRAZY_24: CRAZY_24,
    SAFARI: SAFARI,
    MEET: MEET,
    ART: ART
}
console.log(JSON.stringify(IMAGE_PROVIDER_OLD))

const IMAGE_PROVIDER = {"GERMANY22":[{"src":"https://github.com/LiorBuch/four_years/blob/main/public/assets/germany_22/20221202_140305.jpg?raw=true","des":""},{"src":"https://github.com/LiorBuch/four_years/blob/main/public/assets/germany_22/20221202_163821.jpg?raw=true","des":""},{"src":"https://github.com/LiorBuch/four_years/blob/main/public/assets/germany_22/20221202_163829.jpg?raw=true","des":""},{"src":"https://github.com/LiorBuch/four_years/blob/main/public/assets/germany_22/20221202_165421.jpg?raw=true","des":""},{"src":"https://github.com/LiorBuch/four_years/blob/main/public/assets/germany_22/20221203_172332.jpg?raw=true","des":""},{"src":"https://github.com/LiorBuch/four_years/blob/main/public/assets/germany_22/20221203_200232.jpg?raw=true","des":""},{"src":"https://github.com/LiorBuch/four_years/blob/main/public/assets/germany_22/20221205_152412.jpg?raw=true","des":""},{"src":"https://github.com/LiorBuch/four_years/blob/main/public/assets/germany_22/20221206_095216.jpg?raw=true","des":""},{"src":"https://github.com/LiorBuch/four_years/blob/main/public/assets/germany_22/20221207_120837.jpg?raw=true","des":""},{"src":"https://github.com/LiorBuch/four_years/blob/main/public/assets/germany_22/20221207_140310.jpg?raw=true","des":""},{"src":"https://github.com/LiorBuch/four_years/blob/main/public/assets/germany_22/20221207_162734.jpg?raw=true","des":""}],"EILAT24":[{"src":"https://github.com/LiorBuch/four_years/blob/main/public/assets/eilat_24/20240609_151040.jpg?raw=true","des":""},{"src":"https://github.com/LiorBuch/four_years/blob/main/public/assets/eilat_24/20240609_154150.jpg?raw=true","des":""},{"src":"https://github.com/LiorBuch/four_years/blob/main/public/assets/eilat_24/20240609_181134.jpg?raw=true","des":""},{"src":"https://github.com/LiorBuch/four_years/blob/main/public/assets/eilat_24/20240609_230832.jpg?raw=true","des":""},{"src":"https://github.com/LiorBuch/four_years/blob/main/public/assets/eilat_24/20240610_203211.jpg?raw=true","des":""},{"src":"https://github.com/LiorBuch/four_years/blob/main/public/assets/eilat_24/IMG-20240618-WA0019.jpg?raw=true","des":""},{"src":"https://github.com/LiorBuch/four_years/blob/main/public/assets/eilat_24/IMG-20240618-WA0020.jpg?raw=true","des":""},{"src":"https://github.com/LiorBuch/four_years/blob/main/public/assets/eilat_24/IMG-20240618-WA0023.jpg?raw=true","des":""},{"src":"https://github.com/LiorBuch/four_years/blob/main/public/assets/eilat_24/IMG-20240618-WA0024.jpg?raw=true","des":""},{"src":"https://github.com/LiorBuch/four_years/blob/main/public/assets/eilat_24/IMG-20240618-WA0029.jpg?raw=true","des":""},{"src":"https://github.com/LiorBuch/four_years/blob/main/public/assets/eilat_24/IMG-20240618-WA0031.jpg?raw=true","des":""},{"src":"https://github.com/LiorBuch/four_years/blob/main/public/assets/eilat_24/IMG-20240618-WA0038.jpg?raw=true","des":""},{"src":"https://github.com/LiorBuch/four_years/blob/main/public/assets/eilat_24/IMG-20240618-WA0040.jpg?raw=true","des":""}],"EILAT21":[{"src":"https://github.com/LiorBuch/four_years/blob/main/public/assets/eilat_21/20210909_203251.jpg?raw=true","des":""},{"src":"https://github.com/LiorBuch/four_years/blob/main/public/assets/eilat_21/20210910_180424.jpg?raw=true","des":""},{"src":"https://github.com/LiorBuch/four_years/blob/main/public/assets/eilat_21/20210911_115822.jpg?raw=true","des":""},{"src":"https://github.com/LiorBuch/four_years/blob/main/public/assets/eilat_21/20210911_133353.jpg?raw=true","des":""}],"NORTH23":[{"src":"https://github.com/LiorBuch/four_years/blob/main/public/assets/north_23/20230616_115318.jpg?raw=true","des":""},{"src":"https://github.com/LiorBuch/four_years/blob/main/public/assets/north_23/20230616_153343.jpg?raw=true","des":""},{"src":"https://github.com/LiorBuch/four_years/blob/main/public/assets/north_23/20230616_153353.jpg?raw=true","des":""},{"src":"https://github.com/LiorBuch/four_years/blob/main/public/assets/north_23/20230616_153401.jpg?raw=true","des":""},{"src":"https://github.com/LiorBuch/four_years/blob/main/public/assets/north_23/20230616_154216.jpg?raw=true","des":""},{"src":"https://github.com/LiorBuch/four_years/blob/main/public/assets/north_23/20230616_164641.jpg?raw=true","des":""},{"src":"https://github.com/LiorBuch/four_years/blob/main/public/assets/north_23/20230617_111929.jpg?raw=true","des":""},{"src":"https://github.com/LiorBuch/four_years/blob/main/public/assets/north_23/20230617_145431.jpg?raw=true","des":""}],"NORTH21":[{"src":"https://github.com/LiorBuch/four_years/blob/main/public/assets/north_21/20210611_160250.jpg?raw=true","des":""},{"src":"https://github.com/LiorBuch/four_years/blob/main/public/assets/north_21/20210611_185655.jpg?raw=true","des":""},{"src":"https://github.com/LiorBuch/four_years/blob/main/public/assets/north_21/20210612_123932.jpg?raw=true","des":""},{"src":"https://github.com/LiorBuch/four_years/blob/main/public/assets/north_21/20210612_140324.jpg?raw=true","des":""},{"src":"https://github.com/LiorBuch/four_years/blob/main/public/assets/north_21/20210612_141256.jpg?raw=true","des":""},{"src":"https://github.com/LiorBuch/four_years/blob/main/public/assets/north_21/20210612_201423.jpg?raw=true","des":""},{"src":"https://github.com/LiorBuch/four_years/blob/main/public/assets/north_21/20210613_105852.jpg?raw=true","des":""},{"src":"https://github.com/LiorBuch/four_years/blob/main/public/assets/north_21/20210613_124323.jpg?raw=true","des":""},{"src":"https://github.com/LiorBuch/four_years/blob/main/public/assets/north_21/IMG-20210614-WA0172.jpg?raw=true","des":""}],"EILAT_ZUKIM":[{"src":"https://github.com/LiorBuch/four_years/blob/main/public/assets/eilat_zukim/20220910_134422.jpg?raw=true","des":""},{"src":"https://github.com/LiorBuch/four_years/blob/main/public/assets/eilat_zukim/20220911_121839.jpg?raw=true","des":""},{"src":"https://github.com/LiorBuch/four_years/blob/main/public/assets/eilat_zukim/20220923_092052.jpg?raw=true","des":""},{"src":"https://github.com/LiorBuch/four_years/blob/main/public/assets/eilat_zukim/20220923_180759.jpg?raw=true","des":""}],"CRAZY_20":[{"src":"https://github.com/LiorBuch/four_years/blob/main/public/assets/crazy_20/IMG_20201128_123749.jpg?raw=true","des":""},{"src":"https://github.com/LiorBuch/four_years/blob/main/public/assets/crazy_20/IMG_20201211_170751.jpg?raw=true","des":""},{"src":"https://github.com/LiorBuch/four_years/blob/main/public/assets/crazy_20/IMG_20201225_180023.jpg?raw=true","des":""}],"CRAZY_21":[{"src":"https://github.com/LiorBuch/four_years/blob/main/public/assets/crazy_21/IMG_20210313_161524.jpg?raw=true","des":""},{"src":"https://github.com/LiorBuch/four_years/blob/main/public/assets/crazy_21/IMG_20210326_175608.jpg?raw=true","des":""},{"src":"https://github.com/LiorBuch/four_years/blob/main/public/assets/crazy_21/IMG_20210407_105722.jpg?raw=true","des":""},{"src":"https://github.com/LiorBuch/four_years/blob/main/public/assets/crazy_21/IMG_20210418_095604.jpg?raw=true","des":""},{"src":"https://github.com/LiorBuch/four_years/blob/main/public/assets/crazy_21/IMG_20210501_000015.jpg?raw=true","des":""},{"src":"https://github.com/LiorBuch/four_years/blob/main/public/assets/crazy_21/IMG_20210507_152008.jpg?raw=true","des":""},{"src":"https://github.com/LiorBuch/four_years/blob/main/public/assets/crazy_21/IMG_20210507_165204.jpg?raw=true","des":""},{"src":"https://github.com/LiorBuch/four_years/blob/main/public/assets/crazy_21/IMG_20210508_164245.jpg?raw=true","des":""}],"CRAZY_22":[],"CRAZY_23":[{"src":"https://github.com/LiorBuch/four_years/blob/main/public/assets/crazy_23/20230728_230910.jpg?raw=true","des":""},{"src":"https://github.com/LiorBuch/four_years/blob/main/public/assets/crazy_23/20231202_144424.jpg?raw=true","des":""},{"src":"https://github.com/LiorBuch/four_years/blob/main/public/assets/crazy_23/20231202_181304.jpg?raw=true","des":""},{"src":"https://github.com/LiorBuch/four_years/blob/main/public/assets/crazy_23/20231222_221844.jpg?raw=true","des":""},{"src":"https://github.com/LiorBuch/four_years/blob/main/public/assets/crazy_23/20231230_144011.jpg?raw=true","des":""},{"src":"https://github.com/LiorBuch/four_years/blob/main/public/assets/crazy_23/20231230_144047.jpg?raw=true","des":""},{"src":"https://github.com/LiorBuch/four_years/blob/main/public/assets/crazy_23/20231230_144058.jpg?raw=true","des":""}],"CRAZY_24":[{"src":"https://github.com/LiorBuch/four_years/blob/main/public/assets/crazy_24/IMG-20240618-WA0060.jpg?raw=true","des":""},{"src":"https://github.com/LiorBuch/four_years/blob/main/public/assets/crazy_24/IMG-20240618-WA0061.jpg?raw=true","des":""},{"src":"https://github.com/LiorBuch/four_years/blob/main/public/assets/crazy_24/IMG-20240618-WA0062.jpg?raw=true","des":""},{"src":"https://github.com/LiorBuch/four_years/blob/main/public/assets/crazy_24/IMG-20240618-WA0063.jpg?raw=true","des":""},{"src":"https://github.com/LiorBuch/four_years/blob/main/public/assets/crazy_24/IMG-20240618-WA0064.jpg?raw=true","des":""},{"src":"https://github.com/LiorBuch/four_years/blob/main/public/assets/crazy_24/IMG-20240618-WA0065.jpg?raw=true","des":""},{"src":"https://github.com/LiorBuch/four_years/blob/main/public/assets/crazy_24/IMG-20240618-WA0066.jpg?raw=true","des":""},{"src":"https://github.com/LiorBuch/four_years/blob/main/public/assets/crazy_24/IMG-20240618-WA0067.jpg?raw=true","des":""},{"src":"https://github.com/LiorBuch/four_years/blob/main/public/assets/crazy_24/IMG-20240618-WA0068.jpg?raw=true","des":""}],"SAFARI":[{"src":"https://github.com/LiorBuch/four_years/blob/main/public/assets/safari/IMG-20240618-WA0047.jpg?raw=true","des":""},{"src":"https://github.com/LiorBuch/four_years/blob/main/public/assets/safari/IMG-20240618-WA0054.jpg?raw=true","des":""},{"src":"https://github.com/LiorBuch/four_years/blob/main/public/assets/safari/IMG-20240618-WA0057.jpg?raw=true","des":""},{"src":"https://github.com/LiorBuch/four_years/blob/main/public/assets/safari/IMG-20240618-WA0073.jpg?raw=true","des":""},{"src":"https://github.com/LiorBuch/four_years/blob/main/public/assets/safari/IMG-20240618-WA0074.jpg?raw=true","des":""},{"src":"https://github.com/LiorBuch/four_years/blob/main/public/assets/safari/IMG-20240618-WA0075.jpg?raw=true","des":""},{"src":"https://github.com/LiorBuch/four_years/blob/main/public/assets/safari/IMG-20240618-WA0076.jpg?raw=true","des":""},{"src":"https://github.com/LiorBuch/four_years/blob/main/public/assets/safari/IMG-20240618-WA0077.jpg?raw=true","des":""}],"MEET":[{"src":"https://github.com/LiorBuch/four_years/blob/main/public/assets/meet/IMG_20200613_194913.jpg?raw=true","des":""},{"src":"https://github.com/LiorBuch/four_years/blob/main/public/assets/meet/IMG_20200627_182301.jpg?raw=true","des":""},{"src":"https://github.com/LiorBuch/four_years/blob/main/public/assets/meet/IMG_20200627_194233.jpg?raw=true","des":""},{"src":"https://github.com/LiorBuch/four_years/blob/main/public/assets/meet/IMG_20200701_225045.jpg?raw=true","des":""},{"src":"https://github.com/LiorBuch/four_years/blob/main/public/assets/meet/IMG_20200701_225101.jpg?raw=true","des":""},{"src":"https://github.com/LiorBuch/four_years/blob/main/public/assets/meet/IMG_20200801_013632.jpg?raw=true","des":""},{"src":"https://github.com/LiorBuch/four_years/blob/main/public/assets/meet/IMG_20200810_233524_1.jpg?raw=true","des":""},{"src":"https://github.com/LiorBuch/four_years/blob/main/public/assets/meet/IMG_20200903_155913.jpg?raw=true","des":""},{"src":"https://github.com/LiorBuch/four_years/blob/main/public/assets/meet/IMG_20200904_224448.jpg?raw=true","des":""}],"ART":[{"src":"https://github.com/LiorBuch/four_years/blob/main/public/assets/art/IMG-20231225-WA0004.jpg?raw=true","des":""},{"src":"https://github.com/LiorBuch/four_years/blob/main/public/assets/art/IMG-20231225-WA0017.jpg?raw=true","des":""},{"src":"https://github.com/LiorBuch/four_years/blob/main/public/assets/art/IMG-20240122-WA0015.jpg?raw=true","des":""},{"src":"https://github.com/LiorBuch/four_years/blob/main/public/assets/art/IMG-20240122-WA0020.jpg?raw=true","des":""},{"src":"https://github.com/LiorBuch/four_years/blob/main/public/assets/art/IMG-20240123-WA0001.jpg?raw=true","des":""},{"src":"https://github.com/LiorBuch/four_years/blob/main/public/assets/art/IMG-20240218-WA0027.jpg?raw=true","des":""},{"src":"https://github.com/LiorBuch/four_years/blob/main/public/assets/art/IMG-20240305-WA0026.jpg?raw=true","des":""},{"src":"https://github.com/LiorBuch/four_years/blob/main/public/assets/art/IMG-20240305-WA0030.jpg?raw=true","des":""},{"src":"https://github.com/LiorBuch/four_years/blob/main/public/assets/art/IMG-20240306-WA0010.jpg?raw=true","des":""},{"src":"https://github.com/LiorBuch/four_years/blob/main/public/assets/art/IMG-20240315-WA0001.jpg?raw=true","des":""},{"src":"https://github.com/LiorBuch/four_years/blob/main/public/assets/art/IMG-20240413-WA0033.jpg?raw=true","des":""},{"src":"https://github.com/LiorBuch/four_years/blob/main/public/assets/art/IMG-20240520-WA0006.jpg?raw=true","des":""}]}


export default IMAGE_PROVIDER