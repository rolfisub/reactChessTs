import * as React from 'react';
import {PieceProps, PieceState, PieceStyle} from "./types";
import {Color, PieceType} from "../../model/types";

export class Piece extends React.Component<PieceProps, PieceState> {
    constructor(props: PieceProps, state: PieceState) {
        super(props, state);
        this.state = state;
        this.getUrlImageStringFromProps = this.getUrlImageStringFromProps.bind(this);
    }

    getUrlImageStringFromProps(): string {
        let topImg: number;
        let leftImg: number;
        let offset: number = 50;

        if (this.props.color === Color.Null && this.props.type === PieceType.Null) {
            return '';
        }

        if (this.props.color === Color.White) {
            topImg = 0;
        } else {
            topImg = 0;
            topImg += offset;
        }

        switch (this.props.type) {
            case PieceType.King: {
                leftImg = 0;
                break;
            }
            case PieceType.Queen: {
                leftImg = 0;
                leftImg += offset;
                break;
            }
            case PieceType.Bishop: {
                leftImg = 0;
                leftImg += (offset * 2);
                break;
            }
            case PieceType.Knight: {
                leftImg = 0;
                leftImg += (offset * 3);
                break;
            }
            case PieceType.Rook: {
                leftImg = 0;
                leftImg += (offset * 4);
                break;
            }
            case PieceType.Pawn: {
                leftImg = 0;
                leftImg += (offset * 5);
                break;
            }
            default: {
                leftImg = 0;
            }
        }

        let url: string = 'url(media/chess_pieces.png) -' + leftImg + 'px ' + topImg + 'px';
        return url;
    }

    componentDidMount() {

        // init common properties
        let pieceStyle: PieceStyle = {
            position: 'relative',
            float: 'left',
            zIndex: 1000,
            width: 50,
            height: 50
        };

        pieceStyle.background = this.getUrlImageStringFromProps();

        this.setState({
            styles: pieceStyle
        });
    }

    render () {
        return (<div style={this.state.styles} />);
    }
}