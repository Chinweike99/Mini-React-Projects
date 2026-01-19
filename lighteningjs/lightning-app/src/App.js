import { Lightning } from '@lightningjs/sdk';
import TodoList from './components/TodoList';

const TODOS = [
  { id: 1, title: 'Learn LightningJS', done: false },
  { id: 2, title: 'Build TV apps', done: false },
  { id: 3, title: 'Get paid', done: false },
  { id: 4, title: 'LightningJS', done: false },
  { id: 5, title: 'Build apps', done: false },
  { id: 6, title: 'Paid', done: false },
];

export default class App extends Lightning.Component {
  static _template() {
    return {
      rect: true,
      color: 0xff1e1e1e,
      w: 1940,
      h: 1080,

      Title: {
        x: 960,
        y: 150,
        mount: 0.5,
        text: {
          text: 'Learning Lightning by building Todo App',
          fontSize: 64,
          textColor: 0xffffffff,
        },
      },

      TodoList: {
        x: 560,
        y: 300,
        type: TodoList,
        items: TODOS,
      },
    };
  }

  _getFocused() {
    return this.tag('TodoList');
  }
}
