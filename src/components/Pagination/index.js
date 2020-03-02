import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v4';

import Button from '@material-ui/core/Button';

import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';

import useStyles from './styles';

const Pagination = ({
  changePage,
  data: { current_page: actual, last_page: last },
}) => {
  const init = [actual - 3, actual - 2, actual - 1];
  const end = [actual + 1, actual + 2, actual + 3];

  const classes = useStyles();
  /**/
  return (
    <div className={`${classes.itemPaper} ${classes.centered}`}>
      <Button
        aria-label="Primeira página"
        disabled={actual === 1}
        onClick={() => changePage(1)}
      >
        <FirstPage />
      </Button>
      {init.map(
        el =>
          el >= 1 && (
            <Button
              aria-label={`Página ${el}`}
              key={uuid()}
              onClick={() => changePage(el)}
            >
              {el}
            </Button>
          )
      )}
      <Button disabled>{actual}</Button>
      {end.map(
        el =>
          el <= last && (
            <Button
              aria-label={`Página ${el}`}
              key={uuid()}
              onClick={() => changePage(el)}
            >
              {el}
            </Button>
          )
      )}
      <Button
        aria-label="Última página"
        disabled={actual === last}
        onClick={() => changePage(last)}
      >
        <LastPage />
      </Button>
    </div>
  );
};

Pagination.propTypes = {
  data: PropTypes.shape({
    current_page: PropTypes.number.isRequired,
    last_page: PropTypes.number.isRequired,
  }).isRequired,
  changePage: PropTypes.func.isRequired,
};

export default Pagination;
