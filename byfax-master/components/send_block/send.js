import './send.scss';
import img1 from './../../img/instructions_1.png';
import img2 from './../../img/instructions_2.png';
import img3 from './../../img/instructions_3.png';
import img4 from './../../img/instructions_4.png';
import arrow from './../../img/arrow_instructions.png';

const how_to_send = document.createElement('section');
how_to_send.classList.add('how-to-send');

how_to_send.insertAdjacentHTML('afterbegin', `
    <div class="wrapper">
        <h1>Как отправить факс?</h1>
        <p>Нужно лишь несколько простых действий</p>
                
        <div class="how-to-send-manual">
            <div>
                <img src="${img1}" alt="image" />
                <h3>Зарегистрироваться и войти</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend ac et bibendum.</p>
            </div>

            <img class="arrow" src="${arrow}" alt="arrow" />
        
            <div>
                <img src="${img2}" alt="image" />
                <h3>Загрузить документ </br>и ввести номер</h3>
                <p>Lorem ipsum dolor sit amet, consectetur lit. Sed eleifend ac lectus et bibendum.</p>
            </div>

            <img class="arrow" src="${arrow}" alt="arrow" />

            <div>
                <img src="${img3}" alt="image" />
                <h3>Подождать и посмотреть</h3>
                <p>Lorem ng elit. Sed es et bleifend bibendum. Lorem ng elit. Sed es et bleifend bibendum.</p>
            </div>

            <img class="arrow" src="${arrow}" alt="arrow" />

            <div>
                <img src="${img4}" alt="image" />
                <h3>Забыть о </br>факс-машине</h3>
                <p>Lorgfbfbfdfvibendum. </br>Donec sed elit at erat placerat lacidv  nia.</p>
            </div>
        </div>
    </div>
`);

export default how_to_send;


