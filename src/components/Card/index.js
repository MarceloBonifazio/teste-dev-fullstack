import React, { memo } from 'react';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';

import { currency } from '../../utils';

import useStyles, { StyledButton } from './styles';

import {
  Icon1,
  Icon2,
  Icon3,
  Icon4,
  Icon5,
  Icon6,
  Icon7,
  Icon8,
} from '../../svg';

const MyCard = ({
  item: { title, color: backgroundColor, type, icon, amount, status, id },
  action,
}) => {
  const classes = useStyles();

  const backgroundTitleColor = {
    performance: '#4472c4',
    engagement: '#7030a0',
    culture: '#548235',
    relations: '#c55a11',
  };

  const iconMap = {
    icon1: <Icon1 classes={classes.iconColor} />,
    icon2: <Icon2 classes={classes.iconColor} />,
    icon3: <Icon3 classes={classes.iconColor} />,
    icon4: <Icon4 classes={classes.iconColor} />,
    icon5: <Icon5 classes={classes.iconColor} />,
    icon6: <Icon6 classes={classes.iconColor} />,
    icon7: <Icon7 classes={classes.iconColor} />,
    icon8: <Icon8 classes={classes.iconColor} />,
  };

  const titleMap = {
    performance: 'Performance',
    engagement: 'Engajamento',
    culture: 'Cultura',
    relations: 'Relações',
  };

  const buttonMap = {
    deactive: (
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={() => action('active', id)}
      >
        Ativar
      </Button>
    ),
    hire: (
      <StyledButton
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={() => action('hire', id)}
      >
        Contratar
      </StyledButton>
    ),
    active: (
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        onClick={() => action('deactive', id)}
      >
        Desativar
      </Button>
    ),
  };

  return (
    <Card className={classes.root} elevation={2}>
      <CardMedia
        style={{ backgroundColor: backgroundTitleColor[type] }}
        className={classes.cardTitleStyle}
      >
        {titleMap[type]}
      </CardMedia>
      <CardMedia style={{ backgroundColor }} className={classes.cardIconStyle}>
        {iconMap[icon]}
      </CardMedia>
      <CardContent>
        <Typography
          align="center"
          variant="h6"
          component="p"
          className={classes.infoItemStyle}
        >
          {title}
        </Typography>
        <Typography
          align="center"
          variant="body2"
          className={classes.infoAmountStyle}
        >
          {amount !== null
            ? `+ ${currency(amount)} por colaborador por mês`
            : 'Gratuito'}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActionsStyle}>
        {buttonMap[status]}
      </CardActions>
    </Card>
  );
};

export default memo(MyCard);
