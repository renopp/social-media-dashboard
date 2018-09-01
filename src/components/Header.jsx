import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { ViewListOutlined } from '@material-ui/icons';

const styles = (theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
        marginLeft: 10
    },
    rightIcon: {
        marginLeft: theme.spacing.unit,
    }
});

function Header(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="title" color="inherit" className={classes.title}>
                        Social Media Dashboard
                    </Typography>
                    <Button variant="contained" color="secondary" >
                        Users List
                        <ViewListOutlined className={classes.rightIcon} />
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);