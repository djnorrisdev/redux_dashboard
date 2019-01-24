import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import TextField from '@material-ui/core/TextField';

class ProfileForm extends Component {
  constructor (props) {
    super(props);
    this.state = {
      name: 'enter'
    }
  }
  handleChange = name => event => {
    this.setState({
      ...this.state,
      [name]: event.target.value
    })
  }

  render () {
    const { classes } = this.props;
    return (
      <form className={classes.container}>
        <TextField
          id="outlined-name"
          label="Name"
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleChange('name')}
          margin="normal"
          variant="outlined"
        />
      </form>
    )
  }
}
export default ProfileForm;
