import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { connect } from 'react-redux'
import { addPost, updatePost, fetchPosts, setEditorTitlePost, setEditorBodyPost, setEditorPostData } from '../actions/index'

import Button from '@material-ui/core/Button';

class PostEditor extends Component {

    handleCloseAndClearTextField() {
        this.props.handleClose()
        this.props.setEditorPostData({ id: 0, title: "", body: "" })
    }

    async handleSave() {
        if(this.props.editorData.id > 0){
            await this.props.updatePost(this.props.userId, this.props.editorData.id, this.props.editorData.title, this.props.editorData.body)
        } else {
            await this.props.addPost(this.props.userId, this.props.editorData.title, this.props.editorData.body)
        }
        this.props.fetchPosts(this.props.userId)
        this.handleCloseAndClearTextField()
    }

    render() {
        return (
            <Dialog
                open={this.props.isOpen}
                onClose={() => this.handleCloseAndClearTextField()}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">{`${this.props.editorData.id > 0 ? 'Edit':'Add'} Post`}</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="title"
                        label="Title"
                        type="text"
                        fullWidth
                        value={this.props.editorData.title}
                        onChange={(event) => this.props.setEditorTitlePost(event.target.value)}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="body"
                        label="Body"
                        type="text"
                        fullWidth
                        value={this.props.editorData.body}
                        onChange={(event) => this.props.setEditorBodyPost(event.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => this.handleCloseAndClearTextField()} color="primary">
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

function mapStateToProps(state) {
    return {
        userId: state.user.id,
        editorData: state.editorPostData
    }
}
export default connect(mapStateToProps, { addPost, updatePost, fetchPosts, setEditorBodyPost, setEditorTitlePost, setEditorPostData })(PostEditor)