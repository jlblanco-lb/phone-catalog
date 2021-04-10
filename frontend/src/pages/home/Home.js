import React from "react";
import {getPhones} from "../../api/api";
import {useEffect, useState} from "react";
import './Home.css';
import {CircularProgress, Container, Fab, Grid} from "@material-ui/core";
import PhoneBox from "../../components/phone/PhoneBox";
import {Alert} from "@material-ui/lab";
import {Link} from "react-router-dom";
import AddIcon from '@material-ui/icons/Add';

const Home = () => {
    const [phones, setPhones] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const loadPhones = () => {
        getPhones()
            .then((response) => {
                setPhones(response);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const emptyDashboard = () => {
        return (
            <Grid item xs={12}>
                <Grid item xs={12}>
                    <Alert severity="info">
                        It seems that the <b>Catalog</b> is empty!
                        Try creating something.
                    </Alert>
                </Grid>
                <Grid item xs={12}
                      container
                      spacing={0}
                      direction="column"
                      alignItems="center"
                      justify="center"
                >
                    <Link className="dashboard-add-phone-link" to={`/phones/create`}>
                        <Fab color="primary" aria-label="add">
                            <AddIcon />
                        </Fab>
                    </Link>
                </Grid>
            </Grid>
        )
    }

    useEffect(() => {
        loadPhones();
    }, []);

    if (isLoading) {
        return (
            <div>
                <Alert severity="info">Loading data...</Alert>
                <div className="loading-spinner">
                    <CircularProgress className="loading-spinner" disableShrink />
                </div>
            </div>
        );
    } else {
        return (
            <Container fixed className="phone-container">
                <Grid container spacing={3}>
                    {phones.map((phone, i) => (
                        <Grid key={i} item xs={12} sm={6} md={4} lg={3} xl={3}>
                            <PhoneBox phone={phone}/>
                        </Grid>
                    ))}
                    {!(phones.length) ? emptyDashboard():''}
                </Grid>
            </Container>
        );
    }
};

export default Home;
