import {SquareProps} from "../square/types";

export interface BoardProps {
    id: number;
    width: number;
    height: number;
}

export interface BoardState {
    style: {
        border: string;
        width: number;
        height: number;
    };
    squares: Array<SquareProps>;
}