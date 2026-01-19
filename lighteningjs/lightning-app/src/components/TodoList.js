import { Lightning } from '@lightningjs/sdk';
import TodoItem from './TodoItem';

export default class TodoList extends Lightning.Component {
  static _template() {
    return {
      w: 800,
      h: 600,
      Items: {},
    };
  }

  _init() {
    this._index = 0;
    if (this._pendingTodos) {
      this._setItems(this._pendingTodos);
      this._pendingTodos = null;
    }
  }

  set items(todos) {
    console.log('TodoList.items setter called with:', todos);
    this._todos = todos;
    
    if (this.tag('Items')) {
      this._setItems(todos);
    } else {
      this._pendingTodos = todos;
    }
  }

  _setItems(todos) {
    this.tag('Items').children = todos.map((todo, i) => ({
      type: TodoItem,
      y: i * 90,
      item: todo,
    }));
    console.log('Created children:', this.tag('Items').children);
  }

  _getFocused() {
    return this.tag('Items').children[this._index];
  }

  _handleUp() {
    if (this._index > 0) {
      this._index--;
    }
  }

  _handleDown() {
    if (this._index < this._todos.length - 1) {
      this._index++;
    }
  }

  _handleEnter() {
    this._getFocused().toggle();
  }
}
