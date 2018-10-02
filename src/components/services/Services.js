import React, { Component } from 'react';
import Paper from "@material-ui/core/Paper/Paper";
import PropTypes from 'prop-types';
import Typography from "@material-ui/core/Typography/Typography";
import Grid from "@material-ui/core/Grid/Grid";
import {withStyles} from "@material-ui/core/styles";
import AmlStyles from "../aml/AmlStyles";
import Button from "@material-ui/core/Button/Button";

class Services extends Component {
    render() {
        const { classes } = this.props;
        return(
                <React.Fragment>
                    <main className={classes.layout}>
                        <Paper className={classes.paper}>
                            <Typography variant="display1" align="center">
                                Services
                            </Typography>
                            <React.Fragment>
                                <Grid container spacing={16}>
                                    <Grid item xs={12}>
                                        <Typography variant='headline'>
                                            Accountancy
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Button  href="#outlined-buttons">
                                            Bookkeeping
                                        </Button>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Button  href="#outlined-buttons">
                                            Year-end accounts prepration
                                        </Button>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Button  href="#outlined-buttons">
                                            Management accounts
                                        </Button>
                                    </Grid>

                                    <Grid item xs={12}>
                                        <Typography variant='headline'>
                                            Taxation
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Button  href="#outlined-buttons">
                                            Personal income tax
                                        </Button>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Button  href="#outlined-buttons">
                                            Corporation tax
                                        </Button>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Button  href="#outlined-buttons">
                                            VAT returns
                                        </Button>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Button  href="#outlined-buttons">
                                            Capital gains tax
                                        </Button>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Button  href="#outlined-buttons">
                                            Construction industry tax
                                        </Button>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography variant='headline'>
                                            Payroll
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography variant='headline'>
                                            Incorporation and secretarial services
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography variant='headline'>
                                            Consultation
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Button  href="#outlined-buttons">
                                            ISO 9001
                                        </Button>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Button  href="#outlined-buttons">
                                            ISO 4001
                                        </Button>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Button  href="#outlined-buttons">
                                            ISO 27001
                                        </Button>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Button  href="#outlined-buttons">
                                            OHSAS
                                        </Button>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Button  href="#outlined-buttons">
                                            SAFE
                                        </Button>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Button  href="#outlined-buttons">
                                            CHAS
                                        </Button>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography variant='headline'>
                                            Our popular services
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Button  href="#outlined-buttons">
                                            tax return for cap drivers
                                        </Button>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Button  href="#outlined-buttons">
                                            tax return for property landlords
                                        </Button>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Button  href="#outlined-buttons">
                                            tax return for self-employee individuals
                                        </Button>
                                    </Grid>
                                </Grid>
                            </React.Fragment>
                        </Paper>
                    </main>
                </React.Fragment>
        )
    }
}
Services.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(AmlStyles)(Services);