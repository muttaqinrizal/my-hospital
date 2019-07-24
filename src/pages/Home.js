import React from "react";
import Appbar from "../component/Appbar";
import Cards from "../component/Card";

import { Container } from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

// import { Icon } from '@material-ui/core/Icon';
import { Icon, CardContent, Typography } from "@material-ui/core";
import PeopleIcon from "@material-ui/icons/People";
import Card from "@material-ui/core/Card";

const styles = {
  root: {
    flexGrow: 1
  },
  paper: {
    textAlign: "center"
  }
};

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Appbar />
        <img src={require("../asset/RSUD.png")} style={{ width: "100%" }} />
        <Grid container spacing={3}>
          <Grid item xs={6} sm={3}>
            <Card>
              <CardContent>
                <PeopleIcon />
                <Typography>Riwayat Periksa</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6} sm={3}>
          <Card>
              <CardContent>
                <PeopleIcon />
                <Typography>Booking Online</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6} sm={3}>
          <Card>
              <CardContent>
                <PeopleIcon />
                <Typography>Pengaduan</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6} sm={3}>
          <Card>
              <CardContent>
                <PeopleIcon />
                <Typography>Info Kontrol Rutin</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6} sm={3}>
          <Card>
              <CardContent>
                <PeopleIcon />
                <Typography>Promo</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6} sm={3}>
          <Card>
              <CardContent>
                <PeopleIcon />
                <Typography>Obat</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6} sm={3}>
          <Card>
              <CardContent>
                <PeopleIcon />
                <Typography>Biaya Inap</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6} sm={3}>
          <Card>
              <CardContent>
                <PeopleIcon />
                <Typography>Riwayat Periksa</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6} sm={3}>
          <Card>
              <CardContent>
                <PeopleIcon />
                <Typography>Antrian Poli</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6} sm={3}>
          <Card>
              <CardContent>
                <PeopleIcon />
                <Typography>Info Bed</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6} sm={3}>
          <Card>
              <CardContent>
                <PeopleIcon />
                <Typography>Riwayat Periksa</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6} sm={3}>
          <Card>
              <CardContent>
                <PeopleIcon />
                <Typography>Jadwal Poli</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        {/* <div style={{display: 'flex', flexDirection:'row'}}>
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </div> */}
      </div>
    );
  }
}
