import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import ArrowBack from '@material-ui/icons/ArrowBack';

import currency from '../../utils/currency';

import Dialog from '../Dialog';

import useStyles from './styles';
import useCore, { StyledButton } from '../../styles';

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

const List = () => {
  const core = useCore();
  const styles = useStyles();

  const [state, setState] = useState({
    data: {},
    loading: false,
    error: false,
  });

  const {
    title,
    color: backgroundColor,
    type,
    icon,
    amount,
    about,
    id,
    status,
  } = state.data;

  useEffect(() => {
    const itemId = window.location.pathname.replace(/^\D+/g, '');
    async function fetchApi() {
      try {
        const {
          data: { data },
        } = await axios.get(`/api/card/${itemId}`);
        setState({ ...state, data, loading: false });
      } catch (err) {
        window.location.href = '/';
      }
    }
    fetchApi();
    // eslint-disable-next-line
  }, []);

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

  const action = async typeStatus => {
    setState({ ...state, error: false, loading: true });
    try {
      const {
        data: { data },
      } = await axios.put(`/api/card/${id}/${typeStatus}`);
      setState({ ...state, data, loading: false });
    } catch (err) {
      setState({ ...state, error: true, loading: false });
    }
  };

  const buttonMap = {
    active: (
      <Button
        variant="contained"
        color="secondary"
        className={core.button}
        onClick={() => action('deactive')}
      >
        Desativar
      </Button>
    ),
    deactive: (
      <Button
        variant="contained"
        color="primary"
        className={core.button}
        onClick={() => action('active')}
      >
        Ativar
      </Button>
    ),
    hire: (
      <StyledButton
        variant="contained"
        color="primary"
        className={core.button}
        onClick={() => action('hire')}
      >
        Contratar e ativar módulo
      </StyledButton>
    ),
  };

  const back = () => {
    window.location.href = '/';
  };

  return (
    <Container className={core.container}>
      <Dialog show={state.loading} />
      <IconButton onClick={back}>
        <ArrowBack />
        <Typography variant="h5">Voltar</Typography>
      </IconButton>
      <Paper elevation={2} className={styles.item}>
        <Typography variant="h1" className={styles.title}>
          Contratar módulo
        </Typography>
        <Grid container spacing={3}>
          {state.error && (
            <Grid item xs={12}>
              <Paper className={core.error}>Erro ao salvar dados</Paper>
            </Grid>
          )}
          <Grid item sm={2}>
            <div
              style={{ backgroundColor: backgroundTitleColor[type] }}
              className={core.cardTitleStyle}
            >
              {titleMap[type]}
            </div>
            <div style={{ backgroundColor }} className={core.cardIconStyle}>
              {iconMap[icon]}
            </div>
          </Grid>
          <Grid item sm={5}>
            <Typography variant="h6" component="p">
              {title}
            </Typography>
            <Typography variant="body2" className={styles.margin}>
              {amount !== null
                ? `+ ${currency(amount)} por colaborador por mês`
                : 'Gratuito'}
            </Typography>
            {buttonMap[status]}
            {['active', 'deactive'].includes(status) && (
              <Button
                variant="outlined"
                color="secondary"
                className={`${core.button} ${styles.uncontract}`}
                onClick={() => action('uncontract')}
              >
                Descontratar módulo
              </Button>
            )}
          </Grid>
          <Grid item sm={12}>
            <Typography variant="h2" className={styles.titleAbout}>
              Sobre o módulo
            </Typography>
            {about}
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default List;
