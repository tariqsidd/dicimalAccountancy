import React, { Component } from 'react';
import Paper from "@material-ui/core/Paper/Paper";
import Typography from "@material-ui/core/Typography/Typography";
import Grid from "@material-ui/core/Grid/Grid";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import PricingStyles from "./PricingStyles";
import Card from "@material-ui/core/Card/Card";
import CardHeader from "@material-ui/core/CardHeader/CardHeader";
import CardContent from "@material-ui/core/CardContent/CardContent";
import Divider from '@material-ui/core/Divider';
import Done from '@material-ui/icons/Done';
import Cancel  from '@material-ui/icons/Clear';


class PricingAndPackages extends Component {
    constructor(props){
        super(props);
        this.state = {
            pricing:[
                {
                    type: 'Limited Companies',
                    form: 'From £ per year',
                    services :[
                        'Annual Revenue',
                        'Completion & of Company Accounts',
                        'Corporation Tax computations & return',
                        'Company Secretarial & filing with Companies House',
                        'Self Assessment tax returns for Directors',
                        'Payroll for 2 Directors',
                        'VAT Return checked & filed',
                        'Quarterly management accounts meetings'
                    ],
                    package:[{priceType: 'Bronze', price: '£300'}]
                }
            ]
        }
    }
    render(){
        const { classes } = this.props;
        return(
            <React.Fragment>
                <main className={classes.layout}>
                    <Paper className={classes.paper}>
                        <Typography variant="display1" align="center">
                            Limited Companies
                        </Typography>
                        <React.Fragment>
                            <Grid container spacing={16}>
                                <Grid item xs={12} sm={3} md={4}>
                                    <Card style={{marginTop: 20}}>
                                        <CardHeader
                                            title='Bronze'
                                            titleTypographyProps={{ align: 'center' }}
                                            className={classes.cardHeader}
                                        />
                                        <CardContent>
                                            <div className={classes.cardPricing}>
                                                <Typography variant="display2" color="textPrimary">
                                                    £300
                                                </Typography>
                                                <Typography variant="h6" color="textSecondary">
                                                    /year
                                                </Typography>
                                            </div>
                                            <Grid container>
                                                <Grid item xs={12} sm={6}>
                                                    <Typography variant="subheading" align="center" >
                                                        Annual Revenue
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={12} sm={6}>
                                                    <Typography variant="subheading" align="center" >
                                                        Upto £30,000
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                            <Divider />
                                            <Grid container style={{marginTop:10}}>
                                                <Grid item xs={12} sm={1}>
                                                    <Done style={{fontSize:20}}/>
                                                </Grid>
                                                <Grid item xs={12} sm={11}>
                                                    <Typography style={{fontSize: 12, fontWeight:'bold'}}>
                                                        Completion & of Company Accounts
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={12} sm={1}>
                                                    <Done style={{fontSize:20}}/>
                                                </Grid>
                                                <Grid item xs={12} sm={11}>
                                                    <Typography style={{fontSize: 12, fontWeight:'bold'}}>
                                                        Corporation Tax computations & return
                                                    </Typography>
                                                </Grid>

                                                <Grid item xs={12} sm={1}>
                                                    <Done style={{fontSize:20}}/>
                                                </Grid>
                                                <Grid item xs={12} sm={11}>
                                                    <Typography style={{fontSize: 12, fontWeight:'bold'}}>
                                                        Company Secretarial & filing with Companies House
                                                    </Typography>
                                                </Grid>

                                                <Grid item xs={12} sm={1}>
                                                    <Done style={{fontSize:20}}/>
                                                </Grid>
                                                <Grid item xs={12} sm={11}>
                                                    <Typography style={{fontSize: 12, fontWeight:'bold'}}>
                                                        Self Assessment tax returns for Directors
                                                    </Typography>
                                                </Grid>

                                                <Grid item xs={12} sm={1}>
                                                    <Cancel style={{fontSize:20}}/>
                                                </Grid>
                                                <Grid item xs={12} sm={11}>
                                                    <Typography style={{fontSize: 12, fontWeight:'bold'}}>
                                                        Payroll for 2 Directors
                                                    </Typography>
                                                </Grid>

                                                <Grid item xs={12} sm={1}>
                                                    <Cancel style={{fontSize:20}}/>
                                                </Grid>
                                                <Grid item xs={12} sm={11}>
                                                    <Typography style={{fontSize: 12, fontWeight:'bold'}}>
                                                        VAT Return checked & filed
                                                    </Typography>
                                                </Grid>

                                                <Grid item xs={12} sm={1}>
                                                    <Cancel style={{fontSize:20}}/>
                                                </Grid>
                                                <Grid item xs={12} sm={11}>
                                                    <Typography style={{fontSize: 12, fontWeight:'bold'}}>
                                                        Quarterly management accounts meetings
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={12} sm={3} md={4}>
                                    <Card style={{marginTop: 20}}>
                                        <CardHeader
                                            title='Silver'
                                            titleTypographyProps={{ align: 'center' }}
                                            className={classes.cardHeader}
                                        />
                                        <CardContent>
                                            <div className={classes.cardPricing}>
                                                <Typography variant="display2" color="textPrimary">
                                                    £400
                                                </Typography>
                                                <Typography variant="h6" color="textSecondary">
                                                    /year
                                                </Typography>
                                            </div>
                                            <Grid container>
                                                <Grid item xs={12} sm={6}>
                                                    <Typography variant="subheading" align="center" >
                                                        Annual Revenue
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={12} sm={6}>
                                                    <Typography variant="subheading" align="center" >
                                                        Upto £30,000 +
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                            <Divider />
                                            <Grid container style={{marginTop:10}}>
                                                <Grid item xs={12} sm={1}>
                                                    <Done style={{fontSize:20}}/>
                                                </Grid>
                                                <Grid item xs={12} sm={11}>
                                                    <Typography style={{fontSize: 12, fontWeight:'bold'}}>
                                                        Completion & of Company Accounts
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={12} sm={1}>
                                                    <Done style={{fontSize:20}}/>
                                                </Grid>
                                                <Grid item xs={12} sm={11}>
                                                    <Typography style={{fontSize: 12, fontWeight:'bold'}}>
                                                        Corporation Tax computations & return
                                                    </Typography>
                                                </Grid>

                                                <Grid item xs={12} sm={1}>
                                                    <Done style={{fontSize:20}}/>
                                                </Grid>
                                                <Grid item xs={12} sm={11}>
                                                    <Typography style={{fontSize: 12, fontWeight:'bold'}}>
                                                        Company Secretarial & filing with Companies House
                                                    </Typography>
                                                </Grid>

                                                <Grid item xs={12} sm={1}>
                                                    <Done style={{fontSize:20}}/>
                                                </Grid>
                                                <Grid item xs={12} sm={11}>
                                                    <Typography style={{fontSize: 12, fontWeight:'bold'}}>
                                                        Self Assessment tax returns for Directors
                                                    </Typography>
                                                </Grid>

                                                <Grid item xs={12} sm={1}>
                                                    <Done style={{fontSize:20}}/>
                                                </Grid>
                                                <Grid item xs={12} sm={11}>
                                                    <Typography style={{fontSize: 12, fontWeight:'bold'}}>
                                                        Payroll for 2 Directors
                                                    </Typography>
                                                </Grid>

                                                <Grid item xs={12} sm={1}>
                                                    <Cancel style={{fontSize:20}}/>
                                                </Grid>
                                                <Grid item xs={12} sm={11}>
                                                    <Typography style={{fontSize: 12, fontWeight:'bold'}}>
                                                        VAT Return checked & filed
                                                    </Typography>
                                                </Grid>

                                                <Grid item xs={12} sm={1}>
                                                    <Cancel style={{fontSize:20}}/>
                                                </Grid>
                                                <Grid item xs={12} sm={11}>
                                                    <Typography style={{fontSize: 12, fontWeight:'bold'}}>
                                                        Quarterly management accounts meetings
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={12} sm={3} md={4}>
                                    <Card style={{marginTop: 20}}>
                                        <CardHeader
                                            title='Gold'
                                            titleTypographyProps={{ align: 'center' }}
                                            className={classes.cardHeader}
                                        />
                                        <CardContent>
                                            <div className={classes.cardPricing} style={{marginBottom:34}}>
                                                <Typography variant="headline" color="textPrimary">
                                                    Price after free initial meeting
                                                </Typography>
                                            </div>
                                            <Grid container>
                                                <Grid item xs={12} sm={6}>
                                                    <Typography variant="subheading" align="center" >
                                                        Annual Revenue
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={12} sm={6}>
                                                    <Typography variant="subheading" align="center" >
                                                        Upto £30,000 +
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                            <Divider />
                                            <Grid container style={{marginTop:10}}>
                                                <Grid item xs={12} sm={1}>
                                                    <Done style={{fontSize:20}}/>
                                                </Grid>
                                                <Grid item xs={12} sm={11}>
                                                    <Typography style={{fontSize: 12, fontWeight:'bold'}}>
                                                        Completion & of Company Accounts
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={12} sm={1}>
                                                    <Done style={{fontSize:20}}/>
                                                </Grid>
                                                <Grid item xs={12} sm={11}>
                                                    <Typography style={{fontSize: 12, fontWeight:'bold'}}>
                                                        Corporation Tax computations & return
                                                    </Typography>
                                                </Grid>

                                                <Grid item xs={12} sm={1}>
                                                    <Done style={{fontSize:20}}/>
                                                </Grid>
                                                <Grid item xs={12} sm={11}>
                                                    <Typography style={{fontSize: 12, fontWeight:'bold'}}>
                                                        Company Secretarial & filing with Companies House
                                                    </Typography>
                                                </Grid>

                                                <Grid item xs={12} sm={1}>
                                                    <Done style={{fontSize:20}}/>
                                                </Grid>
                                                <Grid item xs={12} sm={11}>
                                                    <Typography style={{fontSize: 12, fontWeight:'bold'}}>
                                                        Self Assessment tax returns for Directors
                                                    </Typography>
                                                </Grid>

                                                <Grid item xs={12} sm={1}>
                                                    <Done style={{fontSize:20}}/>
                                                </Grid>
                                                <Grid item xs={12} sm={11}>
                                                    <Typography style={{fontSize: 12, fontWeight:'bold'}}>
                                                        Payroll for 2 Directors
                                                    </Typography>
                                                </Grid>

                                                <Grid item xs={12} sm={1}>
                                                    <Done style={{fontSize:20}}/>
                                                </Grid>
                                                <Grid item xs={12} sm={11}>
                                                    <Typography style={{fontSize: 12, fontWeight:'bold'}}>
                                                        VAT Return checked & filed
                                                    </Typography>
                                                </Grid>

                                                <Grid item xs={12} sm={1}>
                                                    <Done style={{fontSize:20}}/>
                                                </Grid>
                                                <Grid item xs={12} sm={11}>
                                                    <Typography style={{fontSize: 12, fontWeight:'bold'}}>
                                                        Quarterly management accounts meetings
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </React.Fragment>
                    </Paper>
                </main>
                <main className={classes.layout}>
                    <Paper className={classes.paper}>
                        <Typography variant="display1" align="center">
                            Individuals
                        </Typography>
                        <React.Fragment>
                            <Grid container spacing={16}>
                                <Grid item xs={12} sm={3} md={4}>
                                    <Card style={{marginTop: 20}}>
                                        <CardHeader
                                            title='Basic'
                                            titleTypographyProps={{ align: 'center' }}
                                            className={classes.cardHeader}
                                        />
                                        <CardContent>
                                            <div className={classes.cardPricing}>
                                                <Typography variant="display2" color="textPrimary">
                                                    £100
                                                </Typography>
                                                <Typography variant="h6" color="textSecondary">
                                                    /year
                                                </Typography>
                                            </div>
                                            <Grid container>
                                                <Grid item xs={12} sm={6}>
                                                    <Typography variant="subheading" align="center" >
                                                        Annual Revenue
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={12} sm={6}>
                                                    <Typography variant="subheading" align="center" >
                                                        Upto £30,000
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                            <Divider />
                                            <Grid container style={{marginTop:10}}>
                                                <Grid item xs={12} sm={1}>
                                                    <Done style={{fontSize:20}}/>
                                                </Grid>
                                                <Grid item xs={12} sm={11}>
                                                    <Typography style={{fontSize: 12, fontWeight:'bold'}}>
                                                        Completion of tax returns
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={12} sm={1}>
                                                    <Done style={{fontSize:20}}/>
                                                </Grid>
                                                <Grid item xs={12} sm={11}>
                                                    <Typography style={{fontSize: 12, fontWeight:'bold'}}>
                                                        Filing online with HMRC
                                                    </Typography>
                                                </Grid>

                                                <Grid item xs={12} sm={1}>
                                                    <Cancel style={{fontSize:20}}/>
                                                </Grid>
                                                <Grid item xs={12} sm={11}>
                                                    <Typography style={{fontSize: 12, fontWeight:'bold'}}>
                                                        Meeting to discuss your tax return
                                                    </Typography>
                                                </Grid>

                                                <Grid item xs={12} sm={1}>
                                                    <Cancel style={{fontSize:20}}/>
                                                </Grid>
                                                <Grid item xs={12} sm={11}>
                                                    <Typography style={{fontSize: 12, fontWeight:'bold'}}>
                                                        Producing your year end accounts
                                                    </Typography>
                                                </Grid>

                                                <Grid item xs={12} sm={1}>
                                                    <Cancel style={{fontSize:20}}/>
                                                </Grid>
                                                <Grid item xs={12} sm={11}>
                                                    <Typography style={{fontSize: 12, fontWeight:'bold'}}>
                                                        Producing letting schedules for your rental property
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={12} sm={3} md={4}>
                                    <Card style={{marginTop: 20}}>
                                        <CardHeader
                                            title='Basic +'
                                            titleTypographyProps={{ align: 'center' }}
                                            className={classes.cardHeader}
                                        />
                                        <CardContent>
                                            <div className={classes.cardPricing}>
                                                <Typography variant="display2" color="textPrimary">
                                                    £180
                                                </Typography>
                                                <Typography variant="h6" color="textSecondary">
                                                    /year
                                                </Typography>
                                            </div>
                                            <Grid container>
                                                <Grid item xs={12} sm={6}>
                                                    <Typography variant="subheading" align="center" >
                                                        Annual Revenue
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={12} sm={6}>
                                                    <Typography variant="subheading" align="center" >
                                                        Upto £30,000 +
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                            <Divider />
                                            <Grid container style={{marginTop:10}}>
                                                <Grid item xs={12} sm={1}>
                                                    <Done style={{fontSize:20}}/>
                                                </Grid>
                                                <Grid item xs={12} sm={11}>
                                                    <Typography style={{fontSize: 12, fontWeight:'bold'}}>
                                                        Completion of tax returns
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={12} sm={1}>
                                                    <Done style={{fontSize:20}}/>
                                                </Grid>
                                                <Grid item xs={12} sm={11}>
                                                    <Typography style={{fontSize: 12, fontWeight:'bold'}}>
                                                        Filing online with HMRC
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={12} sm={1}>
                                                    <Done style={{fontSize:20}}/>
                                                </Grid>
                                                <Grid item xs={12} sm={11}>
                                                    <Typography style={{fontSize: 12, fontWeight:'bold'}}>
                                                        Meeting to discuss your tax return
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={12} sm={1}>
                                                    <Cancel style={{fontSize:20}}/>
                                                </Grid>
                                                <Grid item xs={12} sm={11}>
                                                    <Typography style={{fontSize: 12, fontWeight:'bold'}}>
                                                        Producing your year end accounts
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={12} sm={1}>
                                                    <Cancel style={{fontSize:20}}/>
                                                </Grid>
                                                <Grid item xs={12} sm={11}>
                                                    <Typography style={{fontSize: 12, fontWeight:'bold'}}>
                                                        Producing letting schedules for your rental property
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={12} sm={3} md={4}>
                                    <Card style={{marginTop: 20}}>
                                        <CardHeader
                                            title='Self-Employed / Landlord'
                                            titleTypographyProps={{ align: 'center' }}
                                            className={classes.cardHeader}
                                        />
                                        <CardContent>
                                            <div className={classes.cardPricing} style={{marginBottom:40}}>
                                                <Typography variant="display2" color="textPrimary">
                                                    £200
                                                </Typography>
                                                <Typography variant="h6" color="textSecondary">
                                                    /year
                                                </Typography>
                                            </div>
                                            <Divider />
                                            <Grid container style={{marginTop:10}}>
                                                <Grid item xs={12} sm={1}>
                                                    <Done style={{fontSize:20}}/>
                                                </Grid>
                                                <Grid item xs={12} sm={11}>
                                                    <Typography style={{fontSize: 12, fontWeight:'bold'}}>
                                                        Completion of tax returns
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={12} sm={1}>
                                                    <Done style={{fontSize:20}}/>
                                                </Grid>
                                                <Grid item xs={12} sm={11}>
                                                    <Typography style={{fontSize: 12, fontWeight:'bold'}}>
                                                        Filing online with HMRC
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={12} sm={1}>
                                                    <Done style={{fontSize:20}}/>
                                                </Grid>
                                                <Grid item xs={12} sm={11}>
                                                    <Typography style={{fontSize: 12, fontWeight:'bold'}}>
                                                        Meeting to discuss your tax return
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={12} sm={1}>
                                                    <Done style={{fontSize:20}}/>
                                                </Grid>
                                                <Grid item xs={12} sm={11}>
                                                    <Typography style={{fontSize: 12, fontWeight:'bold'}}>
                                                        Producing your year end accounts
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={12} sm={1}>
                                                    <Done style={{fontSize:20}}/>
                                                </Grid>
                                                <Grid item xs={12} sm={11}>
                                                    <Typography style={{fontSize: 12, fontWeight:'bold'}}>
                                                        Producing letting schedules for your rental property
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </React.Fragment>
                    </Paper>
                </main>
                <main className={classes.layout}>
                    <Paper className={classes.paper}>
                        <Typography variant="display1" align="center">
                            Payroll
                        </Typography>
                        <React.Fragment>
                            <Grid container spacing={16}>
                                <Grid item xs={12} sm={3} md={4}>
                                    <Card style={{marginTop: 20}}>
                                        <CardHeader
                                            title='Bronze'
                                            titleTypographyProps={{ align: 'center' }}
                                            className={classes.cardHeader}
                                        />
                                        <CardContent>
                                            <div className={classes.cardPricing}>
                                                <Typography variant="display2" color="textPrimary">
                                                    £5
                                                </Typography>
                                                <Typography variant="h6" color="textSecondary">
                                                    /mo
                                                </Typography>
                                            </div>
                                            <Grid container>
                                                <Grid item xs={12} sm={6}>
                                                    <Typography variant="subheading" align="center" >
                                                        Upto 15
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={12} sm={6}>
                                                    <Typography variant="subheading" align="center" >
                                                        Minimum 5 payslips
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={12} sm={3} md={4}>
                                    <Card style={{marginTop: 20}}>
                                        <CardHeader
                                            title='Silver'
                                            titleTypographyProps={{ align: 'center' }}
                                            className={classes.cardHeader}
                                        />
                                        <CardContent>
                                            <div className={classes.cardPricing}>
                                                <Typography variant="display2" color="textPrimary">
                                                    £4
                                                </Typography>
                                                <Typography variant="h6" color="textSecondary">
                                                    /mo
                                                </Typography>
                                            </div>
                                            <Grid container>
                                                <Grid item xs={12}>
                                                    <Typography variant="subheading" align="center" >
                                                        16 - 49
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={12} sm={3} md={4}>
                                    <Card style={{marginTop: 20}}>
                                        <CardHeader
                                            title='Gold'
                                            titleTypographyProps={{ align: 'center' }}
                                            className={classes.cardHeader}
                                        />
                                        <CardContent>
                                            <div className={classes.cardPricing} style={{marginBottom:34}}>
                                                <Typography variant="headline" color="textPrimary">
                                                    Price after free initial meeting
                                                </Typography>
                                            </div>
                                            <Grid container>
                                                <Grid item xs={12}>
                                                    <Typography variant="subheading" align="center" >
                                                        50+
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </React.Fragment>
                    </Paper>
                </main>
                <main className={classes.layout}>
                    <Paper className={classes.paper}>
                        <Typography variant="display1">
                            Incorporation and secretarial services
                        </Typography>
                        <React.Fragment>
                            <Grid container spacing={16} style={{marginTop: 30}}>
                                <Grid item xm={12} sm={6}>
                                    <Typography variant='headline'>
                                        From £
                                    </Typography>
                                </Grid>
                                <Grid item xm={12} sm={6}>
                                    <Typography variant='headline'>
                                        £250
                                    </Typography>
                                </Grid>
                            </Grid>
                        </React.Fragment>
                    </Paper>
                </main>
                <main className={classes.layout}>
                    <Paper className={classes.paper}>
                        <Typography variant="display1">
                            Consultation
                        </Typography>
                        <React.Fragment>
                            <Grid container spacing={16} style={{marginTop: 30}}>
                                <Grid item xm={12} sm={6}>
                                    <Typography variant='headline'>
                                        From £
                                    </Typography>
                                </Grid>
                                <Grid item xm={12} sm={6}>
                                    <Typography variant='headline'>
                                        Price TBA after first initial meeting
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

PricingAndPackages.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(PricingStyles)(PricingAndPackages);