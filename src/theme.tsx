import {createTheme} from "@mantine/core";

export const DESKTOP_THEME = createTheme({

});
export const MOBILE_THEME = createTheme({
    fontSizes:{xs:"0.8em",sm:"0.85em",md:"0.9em",lg:"0.95em",xl:"1em"},
    lineHeights:{xs:"1em",sm:"1.2em",md:"1.4em",lg:"1.6em",xl:"1.8em"},
    spacing:{xs:"0.8em",sm:"1.2em",md:"1.4em",lg:"1.6em",xl:"1.8em"},
    headings:{
        sizes:{
            h1:{fontSize:"34"},
            h2:{fontSize:"32"},
            h3:{fontSize:"30"},
            h4:{fontSize:"28"},
            h5:{fontSize:"26"},
        }
    }
});