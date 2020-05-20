import React from 'react';
import boardsData from '../../helpers/data/boardsData';
import authData from '../../helpers/data/authData';
import Board from '../Board/Board';

import './BoardContainer.scss';

class BoardContainer extends React.Component {
  state = {
    boards: [],
  }

  componentDidMount() {
    boardsData.getBoardsByUid(authData.getUid())
      .then((boards) => this.setState({ boards }))
      .catch((err) => console.error('unable to get boards ', err));
  }

  render() {
    const { boards } = this.state;
    const makeBoards = boards.map((board) => <Board key={board.id} board={board} />);
    return (
      <div className="BoardContainer">
        <h2>Boards</h2>
        <div className="d-flex flex-wrap">
          {makeBoards}
        </div>
        <h2>Inside your Board Container Component</h2>
      </div>
    );
  }
}

export default BoardContainer;
