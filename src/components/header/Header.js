import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import HeaderStyles from './HeaderStyle'
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import WhoWeAre from "../whoWeAre/WhoWeAre";

class Header extends Component {
    constructor(props){
        super(props);
        this.state = {

        };

    }

    render(){
        const { classes } = this.props;
        const { anchorEl } = this.state;
        return(
            <div className={classes.root}>
                <AppBar position="sticky" style={{ position: "fixed" }}>
                    <Toolbar>
                        <Typography variant="title" color="inherit" className={classes.grow}>
                            Decimal Accountancy
                        </Typography>
                        <Button color="inherit" component={Link} to="/">Home</Button>
                        <Button color="inherit" component={Link} to="/memberInPractice">Member in practice</Button>
                        <Button color="inherit" component={Link} to="/aml">AML</Button>
                        <Button color="inherit" component={Link} to="/whoWeAre">Who We Are</Button>
                        <Button color="inherit" component={Link} to="/services">Services</Button>
                        <Button color="inherit" component={Link} to="/pricing">Pricing And Packages</Button>
                        <Button color="inherit" component={Link} to="/newClients">New Clients</Button>
                        <Button color="inherit" component={Link} to="/contactUs">Contact Us</Button>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}


Header.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(HeaderStyles)(Header);