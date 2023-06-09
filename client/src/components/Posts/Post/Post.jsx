import React from 'react'
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Box } from '@material-ui/core'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import moment from 'moment'

import useStyles from './styles'
import { useDispatch } from 'react-redux'
import { deletePost, likePost } from '../../../actions/posts';

const Post = ({ post, setCurrentId }) => {
  const classes = useStyles()
  const dispatch = useDispatch()
  return (
    <Card className={classes.card} raised elevation={6}>
      <CardMedia className={classes.media} image={post.selectedFile.base64} title={post.title}/>
      <div className={classes.overlay}>
        <Typography variant='h6'>{post.creator}</Typography>
        <Typography variant='body2'>{moment(post.createdAt).fromNow()}</Typography>
      </div>
      <div className={classes.overlay2}>
          <Button style={{color: 'white'}} size='small' onClick={() => setCurrentId(post._id)}>
            <MoreHorizIcon fontSize='medium'/>
          </Button>
      </div>
      <div className={classes.details}>
        <Typography variant='body2' color="textSecondary">{post.tags.map(tag => `#${tag} `)}</Typography>
      </div>
      <CardContent>
      <Typography className={classes.title} variant='h5' gutterBottom>{post.title}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size='small' style={{color: 'black'}} onClick={() => dispatch(likePost(post._id))}>
          <FavoriteBorderIcon fontSize='small'/>
            &nbsp; Like &nbsp; 
            {post.likeCount}
        </Button>
        <Button size='small' style={{color: 'black'}} onClick={() => dispatch(deletePost(post._id))}>
          <DeleteOutlineIcon fontSize='small'/>
            Delete
        </Button>
      </CardActions>
      


    </Card>
  )
}

export default Post