import { _decorator, Component, EventMouse, Node, sp } from 'cc';

import { Card } from './lib';

const { ccclass, property } = _decorator;

@ccclass('LegacyCard')
export class CardManager extends Component {
	@property()
	isPlayerCard = false;
	@property()
	place = 'deck';
	@property()
	index = 0;
	@property(Node)
	hand: Node = null;
	@property(Node)
	ground: Node = null;

	private skeleton: sp.Skeleton = null;
	private cardInfo: Card = null;
	private isFocused = false;
	private isDragging = false;
	private bindingNode: Node = null;

	start(): void {
		this.skeleton = this.getComponent('sp.Skeletal') as sp.Skeleton;
		this.bindingNode = this.hand?.children?.[this.index] || this.hand;

		this.skeleton.findSlot('root/node');
		if (this.isPlayerCard && this.place === 'hand') {
			this.bindMouseEvent();
		}
	}

	bindMouseEvent(): void {
		this.node.on('mouse-enter', this.onMouseEnter.bind(this));
		this.node.on('mouse-leave', this.onMouseLeave.bind(this));
		this.node.on('mouse-down', this.onMouseDown.bind(this));
		this.node.on('mouse-up', this.onMouseUp.bind(this));
		this.node.on('mouse-move', this.onMouseMove.bind(this));
	}

	onMouseEnter(): void {
		this.isFocused = true;

		if (this.place === 'hand') {
			this.node.setPosition(this.node.position.x, this.node.position.y + 32, 0);
		}
	}

	onMouseLeave(): void {
		this.isFocused = false;
		this.isDragging = false;
	}

	onMouseDown(): void {
		this.isFocused = false;
		this.isDragging = true;
	}

	onMouseUp(): void {
		const targetNode = this.ground.children[this.index];

		this.place = 'ground';
		this.isDragging = false;
		this.bindingNode = targetNode;
		this.node.setScale(targetNode.scale.x, targetNode.scale.y);
	}

	onMouseMove(event: EventMouse): void {
		if (this.isDragging) {
			this.node.setRotation(0, 0, 0, 0);

			this.node.setWorldPosition(
				this.node.worldPosition.x + event.movementX,
				this.node.worldPosition.y - event.movementY,
				0,
			);
		}
	}

	setCardInfo(info: Card): void {
		this.cardInfo = info;
	}

	update(delta: number): void {
		if (!this.isFocused && !this.isDragging && this.place !== 'deck') {
			bindWorldPosition(this.node, this.bindingNode, delta);
		}
	}
}

const bindWorldPosition = (from: Node, to: Node, delta: number, speed = 8) => {
	const progress = Math.min(delta * speed, 1);
	const xDiff = to.worldPosition.x - from.worldPosition.x;
	const yDiff = to.worldPosition.y - from.worldPosition.y;

	const xTranslate = xDiff * progress;
	const yTranslate = yDiff * progress;

	from.setWorldPosition(
		from.worldPosition.x + xTranslate,
		from.worldPosition.y + yTranslate,
		0,
	);

	from.setRotation(to.rotation.x, to.rotation.y, to.rotation.z, to.rotation.w);
};
