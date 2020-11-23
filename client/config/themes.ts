import { createMuiTheme } from '@material-ui/core/styles';

export const themes: any = {
    default: {
        palette: {
            primary: { main: '#d5efff' },
            secondary: { main: '#1b87b1' },
        },
        themeName: 'dark',
    },
};

export const theme = createMuiTheme({
    palette: themes.default.palette,
});
