import Button from '@material-ui/core/Button';
import { makeStyles, withStyles } from '@material-ui/core/styles';

const useCore = makeStyles(() => ({
  container: {
    marginTop: 16,
  },
  error: {
    border: '1px solid red',
    borderRadius: 25,
    padding: 15,
  },
  button: {
    textTransform: 'capitalize',
  },
  cardIconStyle: {
    padding: 20,
    textAlign: 'center',
    minHeight: 80,
  },
  cardTitleStyle: {
    color: 'white',
    padding: 10,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  infoItemStyle: {
    cursor: 'pointer',
    fontSize: 16,
    fontWeight: 'bold',
    minHeight: 50,
  },
  infoAmountStyle: {
    fontSize: 12,
    marginTop: 16,
  },
  iconColor: {
    fill: 'white',
  },
}));

export const StyledButton = withStyles({
  root: {
    backgroundColor: '#92d050',
    border: '1px solid',
    borderColor: '#92d050',
    boxShadow: 'none',
    fontSize: 16,
    lineHeight: 1.5,
    padding: '6px 12px',
    textTransform: 'none',
    '&:hover': {
      backgroundColor: '#79bb32',
      borderColor: '#abdb78',
      boxShadow: 'none',
    },
    '&:active': {
      backgroundColor: '#abdb78',
      borderColor: '#92d050',
      boxShadow: 'none',
    },
  },
})(Button);

export default useCore;
