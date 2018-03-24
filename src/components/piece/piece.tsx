import * as React from 'react';
import {PieceColor, PieceProps, PieceState, PieceStyle, PieceType} from "./types";

export class Piece extends React.Component<PieceProps, PieceState> {
    constructor(props: PieceProps, state: PieceState) {
        super(props, state);
        this.state = state;

        this.getPositionStyleFromProps = this.getPositionStyleFromProps.bind(this);
        this.getUrlImageStringFromProps = this.getUrlImageStringFromProps.bind(this);
    }

    getPositionStyleFromProps(currentStyle: PieceStyle): PieceStyle {
        let pieceStyle: PieceStyle = currentStyle;
        let offset: number = 50;
        pieceStyle.left = 0;
        pieceStyle.top = 0;
        pieceStyle.left += (offset * this.props.position.x);
        pieceStyle.top += (offset * this.props.position.y);
        return pieceStyle;
    }

    getUrlImageStringFromProps(): string {
        let topImg: number;
        let leftImg: number;
        let offset: number = 50;

        if (this.props.color === PieceColor.White) {
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

        let url: string = 'url(/media/chess_pieces.png) ' + topImg + ' ' + leftImg;
        return url;
    }

    componentDidMount() {

        // init empty
        let pieceStyle: PieceStyle = {
            position: 'absolute',
            zIndex: 1000,
            backgroundColor: 'red'
        };

        pieceStyle.background = this.getUrlImageStringFromProps();
        pieceStyle = this.getPositionStyleFromProps(pieceStyle);

        this.setState({
            styles: pieceStyle
        });
    }

    render () {
        return (<div style={this.state.styles} />);
    }
}