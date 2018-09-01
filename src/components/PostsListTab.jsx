import React, { Component } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import { withStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions/index'
import PostCard from './PostCard'
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const styles = theme => ({
    scrollContainer: {
        flex: 1,
        overFlow: 'auto',
        overflowY: 'scroll'
    },
    containerList: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        flex: 1
    },
})

class PostsList extends Component {
    state = {
        isLoading: true
    }

    componentDidMount() {
        const userId = this.props.match.params.id;
        this.props.fetchPosts(userId, () => this.setState({ isLoading: false }))
    }

    renderPosts() {
        return this.props.posts.map(post => <PostCard post={post} />)
    }

    renderLoading() {
        return (
            <CircularProgress color="primary" thickness={5} />
        );
    }

    render() {
        const { classes } = this.props
        return (
            <div className={classes.scrollContainer}>
                <div className={classes.containerList}>
                    {
                        (!this.state.isLoading && this.props.posts.length > 0) ?
                            this.renderPosts() : this.renderLoading()
                    }
                    <Button style={{position: 'fixed', bottom: 30, right: 30}}variant="fab" color="primary" aria-label="Add" className={classes.button}>
                        <AddIcon />
                    </Button>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps, { fetchPosts })(withStyles(styles)(PostsList))