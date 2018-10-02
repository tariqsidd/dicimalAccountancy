import React, { Component } from 'react';
import Paper from "@material-ui/core/Paper/Paper";
import PropTypes from 'prop-types';
import Typography from "@material-ui/core/Typography/Typography";
import Grid from "@material-ui/core/Grid/Grid";
import {withStyles} from "@material-ui/core/styles";
import AmlStyles from "../aml/AmlStyles";

class MemberInPractice extends Component {
    render() {
        const { classes } = this.props;
        return(
            <React.Fragment>
                <main className={classes.layout}>
                    <Paper className={classes.paper}>
                        <Typography variant="display1" align="center">
                            COMPLAINTS PROCEDURE
                        </Typography>
                        <Typography variant="headline" align="center">
                            CIMA Member in Practice
                        </Typography>
                        <React.Fragment>
                            <Grid container spacing={8}>
                                <Grid item xs={12} sm={1}>
                                    <Typography variant='headline'>
                                        1.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={11}>
                                    <Typography variant='headline'>
                                        Purpose
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={1}>
                                    <Typography variant='headline'>
                                        1.1
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={11}>
                                    <Typography variant='subheading'>
                                        We, Decimal Accountancy Limited, are committed to upholding best practice through a high quality service to all our clients. This Annex sets out the procedure we will operate in dealing with complaints arising from the provision of services under our letter of engagement.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={1}>
                                    <Typography variant='headline'>
                                        2.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={11}>
                                    <Typography variant='headline'>
                                        Raising an Issue
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={1}>
                                    <Typography variant='headline'>
                                        2.1
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={11}>
                                    <Typography variant='subheading'>
                                        In the first instance please contact Naseem Ul Haq, Director on NHaq@decimalaccountancy.co.uk , or at 140 Tilney Road, Dagenham, Essex. RM9 6HS, to discuss any concerns you have, so that the matter can be looked into immediately.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={1}>
                                    <Typography variant='headline'>
                                        3.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={11}>
                                    <Typography variant='headline'>
                                        Making an Informal Complaint
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={1}>
                                    <Typography variant='headline'>
                                        3.1
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={11}>
                                    <Typography variant='subheading'>
                                        An informal complaint can be made by telephone, or by speaking, face to face or in writing to Naseem Ul Haq as above. If the matter is not resolved at this stage, and you have not already issued a complaint in writing, you should do so. Please include specific details so that the matter can be thoroughly investigated.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={1}>
                                    <Typography variant='headline'>
                                        4.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={11}>
                                    <Typography variant='headline'>
                                        Making a Formal Complaint
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={1}>
                                    <Typography variant='headline'>
                                        4.1
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={11}>
                                    <Typography variant='subheading'>
                                        Upon receipt of your written formal complaint an acknowledgement will be sent to you within 10 working days. The name and contact details of the person who will be dealing with your case will be supplied to you at this point.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={1}>
                                    <Typography variant='headline'>
                                        4.2
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={11}>
                                    <Typography variant='subheading'>
                                        Within 20 working days from receipt of your written complaint you will receive in writing a summary of our understanding of your complaint. You will be asked at this time to provide any further evidence or information regarding the complaint and to confirm that we have understood all your concerns.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={1}>
                                    <Typography variant='headline'>
                                        4.3
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={11}>
                                    <Typography variant='subheading'>
                                        Following such confirmation, we will investigate the matter and write to you in reply within 10 working days unless it becomes apparent to us that the investigation may not be completed within this timescale. In these circumstances, a written explanation will be sent to you including a progress report. When a substantive reply is sent you, a summary of findings will be included along with details of any further action to be taken.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={1}>
                                    <Typography variant='headline'>
                                        5
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={11}>
                                    <Typography variant='headline'>
                                        If you are not satisfied
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={1}>
                                    <Typography variant='headline'>
                                        5.1
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={11}>
                                    <Typography variant='subheading'>
                                        For service related matters involving a CIMA member in Practice in the UK, you may wish to know that CIMA offers an independent Alternative Dispute Resolution (ADR) facility for members of the public.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={1}>
                                    <Typography variant='headline'>
                                        5.2
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={11}>
                                    <Typography variant='subheading'>
                                        If in the context of your dealings with us or the handling of your complaint, you believe that a member of CIMA has been guilty of misconduct, you may lodge a complaint with the Professional Conduct department of the Institute.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={1}>
                                    <Typography variant='headline'>
                                        5.3
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={11}>
                                    <Typography variant='subheading'>
                                        Further information on ADR or making a complaint about alleged misconduct can be found on the CIMA website at www.cimaglobal.com.
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
MemberInPractice.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(AmlStyles)(MemberInPractice);
