import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 200,
  },
  cardIconStyle: {
    backgroundColor: 'blue',
    textAlign: 'center',
    padding: 20
  },
  cardTitleStyle: {
    backgroundColor: 'green',
    textAlign: 'center',
    padding: 10,
    color: 'white',
    textTransform: 'uppercase',
  },
}));

export default useStyles;