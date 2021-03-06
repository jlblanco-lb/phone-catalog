import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from "react-router-dom";
import './NavBar.css';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        textAlign: 'center',
        textDecoration: 'none',
        color: 'white'
    },
}));

export default function NavBar() {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div id="nav-bar-main-menu" className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton id="toggle-menu-button" edge="start" className={classes.menuButton} color="inherit" aria-label="menu" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                        <MenuIcon />
                    </IconButton>
                    <Typography id="nav-bar-main-menu-center" className={classes.title} component={Link} to="/" variant="h6">
                        Phone Catalog
                    </Typography>
                </Toolbar>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    className="main-nav-bar-wrapper"
                >
                    <MenuItem onClick={handleClose}>
                        <Link to="/">Dashboard</Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <Link to="/phones/create">Add new phone</Link>
                    </MenuItem>
                </Menu>
            </AppBar>
        </div>
    );
}
