import * as React from 'react';
import {BoardProps, BoardState} from "./types";
import {Square} from "../square/square";
import {Piece} from "../piece/piece";
import {Color, PieceType} from "../../model/types";

export class Board extends React.Component<BoardProps, BoardState> {

    constructor(props: BoardProps, state: BoardState) {
        super(props);
        this.state = state;
    }

    componentDidMount() {
        this.setState({
            styles: {
                width: 400,
                height: 400,
                border: '1px solid black'
            },
            squares: this.props.squares
        });
    }

    render() {
        return (
            <div
                style={this.state.styles}
            >
                {
                    this.state.squares ?
                        this.state.squares.map((sq, index) => {
                            return (
                                <Square {...sq} key={index.toString()}>
                                    <Piece color={sq.piece.color} type={sq.piece.type}/>
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