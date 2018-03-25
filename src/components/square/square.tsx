import * as React from 'react';
import {SquareProps, SquareState} from "./types";
import {Color} from "../../model/types";

export class Square extends React.Component<SquareProps, SquareState> {
    constructor(props: SquareProps, state: SquareState) {
        super(props);
        this.state = state;
    }

    componentDidMount() {

        let color: string = 'white';
        if (this.props.color === Color.Black) {
           color = 'grey';
        }

        this.setState({
            styles: {
                backgroundColor: color,
                height: 50,
                width: 50,
                float: 'left'
            }
        });
    }

    render() {
        return (
            <div style={this.state.styles}>{this.props.children}</div>
        );
    }
}