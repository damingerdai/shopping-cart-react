import { Link } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import "./Navbar.scss";

function Navbar() {
  return (
    <AppBar className="header">
      <Toolbar>
        <Typography variant="h6">大明购物车</Typography>
        <div className="flex-spacer"></div>
        <Link to="/login">
          <Button variant="contained" color="primary" disableElevation>
            登录
          </Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
