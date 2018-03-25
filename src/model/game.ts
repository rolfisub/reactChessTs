import {ChessBoard, Color, Piece, PieceType, Square} from "./types";

interface ChessOptions {

}

export class ChessGame {

    protected options: ChessOptions;
    public board: ChessBoard;

    constructor(options: ChessOptions) {
        this.options = options;
    }

    protected getCleanBoard(): ChessBoard {
        // reset all squares
        let newBoard: ChessBoard = {
            squares: []
        };

        // init 64 squares
        let isWhite: boolean = true;
        let color: Color;
        let nullPiece: Piece = {
            color: Color.Null,
            type: PieceType.Null
        };
        for (let x: number = 1; x <= 64; x++) {
            color = isWhite ? Color.White : Color.Black;

            let sqr: Square = {
                color: color,
                piece: nullPiece
            };

            // every 8 squares we need to repeat a color
            if ( x % 8) {
                isWhite = !isWhite;
            }

            newBoard.squares.push(sqr);
        }
        return newBoard;
    }

    public newGame() {
        this.board = this.getCleanBoard();
    }
}