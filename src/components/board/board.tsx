import * as React from 'react';
import {BoardProps, BoardState} from "./types";
import {SquareProps} from "../square/types";
import {Square} from "../square/square";

export class Board extends React.Component<BoardProps, BoardState> {

    constructor(props: BoardProps, state: BoardState) {
        super(props);
        this.state = state;
    }

    componentDidMount() {

        let squares: Array<SquareProps> = [];

        // init 64 squares
        let isWhite: boolean = true;
        let color: string = 'white';
        for (let x: number = 1; x <= 64; x++) {

            if (isWhite === false) {
                color = 'black';
            } else {
                color = 'white';
            }

            if ( x % 8) {
                isWhite = !isWhite;
            }

            squares.push({
                color: color,
                id: x + 1
            });
        }

        this.setState({
            style: {
                width: this.props.width,
                height: this.props.height,
                border: '1px solid black'
            },
            squares: squares
        });
    }

    render() {
        return (
            <div
                style={this.state.style}
            >
                {
                    this.state.squares ?
                        this.state.squares.map((sq, index) => {
                            return (
                                <Square id={sq.id} color={sq.color} key={index.toString()}/>
                            );
                        }) : []
                }
            </div>
        );
    }
}