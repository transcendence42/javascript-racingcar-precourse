class Car {
    constructor (name) {
        this._name = name;
        this._score = 0;
    }

    runDice() {
        let ret = Math.random() * 9;
        if (ret >= 4) {
            _score += 1;
        }
    }
}

export default class RacingCarGame {
    constructor() {
        this._array = new Array();
        this._inputNum = 0;
        this._repetNum = 0;

        let inputElements = document.getElementsByTagName('input');
        let buttonElements = document.getElementsByTagName('button');
        
        inputElements[0].setAttribute('id', '#car-names-input');
        inputElements[1].setAttribute('id', '#racing-count-input');
        buttonElements[0].setAttribute('id', '#car-names-submit');
        buttonElements[1].setAttribute('id', '#racing-count-submit');
    }

    setNames(param) {
        let userInputNames = document.getElementById('#car-names-input').value;
        let names = userInputNames.split(',');
        let checkNames = elems =>  {
            let result = true;
            elems.forEach(function (item) {
                if (item.length > 5) {
                    result = false;
                }
            })
            return result;
        }

        if (checkNames(names) === false) {
            alert('잘못된 입력입니다.');
            document.getElementById('#car-names-input').value = '';
        }
        else {
            names.forEach((item) => {
                param._array.push(new Car(item));
            });
        }
        console.log(param._array);
    }

    setNum(event) {
        let userInputNum = document.getElementById('#racing-count-input').value;
        let checkNum = (num) => !isNaN(num);

        if (checkNum(userInputNum) == false) {
            alert('잘못된 입력입니다.');
            document.getElementById('#racing-count-input').value = '';
        }
        else {
            this._inputNum = userInputNum;
        }
    }
}

let racing = new RacingCarGame();
setConfig(racing);

function setConfig(param) {
    let nameBtn = document.getElementById('#car-names-submit');
    let numBtn = document.getElementById('#racing-count-input');

    nameBtn.addEventListener('click', function(){param.setNames(param)});
    numBtn.addEventListener('click', function(){param.setNum()});
}