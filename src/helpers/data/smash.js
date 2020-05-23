import boardData from './boardsData';
import pinData from './pinsData';

const completlyRemoveBoard = (boardId) => new Promise((resolve, reject) => {
  // step 1: delete the board
  boardData.deleteBoard(boardId)
    .then(() => {
    // step 2: get all pins by boardId
      pinData.getPinsByBoardId(boardId)
        .then((pins) => {
          // step 3: loop over pins and delete each pinId
          pins.forEach((pin) => pinData.deletePin(pin.id));
          resolve();
        });
    })
    .catch((err) => reject(err));
});

export default { completlyRemoveBoard };
