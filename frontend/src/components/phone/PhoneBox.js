import React from 'react';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {Grid, Paper} from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import './PhoneBox.css';
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from '@material-ui/icons/Delete';
import {ArrowBackRounded} from "@material-ui/icons";
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import {deletePhone} from "../../api/api";

const PhoneBox = ({ phone, full }) => {
    const history = useHistory();

    const delPhone = (id) => {
        deletePhone(id)
            .then((response) => {
                history.goBack();
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const actionsInfo = () => {
        return (
            <div className="phone-box-actions-button-wrapper">
                <Link to={'/'} >
                    <IconButton color="default" aria-label="back">
                        <ArrowBackRounded />
                    </IconButton>
                </Link>
                <Link to={`/phones/update/${phone['id']}`} >
                    <IconButton color="primary" aria-label="edit">
                        <EditRoundedIcon />
                    </IconButton>
                </Link>
                <div onClick={() => {
                    if (window.confirm('Are you sure you wish to delete this item?')) delPhone(phone.id)
                }}>
                    <IconButton color="secondary" aria-label="delete">
                        <DeleteIcon />
                    </IconButton>
                </div>
            </div>
        )
    }

    return (
        <Paper elevation={3} className="phone-box" >
            <Link className="phone-box-item-link" to={`/phones/show/${phone['id']}`}>
                <CardActionArea >
                    <CardMedia
                        component="img"
                        alt={`${phone['name']}`}
                        image={`${phone['imageFileName']}`}
                        title={`${phone['name']}`}
                    />
                        {full ? (
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {phone['name']}
                                </Typography>
                                <Typography variant="body1" color="textSecondary" component="p" align="center">
                                    {phone['description']}
                                </Typography>
                            </CardContent>
                        ):(
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2" align="center">
                                    {phone['name']}
                                </Typography>
                                <Typography variant="body1" color="textPrimary" component="p" align="center">
                                    {phone['price']} €
                                </Typography>
                            </CardContent>
                        )}
                </CardActionArea>
            </Link>
                {full? (
                    <div>
                        <CardContent>
                            <Grid container spacing={3}>
                                <Grid item align="center" xs={12}>
                                    <span className="phone-box-item-manufacturer">{phone['manufacturer']}</span>
                                </Grid>
                                <Grid item xs={6} sm={4}>
                                    Price: <Typography className="phone-box-item-price" display="block" gutterBottom>{phone['price']}€</Typography>
                                </Grid>
                                <Grid item xs={6} sm={4}>
                                    Color: <Typography variant="caption" display="block" gutterBottom>{phone['color']}</Typography>
                                </Grid>
                                <Grid item xs={6} sm={4}>
                                    Screen size: <Typography variant="caption" display="block" gutterBottom>{phone['screen']}</Typography>
                                </Grid>
                                <Grid item xs={6} sm={4}>
                                    Processor: <Typography variant="caption" display="block" gutterBottom>{phone['processor']}</Typography>
                                </Grid>
                                <Grid item xs={6} sm={4}>
                                    Ram: <Typography variant="caption" display="block" gutterBottom>{phone['ram']} MB</Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                        <CardActions className="phone-box-actions">
                            {actionsInfo()}
                        </CardActions>
                    </div>
                ):(
                    []
                )}
        </Paper>
    );
}

export default PhoneBox;