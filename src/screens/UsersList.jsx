import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import { connect } from 'react-redux'
import CircularProgress from '@material-ui/core/CircularProgress'

import UserCard from '../components/UserCard'
import { fetchUsers } from '../actions'

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        display: 'flex',
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        margin: theme.spacing.unit,
    },
    usersList: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    loadingCircular: {
        alignSefl: 'center'
    }
});

class UsersList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: false,
        }

        this.renderUsersCard = this.renderUsersCard.bind(this)
    }
    componentDidMount() {
        this.setState({ isLoading: true });
        this.props.fetchUsers()
    }

    renderUsersCard() {
        if (this.props.users.length > 0) {
            return this.props.users.map(user => {
                return (
                    <UserCard
                        user={user}
                        key={user.id}
                    />
                )
            })
        }
        else {
            return  <CircularProgress classes={this.props.classes.loadingCircular} color="primary" thickness={5} />
        }
    }

    render() {
        const { classes } = this.props;
        return (
            <Paper className={classes.root} elevation={1}>
                <div className={classes.usersList}>
                    {this.renderUsersCard()}
                </div>
            </Paper>
        );
    }
}

function mapStateToProps(state) {
    return {
        users: state.users,
    }
}

export default connect(mapStateToProps, { fetchUsers })(withStyles(styles)(UsersList));