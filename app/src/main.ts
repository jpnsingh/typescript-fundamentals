import {sayHello} from './greet';

console.log(sayHello('TypeScript'));

function showHello(divName: string, name: string) {
    const el = document.getElementById(divName);
    el.innerText = sayHello(name);
}

showHello('greeting', 'TypeScript');
