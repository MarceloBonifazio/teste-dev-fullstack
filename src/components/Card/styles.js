import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    minHeight: 330,
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
  cardActionsStyle: {
    display: 'block',
    textAlign: 'center',
  },
}));

export default useStyles;