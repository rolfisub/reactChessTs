import * as React from 'react';
import {BoardProps, BoardState} from "./types";
import {SquareProps} from "../square/types";
import {Square} from "../square/square";
import {Piece} from "../piece/piece";
import {Color, PieceType} from "../../model/types";

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
                color = 'grey';
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
                                <Square {...sq} key={index.toString()}>
                                    <Piece color={Color.Black} type={PieceType.Rook}/>
                                </Square>
                            );
                        }) : []
                }
                <Piece color={Color.Black} type={PieceType.King} />
                <Piece color={Color.Black} type={PieceType.Queen} />
                <Piece color={Color.Black} type={PieceType.Bishop} />
                <Piece color={Color.Black} type={PieceType.Knight} />
                <Piece color={Color.Black} type={PieceType.Rook} />
                <Piece color={Color.Black} type={PieceType.Pawn} />

                <Piece color={Color.White} type={PieceType.King} />
                <Piece color={Color.White} type={PieceType.Queen} />
                <Piece color={Color.White} type={PieceType.Bishop} />
                <Piece color={Color.White} type={PieceType.Knight} />
                <Piece color={Color.White} type={PieceType.Rook} />
                <Piece color={Color.White} type={PieceType.Pawn} />
            </div>
        );
    }
}