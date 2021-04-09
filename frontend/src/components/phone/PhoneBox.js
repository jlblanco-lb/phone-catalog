import React from 'react';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {Button, Paper} from "@material-ui/core";
import './PhoneBox.css';
import IconButton from "@material-ui/core/IconButton";
import InfoIconSharp from "@material-ui/icons/InfoSharp";

const PhoneBox = ({ phone }) => {

    return (
        <Paper elevation={3} className="phone-box" >
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt={`$phone['name']`}
                    height="140"
                    image={`${phone['imageFileName']}`}
                    title="`{phone['name']}`"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {phone['name']}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {phone['description']}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className="phone-box-actions">
                <Button size="small" color="primary">
                    More info
                </Button>
            </CardActions>
        </Paper>
    );
}

export default PhoneBox;