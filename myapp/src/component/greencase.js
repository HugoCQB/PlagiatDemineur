import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({

paper: {
  height: 140,
  width: 100,
 },
}


class Space extends React.Component {


  render() {
    const { classes } = this.props;

      return (
        <div>
          <Paper className={classes.paper} />
        </div>
    );
  }
}





export default Space;
