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
                piece: {...nullPiece}
            };

            // every 8 squares we need to repeat a color
            if ( x % 8) {
                isWhite = !isWhite;
            }

            newBoard.squares.push({...sqr});
        }
        return newBoard;
    }

    protected initChessGame(): ChessBoard {
        /**
         * x = 2
         * y = 3
         *
         * square_number = x * y
         */

        // Blacks
        this.board.squares[0].piece.type = PieceType.Rook;
        this.board.squares[0].piece.color = Color.Black;

        this.board.squares[1].piece.type = PieceType.Knight;
        this.board.squares[1].piece.color = Color.Black;

        this.board.squares[2].piece.type = PieceType.Bishop;
        this.board.squares[2].piece.color = Color.Black;

        this.board.squares[3].piece.type = PieceType.Queen;
        this.board.squares[4].piece.color = Color.Black;

        this.board.squares[4].piece.type = PieceType.King;
        this.board.squares[4].piece.color = Color.Black;

        this.board.squares[5].piece.type = PieceType.Bishop;
        this.board.squares[5].piece.color = Color.Black;

        this.board.squares[6].piece.type = PieceType.Knight;
        this.board.squares[6].piece.color = Color.Black;

        this.board.squares[7].piece.type = PieceType.Rook;
        this.board.squares[7].piece.color = Color.Black;

        // black pawns
        for (let x: number = 8; x < 16; x++) {
            this.board.squares[x].piece.type = PieceType.Pawn;
            this.board.squares[x].piece.color = Color.Black;
        }

        // Whites
        this.board.squares[56].piece.type = PieceType.Rook;
        this.board.squares[56].piece.color = Color.White;

        this.board.squares[57].piece.type = PieceType.Knight;
        this.board.squares[57].piece.color = Color.White;

        this.board.squares[58].piece.type = PieceType.Bishop;
        this.board.squares[58].piece.color = Color.White;

        this.board.squares[59].piece.type = PieceType.Queen;
        this.board.squares[59].piece.color = Color.White;

        this.board.squares[60].piece.type = PieceType.King;
        this.board.squares[60].piece.color = Color.White;

        this.board.squares[61].piece.type = PieceType.Bishop;
        this.board.squares[61].piece.color = Color.White;

        this.board.squares[62].piece.type = PieceType.Knight;
        this.board.squares[62].piece.color = Color.White;

        this.board.squares[63].piece.type = PieceType.Rook;
        this.board.squares[63].piece.color = Color.White;

        // black pawns
        for (let x: number = 48; x < 56; x++) {
            this.board.squares[x].piece.type = PieceType.Pawn;
            this.board.squares[x].piece.color = Color.White;
        }

        return this.board;
    }

    public newGame() {
        this.board = this.getCleanBoard();
        this.board = this.initChessGame();
    }
}