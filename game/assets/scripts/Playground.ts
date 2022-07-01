import { _decorator, Component, sp } from 'cc';

const { ccclass, property } = _decorator;

@ccclass('Playground')
export class Playground extends Component {
	private skeleton: sp.Skeleton = null;

	start() {
		this.skeleton = this.getComponent('sp.Skeleton') as sp.Skeleton;
		console.log(this.skeleton);
		// this.skeleton.getAttachment();
		// const nameSlot = this.skeleton.findSlot('card/front');
		const nameSlot = this.skeleton.getAttachment('card/front', 'card/front');
		console.log(nameSlot, '<-');
	}

	update(deltaTime: number) {}
}
