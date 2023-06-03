import { makeStyles } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";

export default makeStyles((theme) => ({
    appBar: {
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 50px',
      },
      heading: {
        color: 'rgba(0,0,0, 1)',
      },
      image: {
        marginLeft: '15px',
        borderRadius: '50px',
        marginRight: '15px'
      },
      toolbar: {
        display: 'flex',
        justifyContent: 'flex-end',
        width: '400px',
      },
      profile: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '400px',
      },
      userName: {
        display: 'flex',
        alignItems: 'center',
      },
      brandContainer: {
        display: 'flex',
        alignItems: 'center',
      },
      purple: {
        color: theme.palette.getContrastText(grey[900]),
        backgroundColor: grey[900],
      },
      link: {
        textDecoration: 'none'
      },
      logout: {
        color: 'white',
        backgroundColor: grey[900],
      }
}))