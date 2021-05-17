import React from 'react';

class Timer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            minuteMain : 0,
            seconds : 0,
        }
        console.log("onTimer: "+this.props.value);
    }
    
    countdown = ()=>{
        let minute = 0;
        let sec = 1;
        console.log(minute+":"+sec);
        var interval = setInterval(() => {
            this.setState({minuteMain: minute, seconds : sec})
            // console.log(minute+":"+sec);
            if (sec === 60){
                minute +=1;
                sec = 0;
            }
            sec += 1;
            if(minute === 3)
                clearInterval(interval);
        }, 100)
    }


    render(){
        return (
            <div>
                <span className = "timer-block">{this.state.minuteMain}:{this.state.seconds}</span>
            </div>
        )
    }
}


export default Timer;