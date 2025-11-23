// import './mui.css';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

const theme = createTheme({
    palette: {
        primary: { main: '#3b82f6' }, // tailwind blue-500
        secondary: { main: '#f43f5e' }, // tailwind rose-500
    },
});

function MuiRoot() {
    return (
        <ThemeProvider theme={theme}>
            <div className='p-4 bg-gray-100 flex flex-col max-w-sm gap-y-1'>
                <Button variant='outlined' color='primary' className=''>
                    <i className='iconify mdi--abacus text-5xl animate-spin'></i>
                </Button>
                <Button variant='contained' color='primary' className='bg-amber-500!'>
                    MUI Button
                </Button>
                <Button
                    variant='contained'
                    color='primary'
                    className='border-2! border-amber-700! rounded-xl!'
                >
                    MUI Button
                </Button>
            </div>
            <div className='p-4 bg-gray-100'>
                <Typography variant='h4' component='h1'>
                    Header
                </Typography>

                <Typography variant='body1' component='p' className='mt-2'>
                    Regular text inside div
                </Typography>
            </div>
            
        </ThemeProvider>
    );
}

export default MuiRoot;
