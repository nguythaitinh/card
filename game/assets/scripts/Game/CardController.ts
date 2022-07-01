import {
	_decorator,
	Animation,
	Component,
	Node,
	resources,
	RichText,
	Sprite,
	SpriteFrame,
	UITransform,
} from 'cc';

import { Card, ClassMap } from '../lib';
import { bindWorldPosition } from '../lib/util';

export enum CardPlace {
	Deck,
	Hand,
	Ground,
}

const { ccclass, property } = _decorator;

@ccclass('CardController')
export class CardController extends Component {
	@property(Node)
	hand: Node = null;

	private info: Card = null;
	private place: CardPlace = CardPlace.Ground;
	private binding: Node = null;
	private isFocused = false;

	start(): void {
		this.node.getChildByPath('root/back').active = true;

		if (this.hand.name === 'Player Hand') {
			this.bindMouseEvent();
		}
	}

	update(delta: number): void {
		if (this.place === CardPlace.Hand && !this.isFocused) {
			bindWorldPosition(this.node, this.binding, delta);
		}
	}

	setCardInfo(info: Card): void {
		const nameNode = this.node.getChildByPath('root/front/name');
		const descNode = this.node.getChildByPath('root/front/description');
		const cardName = nameNode.getComponent('cc.RichText') as RichText;
		const cardDesc = descNode.getComponent('cc.RichText') as RichText;
		const visualUri = info.visualUri || 'empty';

		cardName.string = `<color=DEDEDE><bold>${info.name || info.id} [${
			'Spell' || ClassMap[info.class]
		}]</bold></color>`;
		cardDesc.string = `<color=888888>${info.skill}</color>`;
		this.loadVisual(`graphics/characters/${visualUri}/spriteFrame`);

		this.info = info;
	}

	loadVisual(url: string): void {
		const visualNode = this.node.getChildByPath('root/front/visual');
		const cardUi = visualNode.getComponent('cc.UITransform') as UITransform;
		const cardVisual = visualNode.getComponent('cc.Sprite') as Sprite;

		resources.load(url, (err, spriteFrame: SpriteFrame) => {
			if (!err) {
				const { width, height } = spriteFrame.originalSize;

				cardUi.setContentSize(280, 280 / (width / height));
				cardVisual.spriteFrame = spriteFrame;
			}
		});
	}

	setPlace(place: CardPlace, index: number): void {
		const placeChanged = place !== this.place;

		if (placeChanged && place === CardPlace.Hand) {
			this.place = place;
			this.binding = this.hand.children[index];

			if (this.hand.name === 'Player Hand') {
				const root = this.node.getChildByPath('root');
				const animation = root.getComponent('cc.Animation') as Animation;

				animation.play('card-flip');
			}
		}
	}

	bindMouseEvent(): void {
		this.node.on('mouse-enter', this.onMouseEnter.bind(this));
		this.node.on('mouse-leave', this.onMouseLeave.bind(this));
	}

	onMouseEnter(): void {
		this.isFocused = true;

		if (this.place === CardPlace.Hand) {
			const { x, y } = this.node.position;
			this.node.setPosition(x, y + 32, 0);
		}
	}

	onMouseLeave(): void {
		this.isFocused = false;
	}
}
