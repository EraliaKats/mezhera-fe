import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => {
    return ({
      body: {
        width: '80vw',
        height: '90vh',
        margin: 'auto',
      },
      title: {
        fontFamily: 'DM sans',
        color: '#004346',
        textAlign: 'center',
        paddingTop: '15px'
      },
      button: {
        margin: '30px',
        display: 'flex',
        width: '300px',
        color: 'white',
        fontFamily: 'DM sans',
        padding: '15px',
        fontWeight: 900,
        borderRadius: '10px'
      },
      buttonsContainer: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        marginTop: '60px'
      },
      buttonFill: {
        backgroundColor: '#00B8B8',
        "&:hover, &:focus": {
          backgroundColor: "#004346"
        }
      },
      clearButtonContainer: {
        width: '80vw'
      },
      clearAllButton: {
        width: '100px',
        height: '50px',
        margin: '0 auto',
        display: 'block'
      },
      nextButtonContainer: {
        width: '80vw',
      },
      nextButton: {
        color: 'white',
        backgroundColor: '#00B8B8',
        "&:hover, &:focus": {
          backgroundColor: "#004346"
        },
        float: 'right'
      },
      nextLink: {
        color: 'white',
        textDecoration: 'none'
      }
    })
  });