import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 16,
  },
  error: {
    border: '1px solid red',
    borderRadius: 25,
    padding: 15,
  },
  input: {
    width: '100%',
  },
  container: {
    [theme.breakpoints.up(768)]: {
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'center',
    },
  },
}));

export default useStyles;
