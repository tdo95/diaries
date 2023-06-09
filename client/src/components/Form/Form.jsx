import { React, useState, useEffect } from 'react'
import { Typography, TextField, Button, Paper, Box } from '@material-ui/core'
import FileBase from 'react-file-base64'
import { useDispatch, useSelector } from 'react-redux'
import { createPost, updatePost } from '../../actions/posts'

import useStyles from './styles'

const Form = ({ currentId, setCurrentId }) => {
  const post = useSelector((state) => currentId ? state.posts.find(p => p._id === currentId) : null)
  const [postData, setPostData] = useState({
    creator: '',
    title: '',
    message: '',
    tags: '',
    selectedFile: '',
  })
  const classes = useStyles()
  const dispatch = useDispatch()

  useEffect(() => {
    if (post) setPostData(post)
  }, [post])
  const handleSubmit = (e) => {
    e.preventDefault()
    
    //filter out empty tags before submitting
    const filteredTags = postData.tags.filter(tag => !!tag)

    if (currentId) dispatch(updatePost(currentId, {...postData, tags: filteredTags}))
    else dispatch(createPost({...postData, tags: filteredTags}))

    clear()
  }

  
  const clear = () => {
    setCurrentId(null)
    setPostData({creator: '', title: '', message: '', tags: '', selectedFile: '',})
    //clear upload
    document.querySelector('#inputContainer input').value = ''
  }

  return (
    <Paper className={classes.paper}>
      <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant='h6'>{currentId ? "Edit" : "Create"} Post</Typography>
        <TextField
          name='creator'
          variant='outlined'
          label='Creator Name'
          fullWidth
          value={postData.creator}
          onChange={(e) => setPostData({...postData, creator: e.target.value})}
        />
        <TextField
          name='title'
          variant='outlined'
          label='Post Title'
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({...postData, title: e.target.value})}
        />
        <TextField
          name='message'
          variant='outlined'
          label='Message'
          fullWidth
          value={postData.message}
          onChange={(e) => setPostData({...postData, message: e.target.value})}
        />
        <TextField
          name='tags'
          variant='outlined'
          label='Tags'
          fullWidth
          value={postData.tags}
          onChange={(e) => setPostData({...postData, tags: e.target.value.replace(' ', '').split(',')})}
        />
        <Box className={classes.fileInput} id={'inputContainer'}>
          <FileBase
            multiple={false}
            onDone={(base64) => setPostData({...postData, selectedFile: base64})}       
          />
        </Box>
        <Button className={classes.buttonStyle} variant='contained' size='large' type='submit' fullWidth>Submit</Button>
        
      </form>

    </Paper>
  )
}

export default Form