import * as React from 'react';
import {SquareProps, SquareStyle} from "./types";

export class Square extends React.Component<SquareProps, SquareStyle> {
    constructor(props: SquareProps, state: SquareStyle) {
        super(props);
        this.state = state;
    }

    componentDidMount() {
        this.setState({
            backgroundColor: this.props.color,
            height: 50,
            width: 50,
            float: 'left'
        });
    }

    render() {
        return (
            <div style={this.state} />
        );
    }
}