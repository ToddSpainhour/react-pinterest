import React from 'react';
import PropTypes from 'prop-types';

import boardsData from '../../helpers/data/boardsData';
import authData from '../../helpers/data/authData';
import Board from '../Board/Board';
import smash from '../../helpers/data/smash';
import BoardForm from '../BoardForm/BoardForm';

import './BoardContainer.scss';

class BoardContainer extends React.Component {
  static propTypes = {
    setSingleBoard: PropTypes.func.isRequired,
  }

  state = {
    boards: [],
    formOpen: false,
  }

getAllBoards = () => {
  boardsData.getBoardsByUid(authData.getUid())
    .then((boards) => this.setState({ boards }))
    .catch((err) => console.error('unable to get boards ', err));
}

componentDidMount() {
  this.getAllBoards();
}


removeBoard = (boardId) => {
  smash.completlyRemoveBoard(boardId)
    .then(() => this.getAllBoards())
    .catch((err) => console.error('cannot delete full board', err));
}

render() {
  const { boards, formOpen } = this.state;
  const { setSingleBoard } = this.props;

  const makeBoards = boards.map((board) => <Board key={board.id} board={board} setSingleBoard={setSingleBoard} removeBoard={this.removeBoard}/>);
  return (
    <div className="BoardContainer">
      <h2>Boards</h2>
      <button className="btn btn-success" onClick={() => this.setState({ formOpen: true })}>+</button>
      { formOpen ? <BoardForm /> : ''}
      <div className="d-flex flex-wrap">
        {makeBoards}
      </div>
    </div>
  );
}
}

export default BoardContainer;
