import React from "react";
import { useForm, Controller } from "react-hook-form";
import Header from '../nav/NavBar'
import {
    Button,
    Container,
    FormControl, Grid,
    InputAdornment,
    InputLabel,
    makeStyles,
    OutlinedInput,
    Paper,
    TextField
} from "@material-ui/core";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import CardContent from "@material-ui/core/CardContent";
import {Send} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
    input: {
    },
}));

const Create = () => {
    const { control, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    const classes = useStyles();

    return (
        <div className="PhoneCreationPage">
            <Header/>
            <Container fixed className="phone-container" maxWidth="sm">
                <Paper elevation={3}>
                    <CardContent>
                        <form onSubmit={handleSubmit(onSubmit)} >
                            <TextField
                                id="outlined-name"
                                label="Phone name"
                                type="text"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                required={true}
                            />
                            <TextField
                                id="outlined-manufacturer"
                                label="Manufacturer"
                                type="text"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                required={true}
                            />
                            <TextField
                                id="outlined-color"
                                label="Color"
                                type="text"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                required={true}
                            />
                            <TextField
                                id="outlined-screen"
                                label="Screen"
                                type="text"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                required={true}
                            />
                            <TextField
                                id="outlined-processor"
                                label="Processor"
                                type="text"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                required={true}
                            />
                            <TextField
                                id="outlined-ram"
                                label="RAM"
                                type="number"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                required={true}
                            />
                            <TextField
                                id="outlined-desc"
                                label="Description"
                                type="text"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                variant="outlined"
                                multiline
                                rows={4}
                                fullWidth
                                margin="normal"
                                required={true}
                            />
                            <FormControl fullWidth variant="outlined" margin="normal">
                                <InputLabel htmlFor="outlined-adornment-price" required={true}>Price</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-price"
                                    type="number"
                                    startAdornment={<InputAdornment position="start">€</InputAdornment>}
                                    labelWidth={60}
                                    required={true}
                                />
                            </FormControl>
                            <input
                                accept="image/*"
                                className={classes.input}
                                id="icon-button-file"
                                type="file"
                                hidden
                            />
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={6}>
                                    <FormControl fullWidth variant="outlined" margin="normal" required={true}>
                                        <label htmlFor="icon-button-file">
                                            <Button
                                                variant="contained"
                                                component="span"
                                                size="large"
                                                color="primary"
                                                startIcon={<CloudUploadIcon />}
                                                fullWidth
                                            >
                                                Upload picture
                                            </Button>
                                        </label>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <FormControl fullWidth variant="outlined" margin="normal">
                                        <label htmlFor="icon-button-submit">
                                            <Button
                                                type="submit"
                                                variant="contained"
                                                size="large"
                                                color="secondary"
                                                fullWidth
                                                endIcon={<Send />}
                                            >
                                                Create
                                            </Button>
                                        </label>
                                    </FormControl>
                                </Grid>
                            </Grid>
                        </form>
                    </CardContent>
                </Paper>
            </Container>
        </div>
    );
}

export default Create;