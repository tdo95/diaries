import { makeStyles } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
export default makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme.spacing(2),
      },
      root: {
        '& .MuiTextField-root': {
          margin: theme.spacing(1),
        },
      },
      avatar: {
        margin: theme.spacing(1),
        backgroundColor: grey[800],
      },
      form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
      },
      submit: {
        margin: theme.spacing(3, 0, 2),
        backgroundColor: grey[900],
        color:'white',
      },
      googleButton: {
        marginBottom: theme.spacing(2),
      },
      button: {
        color: grey[900],
        textDecoration: 'underline',
      },
      googleAuthBox: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '24px'
      }
}))