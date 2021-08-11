import './footer.scss';
import logo from './../../img/logo_footer.png';

const footer = document.createElement('footer');
const footer_wrapper = document.createElement('div');
footer_wrapper.classList.add('wrapper');

footer_wrapper.insertAdjacentHTML('afterbegin', `
    <img src="${logo}" alt="logo" />

    <div class="text">
        <p>копирайт</p>
        <p>Политика безопастности&#8195;&#10072;&#8195;</p>
        <p>Правила пользования</p>
    </div>

    <ul class="social-icons">
        <li><a class="social-icon-twitter" href="#" target="_blank" rel="noopener"></a></li>
        <li><a class="social-icon-facebook" href="#" target="_blank" rel="noopener"></a></li>
        <li><a class="social-icon-vk" href="#" target="_blank" rel="noopener"></a></li>
    </ul>
`);

footer.appendChild(footer_wrapper);

export default footer;