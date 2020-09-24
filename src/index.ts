import {fromEvent} from 'rxjs';

let button = document.getElementById('button');
if (button) {
    fromEvent(button, 'click').subscribe(() => {
        console.log('Clicked!');
    });
}
