import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    card: {
        margin: theme.spacing.unit,
        width: 400,
        heigth: 350
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        marginBottom: 16,
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

function UserCard(props) {
    const { classes } = props;
    const { id, name, username, email} = props.user;
    
    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography variant="headline" component="h2">
                    {name}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    {`@${username}`}
                </Typography>
                <Typography component="p">
                    {email}
                </Typography>
            </CardContent>
            <CardActions >
                <Button className={classes.actionButton} color="secondary" size="small">Detail Profile</Button>
            </CardActions>
        </Card>
    );
}

export default withStyles(styles)(UserCard);