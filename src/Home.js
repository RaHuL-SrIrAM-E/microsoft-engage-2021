import React, { Component } from 'react';
import { Input, Button } from '@material-ui/core';
import "./Home.css"

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            url: ''
        }
    }

    handleChange = (e) => this.setState({ url: e.target.value })

    join = () => {
        if (this.state.url !== "") {
            var url = this.state.url.split("/")
            window.location.href = `/${url[url.length - 1]}`
        } else {
            url = Math.random().toString(36).substring(2, 7)
            window.location.href = `/${url}`
        }
    }

    render() {
        return (
            <div className="home-page">
                <div>
                    <h1 style={{ color: "white", textAlign: "center", fontSize: "45px" }}>MICROSOFT ENGAGE 2021</h1>
                    <h2 style={{ color: "white", textAlign: "center", fontWeight: "200" }}>Microsoft teams clone</h2>
                </div>
                <div style={{
                    width: "55%", height: "auto", padding: "120px", minWidth: "400px",
                    textAlign: "center", margin: "auto", marginTop: "50px", justifyContent: "center"
                }}>
                    <div className="action-btn">
                        <Button variant="contained" color="primary" classname="btn" onClick={this.join} >
                            NEW MEETING
                        </Button>
                        <div className="input-block">
                            <div className="input-section">
                                <Input style={{ color: "white" }} placeholder="Enter the URL" onChange={e => this.handleChange(e)} />
                            </div>
                            <Button style={{ color: "white" }} color="primary" onClick={this.join} >JOIN</Button>
                        </div>
                    </div>
                    <p style={{ fontWeight: "bold", color: "white", textAlign: "center" }}>
                        Click "NEW MEETING" to begin a new call
                    </p>
                    <p style={{ fontWeight: "bold", color: "white", textAlign: "center" }}>
                        Enter the URL and Click "JOIN" to join a existing call
                    </p>
                </div>
            </div>
        )
    }
}

export default Home;