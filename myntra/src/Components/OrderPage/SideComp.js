import React from "react";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Typography from "@material-ui/core/Typography";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";
import PriorityHighIcon from "@material-ui/icons/PriorityHigh";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles({
  root: {
    width: 230
  }
});

export default function SideComp() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <MenuList>
        <MenuItem>
          <b>Account</b>
        </MenuItem>
        <MenuItem>Reena Singh</MenuItem>
        <Divider />
        <MenuItem>
          <Typography variant="inherit">Overview</Typography>
          <br/>
          <br/>
        </MenuItem>
        <Divider />

        <MenuItem>
          <Typography variant="inherit" noWrap>
            <br />
            <b> ORDER</b>
            <br />
            <br />
            <b><font color="#14CDA8">Orders & Returns</font></b>
          </Typography>
        </MenuItem>
        <Divider />
        <MenuItem>
          <Typography variant="inherit">
            <br />
            <b>CREDITS</b>
            <br />
            <br />
            Coupons
            <br />
            Myntra Credit
            <br />
            MynCash
          </Typography>
        </MenuItem>
        <Divider />
        <MenuItem>
          <b>ACCOUNT</b>
        </MenuItem>
        <MenuItem>
          Profile
          <br />
          Saved Cards
          <br />
          Addresses
          <br />
          Myntra Insider
        </MenuItem>
      </MenuList>
    </Paper>
  );
}