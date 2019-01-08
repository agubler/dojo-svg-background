import renderer from '@dojo/framework/widget-core/vdom';
import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { v, w } from '@dojo/framework/widget-core/d';
const icon = require('./icon.svg');

class App extends WidgetBase {
	private _color = '#'+Math.floor(Math.random()*16777215).toString(16);
	private _changeColor() {
		this._color = '#'+Math.floor(Math.random()*16777215).toString(16);
		this.invalidate();
	}

	render() {
		return v('div', [
			v('div', [
				v('img', { src: icon, styles: { background: this._color } })
			]),
			v('div', [
				v('button', { onclick: this._changeColor }, [ 'change color' ])
			])
		]);
	}
}

const r = renderer(() => w(App, {}));
r.mount();
