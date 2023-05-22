import { React, useState } from 'react'
import { Typography, TextField, Button, Paper, Box } from '@material-ui/core'
import FileBase from 'react-file-base64'
import { useDispatch } from 'react-redux'
import { createPost } from '../../actions/posts'

import useStyles from './styles'

const Form = () => {
  const [postData, setPostData] = useState({
    creator: '',
    title: '',
    message: '',
    tags: '',
    selectedFile: '',
  })
  const classes = useStyles()
  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(postData)
    dispatch(createPost(postData))
    
  }

  return (
    <Paper className={classes.paper}>
      <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant='h6'>Create a Post</Typography>
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
          onChange={(e) => setPostData({...postData, tags: e.target.value})}
        />
        <Box className={classes.fileInput}>
          <FileBase
            type='file'
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