import timer from './modules/timer';
import menu from './modules/menu';
import modal from './modules/modal';
import validate from './modules/validate';
import tabs from './modules/tabs';
import slider from './modules/slider';
import calc from './modules/calc';
import sendForm from './modules/sendForm';

timer('12 january 2022');
menu();
modal();
validate();
tabs();
slider({
  sliderClass: 'portfolio-content',
  slideClass: 'portfolio-item',
  slideActiveClass: 'portfolio-item-active',
  dotsClass: 'portfolio-dots',
  dotClass: 'dot',
  dotActiveClass: 'dot-active',
  arrowsCommonClass: 'portfolio-btn',
  arrowPrevClass: 'prev',
  arrowNextClass: 'next',
  slideTime: 2000
});
calc(100);
sendForm({
  formId: 'form1',
  someElem: [
    {
      type: 'block',
      id: 'total'
    }
  ]
});
sendForm({ formId: 'form2' });
sendForm({ formId: 'form3' });