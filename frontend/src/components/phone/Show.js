import React, {useEffect, useState} from "react";
import {getPhone} from "../../api/api";
import PhoneBox from "./PhoneBox";
import {Container} from "@material-ui/core";
import Header from "../nav/NavBar";

const Show = (props) => {
    const [phone, setPhone] = useState({});

    const loadPhone = (id) => {
        getPhone(id).then((response) => {
            if (response.error) {
                console.log(response.error);
            } else {
                setPhone(response);
            }
        });
    };

    useEffect(() => {
        const id = props.match.params.id;
        loadPhone(id);
    }, [props]);

    return (
        <div className="PhoneDescription">
            <Header/>
            <Container fixed className="phone-container" maxWidth="xs">
                <PhoneBox phone={phone} full={true}/>
            </Container>
        </div>
    );
};

export default Show;