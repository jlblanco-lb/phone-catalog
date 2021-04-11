import React, {useEffect, useState} from "react";
import { useForm, Controller } from "react-hook-form";
import { useHistory } from "react-router-dom";
import noImage from '../../no_picture.png';
import Header from '../nav/NavBar'
import {
    Button,
    Container,
    FormControl, Grid,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Paper,
    TextField
} from "@material-ui/core";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import CardContent from "@material-ui/core/CardContent";
import {Send} from "@material-ui/icons";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Alert } from '@material-ui/lab';
import {createPhone} from "../../api/api";

const PhoneCreationSchema = yup.object().shape({
    phoneName: yup.string().required('Name is required'),
    manufacturer: yup.string().required('Manufacturer is required'),
    color: yup.string().required('Color is required'),
    screen: yup.string().required('Screen is required'),
    processor: yup.string().required('Processor is required'),
    ram: yup.number().required('RAM is required'),
    description: yup.string().required('Description is required'),
    price: yup.number().required('price is required'),
});

const Create = () => {
    const history = useHistory();
    const [isImageUploaded, setImageUpload] = useState(false);
    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(PhoneCreationSchema)
    });

    const [image, setImage] = useState({
        base64String: "",
        type: "",
        name: ""
    });

    const handleReaderLoaded = (readerEvent) => {
        const base64image = btoa(readerEvent.target.result);
        setImage({...image, base64String: base64image});
    }

    const onSubmit = (data) => {
        if (image.base64String)
            data.imageFileName = "data:" + image.type + ";base64," + image.base64String;
        else
            data.imageFileName = noImage
        createPhone(data)
            .then((response) => {
                history.goBack();
            })
            .catch((error) => {
                console.log(error);
            });
    }

    // Transform image into base64 to store it.
    const onChange = (e) => {
        let file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            setImage({...image, name: file.name, type: file.type})
            reader.onload = handleReaderLoaded.bind(this)
            reader.readAsBinaryString(file)
            setImageUpload(true);
            alert("Image uploaded!");
        }
    }

    useEffect(() => {
        document.title = 'Phone Catalog | Create phone';
    });

    return (
        <div className="PhoneCreationPage">
            <Header/>
            <Container fixed className="phone-container" maxWidth="sm">
                <Paper elevation={3}>
                    <CardContent>
                        <form onSubmit={handleSubmit(onSubmit)} >
                            <Controller
                                name="phoneName"
                                control={control}
                                defaultValue=""
                                render={({ field }) => <TextField
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    label="Name" id="phone-name-autofocus" type="text" variant="outlined" fullWidth margin="normal" autoFocus required={true} {...field} />
                                }
                            />
                            {errors.phoneName && <Alert severity="error">{errors.phoneName.message}</Alert>}
                            <Controller
                                name="manufacturer"
                                control={control}
                                defaultValue=""
                                render={({field}) => <TextField
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    label="Manufacturer" type="text" variant="outlined" fullWidth margin="normal" required={true} {...field} />
                                }
                            />
                            {errors.manufacturer && <Alert severity="error">{errors.manufacturer.message}</Alert>}
                            <Controller
                                name="color"
                                control={control}
                                defaultValue=""
                                render={({field}) => <TextField
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    label="Color" type="text" variant="outlined" fullWidth margin="normal" required={true} {...field}/>
                                }
                            />
                            {errors.color && <Alert severity="error">{errors.color.message}</Alert>}
                            <Controller
                                name="screen"
                                control={control}
                                defaultValue=""
                                render={({field}) => <TextField
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    label="Screen" type="text" variant="outlined" fullWidth margin="normal" required={true} {...field}/>
                                }
                            />
                            {errors.screen && <Alert severity="error">{errors.screen.message}</Alert>}
                            <Controller
                                name="processor"
                                control={control}
                                defaultValue=""
                                render={({field}) => <TextField
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    label="Processor" type="text" variant="outlined" fullWidth margin="normal" required={true} {...field}/>
                                }
                            />
                            {errors.processor && <Alert severity="error">{errors.processor.message}</Alert>}
                            <Controller
                                name="ram"
                                control={control}
                                defaultValue=""
                                render={({field}) => <TextField
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    label="RAM" type="number" variant="outlined" fullWidth margin="normal" required={true} {...field}/>
                                }
                            />
                            {errors.ram && <Alert severity="error">{errors.ram.message}</Alert>}
                            <Controller
                                name="description"
                                control={control}
                                defaultValue=""
                                render={({field}) => <TextField
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    label="Description" type="text" multiline rows={4} variant="outlined" fullWidth margin="normal" required={true} {...field}/>
                                }
                            />
                            {errors.description && <Alert severity="error">{errors.description.message}</Alert>}
                            <FormControl fullWidth variant="outlined" margin="normal" >
                                <InputLabel htmlFor="outlined-adornment-price" required={true} >Price</InputLabel>
                                <Controller
                                    name="price"
                                    control={control}
                                    defaultValue=""
                                    render={({field}) => <OutlinedInput
                                        startAdornment={
                                            <InputAdornment position="start">€</InputAdornment>
                                        }
                                        labelWidth={60} type="number" id="outlined-adornment-price" required={true} {...field}/>
                                    }
                                />
                                {errors.price && <Alert severity="error">{errors.price.message}</Alert>}
                            </FormControl>

                            <input onChange={onChange} accept="image/*" type="file" name="picture" id="phonePicture" hidden />

                            <Grid container spacing={2}>
                                <Grid item xs={12} md={6}>
                                    <FormControl fullWidth variant="outlined" margin="normal">
                                        <label htmlFor="phonePicture">
                                            <Button
                                                variant="contained"
                                                component="span"
                                                size="large"
                                                color={isImageUploaded ? "default" : "primary"}
                                                startIcon={<CloudUploadIcon />}
                                                fullWidth
                                            >
                                                {isImageUploaded ? "Change picture" : "Upload picture"}
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