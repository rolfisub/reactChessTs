import {CSSProperties} from "react";
import {Piece} from "../../model/types";

export interface PieceProps extends Piece {

}
export interface PieceStyle extends CSSProperties {

}
export interface PieceState {
    styles: PieceStyle;
}