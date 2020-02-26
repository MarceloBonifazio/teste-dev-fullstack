import React, { useEffect, useState } from 'react';
import axios from 'axios';
import uuid from 'uuid/v4';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress';
import Paper from '@material-ui/core/Paper';

import Card from '../Card';

import useStyles from './styles';

const App = () => {
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
      const baseUrl = '/api/cards';
      try {
        const {
          data: { results: data },
        } = await axios.get(baseUrl);
        data
          .sort((prev, next) => prev.name.localeCompare(next.name))
          .forEach(el => {
            el.id = uuid();
          });
        setState({ ...state, data, loading: false });
      } catch (err) {
        setState({ ...state, error: true, loading: false });
      }
    }
    fetchApi();
    // eslint-disable-next-line
  }, []);

  const removeItem = id => {
    if (!id) {
      setState({ ...state, fieldError: 'Escolha um item para excluir' });
      return;
    }
    setState({
      ...state,
      person: '',
      data: state.data.filter(item => item.id !== id),
    });
  };

  const handleSelect = field => event => {
    setState({ ...state, [field]: event.target.value, fieldError: false });
  };

  if (state.loading) {
    return (
      <>
        <div>
          Carregando...
          <LinearProgress />
        </div>
      </>
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
      <Grid className={styles.container} container spacing={2}>
        {state.data.map(item => (
          <Grid item xs={12} sm={3}>
            <Card items={item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default App;
