import React from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

class VerticalNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  render() {
    return (
      <div>
        <RaisedButton
          label="Open Drawer"
          onClick={this.handleToggle}
        />
        <Drawer width={200}
                docked={false}
                open={this.state.open}
                onRequestChange={(open) => this.setState({open})}>
          <AppBar title="GDPR"/>
          <MenuItem onClick={this.handleClose}>Search</MenuItem>
          <MenuItem onClick={this.handleClose}>Add New</MenuItem>
        </Drawer>
      </div>
    );
  }
}

export default VerticalNav;