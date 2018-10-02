import React, { Component } from 'react';
import Grid from "@material-ui/core/Grid/Grid";
import TextField from "@material-ui/core/TextField/TextField";
import Button from "@material-ui/core/Button/Button";

class Individual extends Component {
    constructor(props){
        super(props);
        this.state={
            name:'',
            address:'',
            mobile:'',
            dob:'',
            utrNumber:'',
            ni_number:''
        }
    }

    render() {
        let {name, address, mobile, dob, utrNumber, ni_number} = this.state
        return (
            <React.Fragment>
                <Grid container spacing={16} style={{marginTop:30}}>
                    <Grid item xs={12}>
                        <TextField
                            required
                            name="name"
                            label="Name"
                            fullWidth
                            value={name}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            name="address"
                            label="Address"
                            fullWidth
                            value={address}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            name="mobile"
                            label="Mobile"
                            fullWidth
                            type='number'
                            value={mobile}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            name="dob"
                            fullWidth
                            type='date'
                            value={dob}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            name="utrNumber"
                            label="UTR Number"
                            fullWidth
                            type='number'
                            value={utrNumber}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            name="ni_number"
                            label="National Insurance Number"
                            fullWidth
                            type='number'
                            value={ni_number}
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


export default Individual