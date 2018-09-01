import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Edit, Delete } from '@material-ui/icons';
import { connect } from 'react-redux'
import { deletePost, fetchPosts } from '../actions/index'

const styles = theme => ({
    card: {
        margin: theme.spacing.unit,
        flex: 1,
        heigth: 350
    },
    pos: {
        marginBottom: 12,
    },
    rightIcon: {
        marginLeft: theme.spacing.unit,
    }
});

async function handleDelete(props) {
    await props.deletePost(props.post.id)
    props.fetchPosts(props.post.userId)
}

function PostCard(props) {
    const { classes } = props

    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography variant="headline" component="h2">
                    {props.post.title}
                </Typography>
                <Typography component="p">
                    {props.post.body.split(/\\n|\n/).map((item, key) => {
                        return (
                            <span key={key}>
                                {item}
                                <br />
                            </span>
                        );
                    })}
                </Typography>
            </CardContent>
            <CardActions >
                <Button className={classes.actionButton} color="secondary" size="small">
                    Detail Post
                </Button>
                <Button className={classes.actionButton} color="yellow" size="small">
                    edit Post
                    <Edit className={classes.rightIcon} />
                </Button>
                <Button onClick={() => handleDelete(props)} className={classes.actionButton} color="danger" size="small">
                    delete Post
                    <Delete className={classes.rightIcon} />
                </Button>
            </CardActions>
        </Card>
    );
}

export default connect(null, { deletePost, fetchPosts })(withStyles(styles)(PostCard));