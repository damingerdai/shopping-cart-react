import { Link } from "react-router-dom";

import { connect } from 'react-redux'

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import "./Navbar.scss";

function mapStateToProps(state) {
  return {
    user: state.login
  }
}

function Navbar(props) {
  const { user } = props;
  return (
    <AppBar className="header">
      <Toolbar>
        <Typography variant="h6">大明购物车</Typography>
        <div className="flex-spacer"></div>
        {!user.username  ? 
          <Link to="/login">
          <Button variant="contained" color="primary" disableElevation>
            登录
          </Button>
        </Link> :
        <Typography variant="h6">{user.username}</Typography>
        }   
      </Toolbar>
    </AppBar>
  );
}

export default connect(mapStateToProps)(Navbar);
