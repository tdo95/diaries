import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
    [theme.breakpoints.down('sm')]: {
        mainContainer: {
          flexDirection: 'column-reverse',
        },
    },
    appBar: {
      borderRadius: 15,
      margin: '30px 0',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    heading: {
      color: 'rgba(0,0,0, 1)',
    },
    image: {
      marginLeft: '15px',
      borderRadius: '50px',
      marginRight: '15px'
    },
    [theme.breakpoints.down('sm')]: {
      mainContainer: {
        flexDirection: 'column-reverse'
      }
    }
}))