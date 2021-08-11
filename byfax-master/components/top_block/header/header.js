import './header.scss';
import logo from './../../../img/logo.png';

const header = document.createElement('header');
header.classList.add('header')

header.insertAdjacentHTML('afterbegin', `
    <img src="${logo}" alt="logo" />

    <ul class="social-icons">
        <li><a class="social-icon-twitter" href="#" target="_blank" rel="noopener"></a></li>
        <li><a class="social-icon-facebook" href="#" target="_blank" rel="noopener"></a></li>
        <li><a class="social-icon-vk" href="#" target="_blank" rel="noopener"></a></li>
    </ul>
`);
    
export default header;
