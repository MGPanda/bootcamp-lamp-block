/*Dado el siguiente javascript, tipa todas sus variables.
```js

const a = 10;

const b = true;

const c = 'Pepe';

const d = [1,2,3,4,5];

const e = ['Pepe', 'Pepa'];

let abc = 5;

abc = 'Cinco';

```*/

const a: number = 10;
const b: boolean = true;
const c: string = 'Pepe';
const d: number[] = [1,2,3,4,5];
const e: string[] = ['Pepe', 'Pepa'];
let abc: any = 5;
abc = 'Cinco';

/*Crea una sola interface que cumpla las condiciones de las siguientes variables y asigna la interfaz a estas variables.



```js

const cat = {​​name: 'Gris', age: 2, race: 'Azul ruso'}​​

const cat2 = {​​name: 'Yuna', age: 5, race: 'Siamés', color: 'white'}​​

```*/

interface Cat {
    name: string;
    age: number;
    race: string;
    color?: string;
}

const cat: Cat = {name: 'Gris', age: 2, race: 'Azul ruso'};
const cat2: Cat = {name: 'Yuna', age: 5, race: 'Siamés', color: 'white'};

/*Crea dos interfaces, una para Robot y otra para Battle. Asigna las interfaces de manera correcta a las variables siguientes.



```js

const robot = {​​name: 'Mazinger Y', madeIn: 'Japan', battles: []}​​;

const robot2 = {​​name: 'Ragnarok', madeIn: 'China', battles: [{​​city: 'Madrid', win: true }​​, {​​city: 'New York', win: false }​​]}​​;

```*/

interface Robot {
    name: string;
    madeIn: string;
    battles: Battle[];
}

interface Battle {
    city: string;
    win: boolean;
}

const robot = {name: 'Mazinger Y', madeIn: 'Japan', battles: []};
const robot2 = {name: 'Ragnarok', madeIn: 'China', battles: [{city: 'Madrid', win: true}, {city: 'New York', win: false}]}