import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FooterStyles from'./FooterStyles'
import Typography from "@material-ui/core/Typography/Typography";

class Footer extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div>
                <footer className={classes.footer}>
                    <Typography variant="title" align="center" gutterBottom>
                        Footer
                    </Typography>
                    <Typography variant="subheading" align="center" color="textSecondary" component="p">
                        Something here to give the footer a purpose!
                    </Typography>
                </footer>
            </div>
        );
    }

}

Footer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(FooterStyles)(Footer);