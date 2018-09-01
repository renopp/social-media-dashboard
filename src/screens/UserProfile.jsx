import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'
import { connect } from 'react-redux'

import UserDetailInfo from '../components/UserDetailInfo'
import PostAndAlbumTab from '../components/PostsAndAlbumsTabs'
import { fetchUser } from '../actions/index'

const styles = theme => ({
    container: {
        display: 'flex',
        flexDirection: 'row'
    },
    userDetailInfo: {
        width: '200px'
    },
    postAndAlbumTab: {
        flex: 1
    }
});

class UserProfile extends Component {

    state = {
        isLoading: true,
    }

    componentDidMount() {
        const { location, history } = this.props;
        if (!this.props.match.params.page) {
            history.replace(location.pathname + '/posts');
        }
        this.props.fetchUser(this.props.match.params.id, () => this.setState({ isLoading: false }))
    }

    renderLoading() {
        return (
            <CircularProgress color="primary" thickness={5} />
        );
    }

    render() {
        const { classes } = this.props
        return (
            <div className={classes.container}>
                <div style={{ display: 'flex' }}>
                    {
                        (!this.state.isLoading && this.props.user.id) ?
                            <UserDetailInfo user={this.props.user} /> : this.renderLoading()
                    }
                </div>
                <div style={{ flex: 1, overflowY: 'auto' }}>
                    <PostAndAlbumTab {...this.props} />
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.user,
    }
}



export default connect(mapStateToProps, { fetchUser })(withStyles(styles)(UserProfile))