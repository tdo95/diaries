import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
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
}))