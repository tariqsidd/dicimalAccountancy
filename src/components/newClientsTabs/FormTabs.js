import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';
import Individual from "../newClient/Individual";
import style from "../styles";
import Typography from "@material-ui/core/Typography/Typography";
import Grid from "@material-ui/core/Grid/Grid";
import LtdCompany from "../ltdCompany/LtdCompany";


class FormTabs extends Component {
    constructor(props){
        super(props);
        this.state={
            currentTab: "individual",
        }
    }

    handleChange(event, currentTab) {
        this.setState({ currentTab });
    }

    render() {
        const { classes } = this.props;
        let {currentTab} = this.state;
        return (
            <React.Fragment>
                <main className={classes.layout}>
                    <Paper className={classes.paper}>
                        <Typography variant="display1" align="center">
                            New Clients
                        </Typography>
                        <Tabs
                            value={currentTab}
                            onChange={this.handleChange.bind(this)}
                            fullWidth
                            indicatorColor="secondary"
                            textColor="secondary"
                        >
                            <Tab value='individual' label="Individual" />
                            <Tab value='ltdCompany/Partnership' label="Ltd Company" />
                        </Tabs>
                        {currentTab === 'individual' && <Individual/>}
                        {currentTab === 'ltdCompany/Partnership' && <LtdCompany/>}
                    </Paper>
                </main>
            </React.Fragment>
        );
    }
}
FormTabs.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(style)(FormTabs)