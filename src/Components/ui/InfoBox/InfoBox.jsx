import React from 'react';
import PropTypes from 'prop-types';
import Box from "@material-ui/core/Box";
import ErrorIcon from '@material-ui/icons/Error';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import {makeStyles} from "@material-ui/core/styles";



export default function InfoBox(props) {
  const { type, text, isVisible } = props;

  let color;

  switch (type) {
    case 'error':
      color = '#ff625f';
      break
    case 'success':
      color= '#6fbf73';
      break;
  }

  const useStyles = makeStyles((theme) => ({
    box: {
      marginTop: theme.spacing(8),
      display: 'flex',
      justifyContent: 'align-items',
      borderRadius: '4px',
      backgroundColor: color,
      padding: '8px'
    },
    icon: {
      marginRight: '4px'
    }
  }));

  const classes = useStyles();

  return (
    isVisible && (
      <Box component="span" m={0}>
        <div className={classes.box}>
          {type === 'success' && <CheckCircleIcon className={classes.icon}/>}
          {type === 'error' && <ErrorIcon className={classes.icon}/>}
          <span>{text}</span>
        </div>
      </Box>
    )
  );
}

InfoBox.propTypes = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  isVisible: PropTypes.bool
};
InfoBox.defaultProps = {
  title: '',
  className: '',
  isVisible: true,
  text: '',
};
