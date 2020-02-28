import React from 'react';
import PropTypes from 'prop-types';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Slide from '@material-ui/core/Slide';
import LinearProgress from '@material-ui/core/LinearProgress';

import { useStyles } from './styles';

const Transition = React.forwardRef((props, ref) => (
  <Slide direction="up" ref={ref} {...props} />
));

function CustomDialog({ show, msgLoading }) {
  const styles = useStyles();

  return (
    <Dialog
      open={show}
      TransitionComponent={Transition}
      keepMounted
      PaperProps={{
        style: {
          borderRadius: 16,
        },
      }}
    >
      <DialogContent>
        <LinearProgress className={styles.progress} />
        {msgLoading}...
      </DialogContent>
    </Dialog>
  );
}

CustomDialog.propTypes = {
  msgLoading: PropTypes.string,
  show: PropTypes.bool.isRequired,
};

CustomDialog.defaultProps = {
  msgLoading: 'Aguarde, carregando',
};

export default CustomDialog;
