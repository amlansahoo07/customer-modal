import React, { Component } from 'react'
import { Button } from '../../components/Button'

export class CreateCustomer extends Component {

    constructor(props) {
        super(props)

        this.state = {
            UIN: '',
            Name: '',
            Email: '',
            Mobile: '',
            BirthDate: '',
            DoorNo: '',
            Street: '',
            City: '',
            State: '',
            Country: '',
            ZipCode: ''
        }
    }

    handleUINChanges = (event) => {
        this.setState({
            UIN: event.target.value,
        })
    }

    handleNameChanges = (event) => {
        this.setState({
            Name: event.target.value,
        })
    }

    handleEmailChanges = (event) => {
        this.setState({
            Email: event.target.value,
        })
    }

    handleMobileChanges = (event) => {
        this.setState({
            Mobile: event.target.value,
        })
    }

    handleBirthDateChanges = (event) => {
        this.setState({
            BirthDate: event.target.value,
        })
    }

    handleDoorNoChanges = (event) => {
        this.setState({
            DoorNo: event.target.value,
        })
    }

    handleStreetChanges = (event) => {
        this.setState({
            Street: event.target.value,
        })
    }

    handleCityChanges = (event) => {
        this.setState({
            City: event.target.value,
        })
    }

    handleStateChanges = (event) => {
        this.setState({
            State: event.target.value,
        })
    }

    handleCountryChanges = (event) => {
        this.setState({
            Country: event.target.value,
        })
    }

    handleZipCodeChanges = (event) => {
        this.setState({
            ZipCode: event.target.value,
        })
    }

    handleSubmit = (event) => {
        alert(`${this.state.UIN}
            ${this.state.Name}
            ${this.state.Email}
            ${this.state.Mobile}
            ${this.state.BirthDate}
            ${this.state.DoorNo}
            ${this.state.Street}
            ${this.state.City}
            ${this.state.State}
            ${this.state.Country}
            ${this.state.ZipCode}
        `)
    }

    render() {
        const state = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <div className = "form-group">
                    <label>UIN: </label>
                    <input
                        type='number'
                        value={state.UIN}
                        onChange={this.handleUINChanges}
                        className = "form-control"
                    />
                </div>
                <div className = "form-group">
                    <label>Name: </label>
                    <input
                        type='text'
                        value={state.Name}
                        onChange={this.handleNameChanges}
                        className = "form-control"
                    />
                </div>
                <div className = "form-group">
                    <label>Email: </label>
                    <input
                        type='text'
                        value={state.Email}
                        onChange={this.handleEmailChanges}
                        className = "form-control"
                    />
                </div>
                <div className = "form-group">
                    <label>Mobile: </label>
                    <input
                        type='number'
                        value={state.Mobile}
                        onChange={this.handleMobileChanges}
                        className = "form-control"
                    />
                </div>
                <div className = "form-group">
                    <label>BirthDate: </label>
                    <input
                        type='date'
                        value={state.BirthDate}
                        onChange={this.handleBirthDateChanges}
                        className = "form-control"
                    />
                </div>
                <div className = "form-group">
                    <label>DoorNo: </label>
                    <input
                        type='number'
                        value={state.DoorNo}
                        onChange={this.handleDoorNoChanges}
                        className = "form-control"
                    />
                </div>
                <div className = "form-group">
                    <label>Street: </label>
                    <input
                        type='text'
                        value={state.Street}
                        onChange={this.handleStreetChanges}
                        className = "form-control"
                    />
                </div>
                <div className = "form-group">
                    <label>City: </label>
                    <input
                        type='text'
                        value={state.City}
                        onChange={this.handleCityChanges}
                        className = "form-control"
                    />
                </div>
                <div className = "form-group">
                    <label>State: </label>
                    <input
                        type='text'
                        value={state.State}
                        onChange={this.handleStateChanges}
                        className = "form-control"
                    />
                </div>
                <div className = "form-group">
                    <label>Country: </label>
                    <input
                        type='text'
                        value={state.Country}
                        onChange={this.handleCountryChanges}
                        className = "form-control"
                    />
                </div>
                <div className = "form-group">
                    <label>ZipCode: </label>
                    <input
                        type='number'
                        value={state.ZipCode}
                        onChange={this.handleZipCodeChanges}
                        className = "form-control"
                    />
                </div>
                <div>
                    <Button type='submit'>Create</Button>
                </div>
            </form>
        )
    }
}

export default CreateCustomer
