import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Icon from "@material-ui/core/Icon";
import RestoreIcon from "@material-ui/icons/Restore";
import StoreIcon from "@material-ui/icons/Store";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    position: "fixed" /* Set the navbar to fixed position */,
    bottom: 0 /* Position the navbar at the bottom of the page */,
    width: 896
  }
});

export default function LabelBottomNavigation(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState("recents");

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      className={classes.root}
      showLabels
    >
      <BottomNavigationAction
        label="Special Offers"
        value="recents"
        icon={<RestoreIcon />}
        component={Link}
        to="/"
      />
      <BottomNavigationAction
        label="Store Locator"
        value="favorites"
        icon={<StoreIcon />}
        component={Link}
        to="/store-locator"
      />
      <BottomNavigationAction
        label="Scan"
        value="nearby"
        icon={<LocationOnIcon />}
        component={Link}
        to="/data-api"
      />
      <BottomNavigationAction
        label="ACE Care"
        value="folder"
        icon={<Icon>folder</Icon>}
        component={Link}
        to="/"
      />
      <BottomNavigationAction
        label="Ideas"
        value="Ideas"
        icon={<Icon>folder</Icon>}
      />

      {/* <BottomNavigationAction label="Special Offers" value="recents" icon={<RestoreIcon />} onClick={()=>props.changePage("Home")} />
      <BottomNavigationAction label="Store Locator" value="favorites" icon={<StoreIcon />} onClick={()=>props.changePage("Store")}/>
      <BottomNavigationAction label="Scan" value="nearby" icon={<LocationOnIcon />} onClick={()=>props.changePage("Scan")} />
      <BottomNavigationAction label="ACE Care" value="folder" icon={<Icon>folder</Icon>} onClick={()=>props.changePage("ACE")}/>
      <BottomNavigationAction label="Ideas" value="Ideas" icon={<Icon>folder</Icon>} /> */}
    </BottomNavigation>
  );
}
