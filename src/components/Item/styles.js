import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  title: {
    color: '#7f7f7f',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  titleAbout: {
    fontSize: 16,
    fontWeight: 'bold',
    margin: '40px 0 20px',
  },
  item: {
    padding: 20,
  },
  margin: {
    margin: '20px 0',
  },
  uncontract: {
    marginLeft: 20,
  },
}));

export default useStyles;
