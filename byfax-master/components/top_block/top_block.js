import './top_block.scss';
import header from './header/header.js';
import nav from './../top_block/nav/nav.js'
import send_fax from './send_fax/send_fax.js';

const container = document.createElement('div');
container.classList.add('container');

const wrapper = document.createElement('div');
wrapper.classList.add('wrapper');

container.appendChild(wrapper);
wrapper.appendChild(header);

const social_icons = document.querySelector('.social-icons');
header.insertBefore(nav, social_icons);

wrapper.appendChild(send_fax);
    
export default container;
