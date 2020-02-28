import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  title: {
    color: '#222222',
    fontSize: 20,
    fontWeight: 'bold',
    padding: '16px 24px 0px 24px',
    textAlign: 'center',
  },
  button: {
    align: 'center',
    background: '#0074C5',
    borderRadius: 8,
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
    margin: theme.spacing(1),
    textAlign: 'center',
    textTransform: 'uppercase',
    width: 412,
  },
  input: {
    display: 'none',
  },
  closeButton: {
    color: theme.palette.grey[500],
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
  },
  progress: {
    marginBottom: 20,
  },
  content: {
    padding: '0 24px',
    textAlign: 'center',
  },
}));

export default useStyles;
