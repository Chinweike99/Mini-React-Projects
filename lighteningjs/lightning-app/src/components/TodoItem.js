import { Lightning } from '@lightningjs/sdk';

export default class TodoItem extends Lightning.Component {
  static _template() {
    return {
      w: 800,
      h: 70,
      rect: true,
      color: 0xff2a2a2a,

      Label: {
        x: 20,
        y: 35,
        mountY: 0.5,
        text: {
          text: '',
          fontSize: 28,
          textColor: 0xffffffff,
        },
      },

      Check: {
        x: 740,
        y: 35,
        mount: 0.5,
        text: {
          text: '',
          fontSize: 28,
          textColor: 0xff00ff00,
        },
      },
    };
  }

  set item(todo) {
    console.log('TodoItem.item setter called with:', todo);
    this._todo = todo;
    this.tag('Label').text.text = todo.title;
    console.log('Set label text to:', todo.title);
    this._updateCheck();
  }

  _updateCheck() {
    this.tag('Check').text.text = this._todo.done ? '✔' : '';
  }

  toggle() {
    this._todo.done = !this._todo.done;
    this._updateCheck();
  }

  _focus() {
    this.color = 0xff0055aa;
  }

  _unfocus() {
    this.color = 0xff2a2a2a;
  }
}
