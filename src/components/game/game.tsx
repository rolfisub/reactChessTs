import * as React from 'react';
import {ChessGame} from "../../model/game";
import {Board} from "../board/board";

interface GameProps {
    game: ChessGame;
}

export class GameContainer extends React.Component<GameProps> {

    constructor(props: GameProps) {
        super(props);
        this.props.game.newGame();
    }

    render() {
        return(
            <Board id={1} squares={this.props.game.board.squares}/>
        );
    }
}