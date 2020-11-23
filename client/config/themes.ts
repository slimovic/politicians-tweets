import { createMuiTheme } from '@material-ui/core/styles';

export const themes: any = {
    alternative: {
        palette: {
            primary: { main: '#2c6157' },
            secondary: { main: '#6fd056' },
        },
        themeName: 'dark',
    },
};

export const theme = createMuiTheme({
    palette: themes.default.palette,
});
