import React, { Component } from "react";

class FixSyntaxErrorsClassCounter extends Component {

    state = {
        count: 0
    };

    componentDidUpdate(prevProps, prevState) {
        console.log("prevState", prevState);

        if (this.state.count !== prevState.count) {
            console.log(`Count has been updated to: ${this.state.count}`);
        }
    }

    incrementCount = () => {
        this.setState({
            count: this.state.count + 1
        });
    };


    render() {
        return (
            <div className="fix-counter">
                <h3 data-testid='title' tabIndex={0}>Counter:</h3>
                <p data-testid='count' tabIndex={0} /*aria-label={`Current count: ${count}`}*/>Current Count: {this.state.count}</p>
                <button data-testid='button' onClick={this.incrementCount} aria-label="Increase counter button.">Increment Count</button>
            </div>
        );
    }
}
export default FixSyntaxErrorsClassCounter;
