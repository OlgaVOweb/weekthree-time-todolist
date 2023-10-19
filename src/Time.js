import { Component } from "react";

export default class Time extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todayday: new Date().toLocaleDateString(),
            weekday:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
            time: new Date().toLocaleTimeString(),
            date: new Date().getDay()
        }
    }
    
    componentDidMount(){
        this.timerID = setInterval(() =>
        this.tick(), 1000)
    }
    
    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    tick() {
        this.setState({
            time: new Date().toLocaleTimeString(),
            todayday: new Date().toLocaleDateString()
        })
    }

    render(){
        return(
            <div className="Today">
                <p>{this.state.todayday}</p>
                <p>{this.state.weekday[this.state.date]}</p>
                <p>{this.state.time}</p>
            </div>
        )
        }
    }