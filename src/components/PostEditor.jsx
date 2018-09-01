import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { connect } from 'react-redux'
import { addPost, updatePost, fetchPosts } from '../actions/index'

import DialogContentText from '@material-ui/core/DialogContentText';
import Button from '@material-ui/core/Button';

class PostEditor extends Component {

    state = {
        title: '',
        body: ''
    }

    async handleSave(){
        await this.props.addPost(this.props.userId, this.state.title, this.state.body)
        this.props.fetchPosts(this.props.userId)
        this.props.handleClose()
    }

    componentDidMount(){
        if (this.props.type === 'Edit') {
            this.setState({
                title: this.props.title,
                body: this.props.body
            })
        }
    }

    render() {

        return (
            <Dialog
                open={this.props.isOpen}
                onClose={this.props.handleClose}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">{`${this.props.type} Post`}</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="title"
                        label="Title"
                        type="text"
                        fullWidth
                        value={this.state.title}
                        onChange={(event) => this.setState({ title: event.target.value })}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="body"
                        label="Body"
                        type="text"
                        fullWidth
                        value={this.state.body}
                        onChange={(event) => this.setState({ body: event.target.value })}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.props.handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={() => this.handleSave()} color="primary">
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }
}

function mapStateToProps (state) {
    return {
        userId: state.user.id
    }
}
export default connect(mapStateToProps, { addPost, updatePost, fetchPosts })(PostEditor)