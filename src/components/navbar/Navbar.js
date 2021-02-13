import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import './Navbar.scss';

function Navbar() {
  return (
    <AppBar className="header">
      <Toolbar>
        <Typography variant="h6" className="flex-spacer">
          大明购物车
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
