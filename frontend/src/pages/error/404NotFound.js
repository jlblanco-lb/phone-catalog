import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import Header from "../../components/nav/NavBar";
import {Container, Grid, Paper} from "@material-ui/core";
import './404NotFound.css';
import HelpOutlineSharpIcon from '@material-ui/icons/HelpOutlineSharp';

const NotFound = () => {
    useEffect(() => {
        document.title = 'Phone Catalog | Not found';
    });
    return (
        <div className="404NotFound">
            <Header/>
            <Container fixed className="phone-container" maxWidth="sm">
                <Paper className="error404-wrapper" elevation={3}>
                    <Grid container spacing={3}>
                        <Grid item xs={4} align="center">
                            <div className="err">4</div>
                        </Grid>
                        <Grid item xs={4} align="center">
                            <HelpOutlineSharpIcon className="err2"/>
                        </Grid>
                        <Grid item xs={4} align="center">
                            <div className="err3">4</div>
                        </Grid>
                        <Grid item xs={12} align="center">
                            <div className="msg">Maybe this page moved? Got deleted? Is hiding out in quarantine? Never existed
                            in the first place?<p>Let's go <Link to="/">home</Link> and try from there.</p>
                            </div>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </div>
    )
}

export default NotFound;
