import React from 'react';

import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import EventSeat from '@material-ui/icons/EventSeat';

import useStyles from './styles';

export default function App() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardMedia
        children="Performance"
        className={classes.cardTitleStyle}
      />
      <CardMedia
        children={<EventSeat style={{ fontSize: 80, color: 'white' }} />}
        className={classes.cardIconStyle}
      />
      <CardContent>
        <Typography variant="h6" component="p">
          Checkin & Checkout
        </Typography>
        <Typography variant="body2">
          + X R$ por colaborador por mês
        </Typography>
      </CardContent>
      <CardActions>
        <Button
        variant="contained"
        color="primary"
        className={classes.button}
      >
        Send
      </Button>
        </CardActions>
    </Card>
  );
}
