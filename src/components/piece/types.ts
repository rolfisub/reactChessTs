import {CSSProperties} from "react";

export enum PieceColor {
    White,
    Black
}

export enum PieceType {
    King,
    Queen,
    Bishop,
    Knight,
    Rook,
    Pawn
}

export interface PieceProps {
    color: PieceColor;
    type: PieceType;
}

export interface PieceState {
    styles: PieceStyle;
}

export interface PieceStyle extends CSSProperties {

}