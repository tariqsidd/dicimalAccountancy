import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography/Typography";
import style from "../styles";
import Grid from "@material-ui/core/Grid/Grid";
import TextField from "@material-ui/core/TextField/TextField";

class ContactUs extends Component {
    constructor(props){
        super(props);
        this.state={

        }
    }

    render() {
        const { classes } = this.props;

        return (
            <React.Fragment>
                <main className={classes.layout}>
                    <Paper className={classes.paper}>
                        <Typography variant="display1" align="center">
                            Contact Us
                        </Typography>
                        <Grid container spacing={16}>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    name="name"
                                    label="Name"
                                    fullWidth
                                    // value={name}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    name="email"
                                    label="Email"
                                    fullWidth
                                    // value={name}
                                />
                            </Grid>
                            <Grid item xs={12} sm={11}>
                                <TextField
                                    id="outlined-multiline-flexible"
                                    label="Message"
                                    fullWidth
                                    multiline
                                    rowsMax="20"
                                    // value={this.state.multiline}
                                    // onChange={this.handleChange('multiline')}
                                    // className={classes.textField}
                                    margin="normal"
                                    // helperText="hello"
                                    variant="outlined"
                                />
                            </Grid>
                        </Grid>
                    </Paper>
                </main>
            </React.Fragment>
        );
    }
}

ContactUs.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(style)(ContactUs)