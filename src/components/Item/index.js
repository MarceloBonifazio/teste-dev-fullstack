import React, { useEffect, useState } from 'react';
import axios from 'axios';
import uuid from 'uuid/v4';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress';
import Paper from '@material-ui/core/Paper';

import Card from '../Card';

import useStyles from './styles';

const List = () => {
  const styles = useStyles();

  const [state, setState] = useState({
    data: [],
    error: false,
    loading: true,
    person: '',
    fieldError: false,
  });

  useEffect(() => {
    async function fetchApi() {
      const baseUrl = 'http://localhost:8000/api/cards';
      try {
        const {
          data: { data },
        } = await axios.get(baseUrl);
        setState({ ...state, data, loading: false });
      } catch (err) {
        setState({ ...state, error: true, loading: false });
      }
    }
    fetchApi();
    // eslint-disable-next-line
  }, []);

  if (state.loading) {
    return (
      <Container className={styles.root}>
        Carregando...
        <LinearProgress />
      </Container>
    );
  }

  if (state.error) {
    return (
      <Container className={styles.root}>
        <Paper className={styles.error}>Erro ao pesquisar dados</Paper>
      </Container>
    );
  }

  return (
    <Container className={styles.root}>
      <Grid className={styles.container} container spacing={1}>
        {state.data.map(item => (
          <Grid item xs={12} sm={4} md={3}>
            <Card item={item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default List;
