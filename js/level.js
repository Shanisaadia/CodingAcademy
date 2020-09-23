
'use strict';


// Connect to init to start a new game with the selected values - TODO
function onClick(elBtn) {

    console.log(elBtn.id);

    switch (elBtn.id) {
        case 'easy':
            gLevel.SIZE = 4;
            gLevel.MINES = 2;
            break;
        case 'hard':
            gLevel.SIZE = 6;
            gLevel.MINES = 4;
            break;
        case 'extreme':
            gLevel.SIZE = 8;
            gLevel.MINES = 6;
            break;
    }
}