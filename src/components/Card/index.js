import React, { memo } from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';

import currency from '../../utils/currency';

import useCore, { StyledButton } from '../../styles';
import useStyles from './styles';

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

const MyCard = ({ item, action }) => {
  const {
    title,
    color: backgroundColor,
    type,
    icon,
    amount,
    status,
    id,
  } = item;
  const core = useCore();
  const styles = useStyles();

  const backgroundTitleColor = {
    performance: '#4472c4',
    engagement: '#7030a0',
    culture: '#548235',
    relations: '#c55a11',
  };

  const iconMap = {
    icon1: <Icon1 classes={core.iconColor} />,
    icon2: <Icon2 classes={core.iconColor} />,
    icon3: <Icon3 classes={core.iconColor} />,
    icon4: <Icon4 classes={core.iconColor} />,
    icon5: <Icon5 classes={core.iconColor} />,
    icon6: <Icon6 classes={core.iconColor} />,
    icon7: <Icon7 classes={core.iconColor} />,
    icon8: <Icon8 classes={core.iconColor} />,
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
        className={styles.button}
        onClick={() => action('active', id)}
      >
        Ativar
      </Button>
    ),
    hire: (
      <StyledButton
        variant="contained"
        color="primary"
        className={styles.button}
        onClick={() => action('hire', id)}
      >
        Contratar
      </StyledButton>
    ),
    active: (
      <Button
        variant="contained"
        color="secondary"
        className={styles.button}
        onClick={() => action('deactive', id)}
      >
        Desativar
      </Button>
    ),
  };

  const openItem = () => {
    localStorage.setItem('item', JSON.stringify(item));
    window.location.href = '/item';
  };

  return (
    <Card className={styles.root} elevation={2}>
      <CardMedia
        style={{ backgroundColor: backgroundTitleColor[type] }}
        className={core.cardTitleStyle}
      >
        {titleMap[type]}
      </CardMedia>
      <CardMedia style={{ backgroundColor }} className={core.cardIconStyle}>
        {iconMap[icon]}
      </CardMedia>
      <CardContent>
        <Typography
          align="center"
          variant="h6"
          component="p"
          className={styles.infoItemStyle}
          onClick={openItem}
        >
          {title}
        </Typography>
        <Typography
          align="center"
          variant="body2"
          className={styles.infoAmountStyle}
        >
          {amount !== null
            ? `+ ${currency(amount)} por colaborador por mês`
            : 'Gratuito'}
        </Typography>
      </CardContent>
      <CardActions className={styles.cardActionsStyle}>
        {buttonMap[status]}
      </CardActions>
    </Card>
  );
};

MyCard.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    amount: PropTypes.number,
    status: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
  action: PropTypes.func.isRequired,
};

export default memo(MyCard);
