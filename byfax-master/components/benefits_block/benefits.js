import './benefits.scss';
import benefits_icon from './../../img/benefits_icon.png';

const benefits = document.createElement('section');
benefits.classList.add('benefits-block');

benefits.insertAdjacentHTML('afterbegin', `
    <div class="wrapper">
        <div class="text">
            <p><i></i>Что мы предлагаем?</p>
            <h3>Наше предложение</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend ac lectus et bibendum. Donec sed elit at erat placerat lacinia. Maecenas mattis purus id libero sagittis, in tempor lacus ornare. Suspendisse potenti. Vestibulum eleifend diam in nibh bibendum, placerat euismod leo blandit. Nunc elementum justo mauris, sit amet aliquam arcu laoreet in. Maecenas in dignissim diam.</p>
            <button class="sign-up-button">Зарегистрироваться !</button>
        </div>
                
        <div class="block-tabs">
            <ul class="tabs-img">
                <li><img src="${benefits_icon}" alt="image" /></li>
                <li><img src="${benefits_icon}" alt="image" /></li>
                <li><img src="${benefits_icon}" alt="image" /></li>
                <li><img src="${benefits_icon}" alt="image" /></li>
                <li><img src="${benefits_icon}" alt="image" /></li>
                <li><img src="${benefits_icon}" alt="image" /></li>
            </ul>

            <ul class="tabs">
                <li>
                    <h4>Innovation document processing system</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend ac lectus et bibendum. Donec sed elit at erat placerat lacinia.</p>
                </li>
                <li>
                    <h4>Innovation document processing system</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend ac lectus et bibendum. Donec sed elit at erat placerat lacinia.</p>
                </li>
                <li>
                    <h4>Innovation document processing system</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend ac lectus et bibendum. Donec sed elit at erat placerat lacinia.</p>
                </li>
                <li>
                    <h4>Innovation document processing system</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend ac lectus et bibendum. Donec sed elit at erat placerat lacinia.</p>
                </li>
                <li>
                    <h4>Innovation document processing system</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend ac lectus et bibendum. Donec sed elit at erat placerat lacinia.</p>
                </li>
                <li>
                    <h4>Innovation document processing system</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend ac lectus et bibendum. Donec sed elit at erat placerat lacinia.</p>
                </li>
            </ul>
        </div>
    </div>
`);

export default benefits;