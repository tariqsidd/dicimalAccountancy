import React, { Component } from 'react';
import Paper from "@material-ui/core/Paper/Paper";
import Typography from "@material-ui/core/Typography/Typography";
import Grid from "@material-ui/core/Grid/Grid";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Style from '../styles'

class WhoWeAre extends Component {
    render() {
        const { classes } = this.props;
        return(
            <React.Fragment>
                <main className={classes.layout}>
                    <Paper className={classes.paper}>
                        <Typography variant="display1" align="center">
                            Who We Are
                        </Typography>
                        <React.Fragment>
                            <Grid container spacing={32}>
                                <Grid item xs={12} style={{marginTop:20}}>
                                    <Typography variant='subheading'>
                                        We are member in practice and regulated by Chartered Institute of Management Accountants (CIMA), undertake continued professional development to ensure our ongoing professional competence in delivering services to our clients.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant='subheading'>
                                        We work with limited companies, partnerships, sole traders and self-employed individuals in London and the surrounding counties. We’re really enthusiastic about working with owner-managed businesses and becoming an integral part of the team. We do this by having regular catch up meetings, by providing management accounts, and being available by email or at the end of the phone, as part of our monthly service package, at no extra cost.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant='subheading'>
                                        We really care about the success of our clients. If we see an area where we can help to cut your costs, minimise your tax bill, or open up new opportunities, we’ll let you know. And we’ll do it over a cup of coffee and at a time and place that suits you. Meeting up with your accountant should be something to look forward to.
                                    </Typography>
                                </Grid>
                            </Grid>
                        </React.Fragment>
                    </Paper>
                </main>
            </React.Fragment>
        )
    }
}
WhoWeAre.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(Style)(WhoWeAre);
