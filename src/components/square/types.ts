import {CSSProperties} from "react";
import {Square} from "../../model/types";

export interface SquareProps extends Square {}

export interface SquareStyles extends CSSProperties {}

export interface SquareState {
    styles: SquareStyles;
}
