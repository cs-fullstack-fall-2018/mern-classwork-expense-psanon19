import React, { Component } from 'react';
import FormSheet from './FormSheet.js'


class BankTempSheet extends Component {
    render(){
        return (
            <div>
                <FormSheet/>
                <hr/>
                <div id='PatientWriteDown'></div>
            </div>
        );

    }
}

export default BankTempSheet