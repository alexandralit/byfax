import './reg.scss';
import lang from './lang.js';

const reg = document.createElement('section');
reg.classList.add('reg');

const reg_wrapper = document.createElement('div');
reg_wrapper.classList.add('wrapper');
reg.appendChild(reg_wrapper);

reg_wrapper.insertAdjacentHTML('afterbegin', `
    <div>
        <button class="sign-in">Вход</button>
        <button class="sign-up">Регистрация</button>

        <div class="hamburger-menu">
            <input id="menu-toggle" type="checkbox" />
            <label class="menu-btn" for="menu-toggle">
                <span></span>
            </label>
            <ul class="menu-box">
                <li><a href="#">Главная</a></li>
                <li><a href="#">Возможности</a></li>
                <li><a href="#">Цены</a></li>
                <li><a href="#">Разработчикам</a></li>
            </ul>
        </div>
    </div>
`);

reg_wrapper.appendChild(lang);

export default reg;


