import {CSSProperties} from "react";
import {ChessBoard} from "../../model/types";

export interface BoardProps extends ChessBoard {
    id: number;
}

export interface BoardStyle extends CSSProperties {

}

export interface BoardState extends ChessBoard {
    styles: BoardStyle;
}