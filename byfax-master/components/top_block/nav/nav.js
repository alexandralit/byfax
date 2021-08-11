import './nav.scss';

const nav = document.createElement('nav');

nav.insertAdjacentHTML('afterbegin', `
    <ul>
        <li><a href="#">Главная</a></li>
        <li><a href="#">Возможности</a></li>
        <li><a href="#">Цены</a></li>
        <li><a href="#">Разработчикам</a></li>
    </ul>
`);

export default nav;
