import React, {useEffect, useState} from "react";
import {getPhone} from "../../api/api";
import PhoneBox from "./PhoneBox";
import {CircularProgress, Container} from "@material-ui/core";
import Header from "../nav/NavBar";
import {Alert} from "@material-ui/lab";
import {Redirect} from "react-router-dom";

const Show = (props) => {
    const [phone, setPhone] = useState({});
    const [isLoading, setLoading] = useState(true);

    const loadPhone = (id) => {
        getPhone(id)
            .then((response) => {
                setPhone(response);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        const id = props.match.params.id;
        loadPhone(id);
    }, [props]);

    if(isLoading) {
        return (
            <div>
                <Alert severity="info">Loading data...</Alert>
                <div className="loading-spinner">
                    <CircularProgress className="loading-spinner" disableShrink />
                </div>
            </div>
        )
    } else {
        if (!phone) {
            return (
                <Redirect to={'/not-found'}/>
            )
        } else {
            return (
                <div className="PhoneDescriptionPage">
                    <Header/>
                    <Container fixed className="phone-container" maxWidth="xs">
                        <PhoneBox phone={phone} full={true}/>
                    </Container>
                </div>
            );
        }
    }
};

export default Show;