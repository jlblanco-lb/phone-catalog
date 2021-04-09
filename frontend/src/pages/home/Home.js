import {getPhones} from "../../api/api";
import {useEffect, useState} from "react";
import './Home.css';
import {CircularProgress, Container, Grid} from "@material-ui/core";
import PhoneBox from "../../components/phone/PhoneBox";

export default function Home() {
    const [phones, setPhones] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [hasError, setError] = useState(false);

    const loadPhones = () => {
        getPhones().then((response) => {
            if (response.error) {
                console.log(response.error);
            } else {
                setPhones(response);
            }
        });
    };

    useEffect(() => {
        loadPhones();
        setLoading(false);
    }, []);

    if (isLoading) {
        console.log("is loading!!");
        return <CircularProgress disableShrink />;
    }

    return (
        <Container fixed className="phone-container">
            <Grid container spacing={3}>
                {phones.map((phone, i) => (
                        <Grid key={i} item xs={12} sm={6} md={4} lg={3} xl={3}>
                            <PhoneBox phone={phone}/>
                        </Grid>
                ))}
            </Grid>
        </Container>
    );
};
