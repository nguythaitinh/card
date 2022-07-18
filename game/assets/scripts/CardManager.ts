import { CardState } from '@cocrafts/engine-card';
import {
	_decorator,
	Animation,
	Component,
	resources,
	RichText,
	Sprite,
	SpriteFrame,
	UITransform,
} from 'cc';

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
