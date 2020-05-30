import React from 'react';
import PropTypes from 'prop-types';

import './BoardForm.scss';
import authData from '../../helpers/data/authData';

class BoardForm extends React.Component {
  static propTypes = {
    saveNewBoard: PropTypes.func.isRequired,
  }

state = {
  boardNameFromUser: '',
  boardDescriptionFromUser: '',
  isEditing: false,
}

componentDidMount() {
  const { board } = this.props;
  if (board.name) {
    this.setState({ boardNameFromUser: board.name, boardDescriptionFromUser: board.description, isEditing: true });
  }
}

saveBoard = (e) => {
  e.preventDefault();
  const { boardDescriptionFromUser, boardNameFromUser } = this.state;
  const { saveNewBoard } = this.props;
  const newBoard = {
    description: boardDescriptionFromUser,
    name: boardNameFromUser,
    uid: authData.getUid(),
  };
  saveNewBoard(newBoard);
}


updateBoard = (e) => {
  e.preventDefault();
  const { board, putBoard } = this.props;
  const { boardNameFromUser, boardDescriptionFromUser } = this.state;
  const updatedBoard = {
    name: boardNameFromUser,
    description: boardDescriptionFromUser,
    uid: authData.getUid(),
  };
  putBoard(board.id, updatedBoard);
}

nameChange = (e) => {
  e.preventDefault();
  this.setState({ boardNameFromUser: e.target.value });
}


descriptionChange = (e) => {
  e.preventDefault();
  this.setState({ boardDescriptionFromUser: e.target.value });
}


render() {
  const { boardNameFromUser, boardDescriptionFromUser, isEditing } = this.state;

  return (
      <div className="BoardForm">
          <form className="col-6 offset-3">
            <div className="form-group">
              <label htmlFor="board-name-from-user">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="board-name"
                  placeholder="Enter Board Name Here"
                  value={boardNameFromUser}
                  onChange={this.nameChange}
                />
            </div>

            <div className="form-group">
              <label htmlFor="board-description-from-user">Description</label>
              <input
                type="text"
                className="form-control"
                id="board-description-from-user"
                placeholder="Enter Board Description Here"
                value={boardDescriptionFromUser}
                onChange={this.descriptionChange}
              />
            </div>
            { isEditing
              ? <button className="btn btn-dark" onClick={this.updateBoard}>Update Board</button>
              : <button className="btn btn-dark" onClick={this.saveBoard}>Save Board</button>

            }

          </form>
        </div>
  );
}
}

export default BoardForm;
