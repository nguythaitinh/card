import { CardState } from '@cocrafts/engine-card';
import {
	_decorator,
	Animation,
	Component,
	resources,
	RichText,
	Sprite,
	SpriteFrame,
	tween,
	UITransform,
	Vec3,
} from 'cc';

import { AngledPosition } from './lib/types';

const { ccclass } = _decorator;

interface Props {
	isPlayerCard?: boolean;
	card?: CardState;
	animation?: Animation;
}

@ccclass('CardManager')
export class CardManager extends Component {
	props: Props = {};

	onLoad(): void {
		const root = this.node.getChildByPath('root');

		this.node.getChildByPath('root/back').active = true;
		this.props.animation = root.getComponent('cc.Animation') as Animation;
	}

	start(): void {
		if (this.props.isPlayerCard) {
			// this.props.animation.play('card-flip');
		}
	}

	flipTo(firstDest: AngledPosition, secondDest?: AngledPosition): void {
		const root = this.node.getChildByPath('root');
		const animation = root.getComponent('cc.Animation') as Animation;

		this.node.active = false;
		animation.getState('card-flip').speed = 1.5;
		animation.play('card-flip');

		const animator = tween(this.node)
			.to(
				0,
				{ scale: new Vec3(0.42, 0.32) },
				{
					onComplete: () => {
						this.node.active = true;
					},
				},
			)
			.to(
				1,
				{
					position: firstDest.position,
					scale: new Vec3(0.6, 0.6),
				},
				{ easing: 'cubicInOut' },
			);

		if (secondDest) {
			animator.delay(3).to(
				0.5,
				{
					position: secondDest.position,
					scale: new Vec3(0.5, 0.5),
					angle: secondDest.angle,
				},
				{ easing: 'cubicInOut' },
			);
		}

		animator.start();
	}

	moveTo(destination: AngledPosition): void {
		tween(this.node)
			.to(0, {
				scale: new Vec3(0.3, 0.25),
			})
			.to(1, {
				position: destination.position,
				scale: new Vec3(0.35, 0.35),
				angle: destination.angle,
			})
			.start();
	}

	setCard(card: CardState, isPlayerCard: boolean): void {
		this.props.card = card;
		this.props.isPlayerCard = isPlayerCard;

		this.draw();
	}

	draw(): void {
		const { card } = this.props;
		const nameNode = this.node.getChildByPath('root/front/name');
		const descNode = this.node.getChildByPath('root/front/description');
		const cardName = nameNode.getComponent('cc.RichText') as RichText;
		const cardDesc = descNode.getComponent('cc.RichText') as RichText;
		const visualUri = card.base.visualUri || 'empty';

		cardDesc.string = `<color=888888>${card.base.skill.desc}</color>`;
		cardName.string = `<color=DEDEDE><bold>${card.base.name || card.base.id} [${
			card.base.class || 'Spell'
		}]</bold></color>`;
		this.loadVisual(`graphics/characters/${visualUri}/spriteFrame`);
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
}
