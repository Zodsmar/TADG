Config.history.controls = false;

$(document).on('keydown', function (ev) {
    switch (ev.which) {
    case 49: // top row 1
        $('[data-passage="Attack"]').trigger('click');
        break;
    case 50: // top row 2
        $('[data-passage="Potion"]').trigger('click');
        break;
    case 51: // top row 3
        $('[data-passage="Game Generation"]').trigger('click');
        break;
    case 52: // top row 4
        $('[data-passage="Stats"]').trigger('click');
        break;
    case 32: // spacebar
        $('[data-passage="passageName"]').trigger('click');
        break;
    case 27: // escape
        $('[data-passage="passageName"]').trigger('click');
        break;
    }
});