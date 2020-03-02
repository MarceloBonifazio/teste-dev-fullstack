import React, { memo } from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';

import currency from '../../utils/currency';
import { backgroundTitleColor, iconMap, titleMap } from '../../utils/map';

import useCore, { StyledButton } from '../../styles';
import useStyles from './styles';

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
    window.location.href = `/item/${id}`;
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
