let turn = 0;
const board = document.getElementById('board');
const span = document.querySelector('.span');
const display = document.querySelector('#display');
const cells = [
    c1 = document.querySelector('.c1'),
    c2 = document.querySelector('.c2'),
    c3 = document.querySelector('.c3'),
    c4 = document.querySelector('.c4'),
    c5 = document.querySelector('.c5'),
    c6 = document.querySelector('.c6'),
    c7 = document.querySelector('.c7'),
    c8 = document.querySelector('.c8'),
    c9 = document.querySelector('.c9')
];
board.addEventListener('click', (e) => {
    let el = e.target;

    TTT.winTest(TTT.drawSymbol(el));
    console.log(el.innerHTML);
});

const TTT = {
    drawSymbol: function(e) {
        let selectTurn = (turn % 2) == 0 ? 'X' : 'O';
        if (!e.classList.contains('clicked')) {
            this.alterInfo(e, selectTurn);
            turn++;
            return selectTurn;
        } else alert('Já foi jogado aí!');
    },
    alterInfo: function(e, selectTurn) {
        e.classList.add('clicked');

        e.innerText = selectTurn;
        span.innerText = selectTurn;
    },
    winTest: function(letter) {
        if (
            (c1.innerHTML === letter) && (c2.innerHTML === letter) && (c3.innerHTML === letter) ||
            (c4.innerHTML === letter) && (c5.innerHTML === letter) && (c6.innerHTML === letter) ||
            (c7.innerHTML === letter) && (c8.innerHTML === letter) && (c9.innerHTML === letter) ||
            (c1.innerHTML === letter) && (c5.innerHTML === letter) && (c9.innerHTML === letter) ||
            (c3.innerHTML === letter) && (c5.innerHTML === letter) && (c7.innerHTML === letter) ||
            (c2.innerHTML === letter) && (c5.innerHTML === letter) && (c8.innerHTML === letter) ||
            (c1.innerHTML === letter) && (c4.innerHTML === letter) && (c7.innerHTML === letter) ||
            (c3.innerHTML === letter) && (c6.innerHTML === letter) && (c9.innerHTML === letter)
        ) {

        }
    }
}