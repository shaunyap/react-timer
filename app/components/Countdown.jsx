var React = require('react');
var {Link} = require('react-router');
var Clock = require('Clock')

var Countdown = () => {
    return (
        <div>
            <Clock totalSeconds={129}/>
        </div>
    );
}

module.exports = Countdown;
