import React from 'react';

import PropTypes from 'prop-types';

import './PinForm.scss';

import authData from '../../helpers/data/authData';

class PinForm extends React.Component {
  static propTypes = {
    boardId: PropTypes.string.isRequired,
  }

state = {
  pinNameFromUser: '',
  pinImageUrlFromUser: '',
}

pinNameChange = (e) => {
  e.preventDefault();
  this.setState({ pinNameFromUser: e.target.value });
}

pinImageUrlChange = (e) => {
  e.preventDefault();
  this.setState({ pinImageUrlFromUser: e.target.value });
}

savePin = (e) => {
  e.preventDefault();
  const { pinNameFromUser, pinImageUrlFromUser } = this.state;
  const { boardId } = this.props;
  const newPin = {
    boardId,
    imageUrl: pinImageUrlFromUser,
    title: pinNameFromUser,
    uid: authData.getUid(),
  };
  console.error('your new pin is ', newPin);
}

render() {
  const { pinNameFromUser, pinImageUrlFromUser } = this.state;
  return (
    <div className="PinForm">
          <form className="col-6 offset-3">
            <div className="form-group">
              <label htmlFor="pin-name-from-user">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="pin-name-from-user"
                  placeholder="Enter Pin Name Here"
                  value={pinNameFromUser}
                  onChange={this.pinNameChange}
                />
            </div>

            <div className="form-group">
              <label htmlFor="pin-image-url-from-user">Description</label>
              <input
                type="text"
                className="form-control"
                id="pin-image-url-from-user"
                placeholder="Enter Board Description Here"
                value={pinImageUrlFromUser}
                onChange={this.pinImageUrlChange}
              />
            </div>

              <button className="btn btn-dark" onClick={this.savePin}>Save Board</button>
          </form>
    </div>
  );
}
}

export default PinForm;
