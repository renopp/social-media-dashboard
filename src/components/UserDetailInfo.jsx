import React from 'react'

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
    card: {
        margin: theme.spacing.unit,
        width: 300,
        heigth: 350
    },
});

function UserDetailInfo(props) {
    const { classes } = props
    const { name, email, username, phone, website, address, company } = props.user

    return (
        <Card className={classes.card}>
            <CardContent >
                <Typography ariant="headline" component="h2">{name}</Typography>
                <Typography component="p">
                {`@${username}`}
                </Typography>
                <Typography component="p">
                    {email}
                </Typography>
                <Typography component="p">
                    {phone}
                </Typography>
                <Typography component="p">
                    {website}
                </Typography>
                <Typography component="p">
                    {address.city}
                </Typography>
                <Typography component="p">
                    {company.name}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default withStyles(styles)(UserDetailInfo);