export enum Color {
    White,
    Black,
    Null
}

export enum PieceType {
    King,
    Queen,
    Bishop,
    Knight,
    Rook,
    Pawn,
    Null
}

export interface SquarePos {
    x: number;
    y: number;
}

export interface Move {
    from: SquarePos;
    to: SquarePos;
}

export interface Piece {
    color: Color;
    type: PieceType;
    move_available?: Array<Move>;
    move_available_count?: number;
    move_history?: Array<Move>;
    move_history_count?: number;
}

export interface Square {
    piece: Piece,
    color: Color
}

export interface ChessBoard {
    squares: Array<Square>
}

