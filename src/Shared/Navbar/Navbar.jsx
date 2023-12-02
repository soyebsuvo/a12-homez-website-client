import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';
import logo from "../../assets/header-logo.svg"
import logo2 from "../../assets/header-logo2.svg"
import { FaBars } from "react-icons/fa";
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider/AuthProvider';
import MyButton from './MyButton';


// const pages = ['Home', 'All Properties', 'Dashboard'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Navbar() {
    const { user , logOut } = useContext(AuthContext);
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const handleLogout = () => {
        logOut().then().catch(err => console.log(err))
    }
    const location = useLocation();
    let isHome = true;
    if (location.pathname === '/' || location.pathname === '/allproperties') {
        isHome = true;
    } else {
        isHome = false;
    }
    return (
        <div className='max-w-7xl mx-auto'>
            <AppBar className='md:px-16' sx={isHome ? { background: "none", color: "black", boxShadow: 'none' } : { background: "none", color: "black", boxShadow: '0,0,4,black' }} position={isHome ? `absolute` : `static`}>
                <Container>
                    <Toolbar disableGutters>

                        {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
                        <div className=''>
                            <Typography
                                variant="h6"
                                noWrap
                                component="a"
                                sx={{
                                    mr: 2,
                                    display: { xs: 'none', md: 'flex', gap: 0 },
                                    fontFamily: 'monospace',
                                    fontWeight: 700,
                                    // letterSpacing: '.3rem',
                                    color: 'inherit',
                                    textDecoration: 'none',
                                }}
                            >
                                {isHome ? <img className='w-32 z-10' src={logo} alt="" /> : <img className='w-32 z-10' src={logo2} alt="" />}
                            </Typography>
                        </div>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>

                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="white"
                                className='z-20'
                            >
                                {/* <MenuIcon /> */}
                                <FaBars className='text-white'></FaBars>
                            </IconButton>
                            <Menu
                                color=''
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                <NavLink to="/">
                                    <Button
                                        onClick={handleCloseNavMenu}
                                        sx={{ color: 'black', display: 'block', fontWeight: "bold" }}
                                    >
                                        Home
                                    </Button>
                                </NavLink>
                                <NavLink to="/allproperties">
                                    <Button
                                        onClick={handleCloseNavMenu}
                                        sx={{ color: 'black', display: 'block', fontWeight: "bold" }}
                                    >
                                        All Properties
                                    </Button>
                                </NavLink>
                                <NavLink to="/dashboard">
                                    <Button
                                        onClick={handleCloseNavMenu}
                                        sx={{ color: 'black', display: 'block', fontWeight: "bold" }}
                                    >
                                        Dashboard
                                    </Button>
                                </NavLink>
                            </Menu>
                        </Box>
                        {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            <img className='w-32 z-10' src={logo} alt="" />
                        </Typography>
                        <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 2, marginLeft: "40px" }}>
                            <NavLink to="/">
                                <Button
                                    onClick={handleCloseNavMenu}
                                    sx={isHome ? { my: 2, color: 'white', display: 'block', fontWeight: "bold" } : { my: 2, color: 'black', display: 'block', fontWeight: "bold" }}
                                >
                                    Home
                                </Button>
                            </NavLink>
                            <NavLink to="/allproperties">
                                <Button
                                    onClick={handleCloseNavMenu}
                                    sx={isHome ? { my: 2, color: 'white', display: 'block', fontWeight: "bold" } : { my: 2, color: 'black', display: 'block', fontWeight: "bold" }}
                                >
                                    All Properties
                                </Button>
                            </NavLink>
                            <NavLink to="/dashboard">
                                <Button
                                    onClick={handleCloseNavMenu}
                                    sx={isHome ? { my: 2, color: 'white', display: 'block', fontWeight: "bold" } : { my: 2, color: 'black', display: 'block', fontWeight: "bold" }}
                                >
                                    Dashboard
                                </Button>
                            </NavLink>
                        </Box>

                        {user ? <Box sx={{ flexGrow: 0, marginLeft: "30px" }}>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    {/* <Avatar alt="Remy Sharp" src={user?.photoURL} /> */}
                                    <img className='w-10 h-10 rounded-full z-20' src={user?.photoURL} alt="" />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {/* {settings.map((setting) => (
                                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                        <Typography textAlign="center">{setting}</Typography>
                                    </MenuItem>
                                ))} */}

                                <Link to="/"><MenuItem onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">Profile</Typography>
                                </MenuItem></Link>
                                <MenuItem onClick={handleCloseUserMenu}>
                                    <Typography onClick={handleLogout} textAlign="center">Logout</Typography>
                                </MenuItem>

                            </Menu>
                        </Box> : <Link to="/login"><MyButton variant="contained">Login</MyButton></Link>}
                    </Toolbar>
                </Container>
            </AppBar></div>
    );
}
export default Navbar;