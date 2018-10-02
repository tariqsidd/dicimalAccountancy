import React, { Component } from 'react';
import Grid from "@material-ui/core/Grid/Grid";
import TextField from "@material-ui/core/TextField/TextField";
import Button from "@material-ui/core/Button/Button";

class LtdCompany extends Component {
    constructor(props){
        super(props);
        this.state={

        }
    }

    render() {
        return (
            <React.Fragment>
                <Grid container spacing={16}>
                    <Grid item xs={12}>
                        <TextField
                            required
                            // name="name"
                            label="Business Name"
                            fullWidth
                            // value={name}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            // name="name"
                            label="Date of Incorporation"
                            fullWidth
                            // value={name}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            // name="name"
                            label="Company Number"
                            fullWidth
                            // value={name}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            // name="name"
                            label="Business Address"
                            fullWidth
                            // value={name}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            // name="name"
                            label="Business Address"
                            fullWidth
                            // value={name}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            // name="name"
                            label="Number of Directors"
                            fullWidth
                            // value={name}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            // name="name"
                            label="Director's Name"
                            fullWidth
                            // value={name}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            // name="name"
                            label="Director's Address"
                            fullWidth
                            // value={name}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            // name="name"
                            label="Director's Mobile"
                            fullWidth
                            // value={name}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            // name="name"
                            label="Director's Date of Birth"
                            fullWidth
                            // value={name}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            // name="name"
                            label="Director's UTR Number"
                            fullWidth
                            // value={name}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            // name="name"
                            label="Director's National Insurance"
                            fullWidth
                            // value={name}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            // name="name"
                            label="Accounting Period Year End"
                            fullWidth
                            // value={name}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            // name="name"
                            label="Corporation Tax Number"
                            fullWidth
                            // value={name}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            // name="name"
                            label="Govt Gateway ID"
                            fullWidth
                            // value={name}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            // name="name"
                            label="Govt Gateway Password"
                            fullWidth
                            // value={name}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            // name="name"
                            label="Company Authentication Code"
                            fullWidth
                            // value={name}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            // name="name"
                            label="Company House UserID"
                            fullWidth
                            // value={name}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            // name="name"
                            label="Company House Password"
                            fullWidth
                            // value={name}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            // name="name"
                            label="Company House Login"
                            fullWidth
                            // value={name}
                        />
                    </Grid>
                    <Grid  xs={12} container direction="row" justify="flex-end">
                        <Button variant='contained' color='primary' style={{marginTop:10}}>
                            Register
                        </Button>
                    </Grid>
                </Grid>
            </React.Fragment>
        );
    }
}


export default LtdCompany