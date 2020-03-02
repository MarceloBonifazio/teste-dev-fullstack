import React, { useEffect, useState } from 'react';
import axios from 'axios';
import uuid from 'uuid/v4';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress';
import Paper from '@material-ui/core/Paper';

import Card from '../Card';
import Dialog from '../Dialog';
import Pagination from '../Pagination';

import useCore from '../../styles';

const List = () => {
  const core = useCore();

  const [state, setState] = useState({
    data: [],
    error: false,
    loading: true,
    meta: {},
    putError: false,
    putLoading: false,
  });

  useEffect(() => {
    async function fetchApi() {
      try {
        const {
          data: { data, meta },
        } = await axios.get('/api/cards');
        setState({ ...state, data, meta, loading: false });
      } catch (err) {
        setState({ ...state, error: true, loading: false });
      }
    }
    fetchApi();
    // eslint-disable-next-line
  }, []);

  const changeData = (data, item, id) => (item.id === id ? data : item);

  const action = async (type, id) => {
    setState({ ...state, putError: false, putLoading: true });
    try {
      const {
        data: { data },
      } = await axios.put(`/api/card/${id}/${type}`);
      setState({
        ...state,
        data: state.data.map(item => changeData(data, item, id)),
        putLoading: false,
      });
    } catch (err) {
      setState({ ...state, putError: true, putLoading: false });
    }
  };

  const changePage = async page => {
    setState({ ...state, loading: true });
    try {
      const {
        data: { data, meta },
      } = await axios.get(`/api/cards?page=${page}`);
      setState({ ...state, data, meta, loading: false });
    } catch (err) {
      setState({ ...state, error: true, loading: false });
    }
  };

  if (state.loading) {
    return (
      <Container className={core.container}>
        Carregando...
        <LinearProgress />
      </Container>
    );
  }

  if (state.error) {
    return (
      <Container className={core.container}>
        <Paper className={core.error}>Erro ao pesquisar dados</Paper>
      </Container>
    );
  }

  return (
    <Container className={core.container} maxWidth="md">
      <Grid container spacing={1}>
        <Dialog show={state.putLoading} />
        {state.putError && (
          <Grid item xs={12}>
            <Paper className={core.error}>Erro ao salvar dados</Paper>
          </Grid>
        )}
        <Grid item xs={12}>
          <Pagination data={state.meta} changePage={changePage} />
        </Grid>
        {state.data.map(item => (
          <Grid item xs={12} sm={4} md={3} key={uuid()}>
            <Card item={item} action={action} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default List;
