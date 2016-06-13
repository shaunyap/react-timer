var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Timer = require('Timer');

describe('Timer', () => {
    it('should exist', () => {
        expect(Timer).toExist();
    });

    describe('startTimer', () => {
      it('Should set state to started and start timing', (done) => {
        var timer = TestUtils.renderIntoDocument(<Timer/>);
        timer.handleSetTimer();
        timer.startTimer();

        expect(timer.state.timerStatus).toBe('started');

        setTimeout(() => {
            expect(timer.state.count).toBe(1);
            done();
        }, 1001);
      });

      it('Should set state to pause and pause timing', () => {
        var timer = TestUtils.renderIntoDocument(<Timer/>);
        timer.setState({count: 10});
        timer.handleStatusChange('started');
        timer.handleStatusChange('paused');

        setTimeout(() => {
            expect(timer.state.count).toBe(10);
            done();
        }, 1001);
      });

      it('Should clear timer', () => {
        var timer = TestUtils.renderIntoDocument(<Timer/>);
        timer.setState({count: 10});
        timer.handleStatusChange('started');
        timer.handleStatusChange('stopped');

        setTimeout(() => {
            expect(timer.state.count).toBe(0);
            expect(timer.state.timerStatus).toBe('stopped');
            done();
        }, 1001);
      });
    });
});
