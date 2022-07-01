import { _decorator, Component, instantiate, Node, sp, tween } from 'cc';

// import io from 'socket.io-client/dist/socket.io.js';
import { allCards, Card, drawCards } from '../lib';

import { distributeCards, fillDeck } from './utils';

const { ccclass, property } = _decorator;
const wsUri = 'wss://94zbw8sdk9.execute-api.ap-northeast-1.amazonaws.com/prod/';

interface CardState {
	deck: Card[];
	hand: Card[];
	ground: Card[];
}

@ccclass('Game')
export class Game extends Component {
	@property(Node)
	playerDeck: Node = null;
	@property(Node)
	opponentDeck: Node = null;

	@property(Node)
	playerHand: Node = null;
	@property(Node)
	opponentHand: Node = null;

	@property(Node)
	playerGround: Node = null;
	@property(Node)
	opponentGround: Node = null;

	private playerCards: CardState = {
		deck: allCards,
		hand: [],
		ground: [],
	};

	private opponentCards: CardState = {
		deck: allCards,
		hand: [],
		ground: [],
	};

	onLoad(): void {
		// tween
		console.log('loaded');
	}

	start(): void {
		// const socket = new WebSocket('ws://localhost:3006');
		const socket = new WebSocket(wsUri);

		socket.addEventListener('open', (event) => {
			console.log('connected to server', event);
			socket.send(
				JSON.stringify({
					client: 'cardGame',
					message: 'Hello from Game client',
				}),
			);
		});

		socket.addEventListener('message', (event) => {
			console.log('Message from server', event.data);
		});

		const playerCard = drawCards(this.playerCards.deck, 7);
		this.playerCards.deck = playerCard.deckCards;
		this.playerCards.hand = playerCard.pickedCards;

		const opponentCard = drawCards(this.opponentCards.deck, 7);
		this.opponentCards.deck = opponentCard.deckCards;
		this.opponentCards.hand = opponentCard.pickedCards;

		distributeCards(this.playerDeck, playerCard.pickedCards, 0.6);
		distributeCards(this.opponentDeck, opponentCard.pickedCards, 0.4);
		// fillDeck(this.playerDeck);
		// fillDeck(this.opponentDeck, 10, 8);

		this.playerHand.children.map((i) => i.removeComponent('cc.Sprite'));
		this.opponentHand.children.map((i) => i.removeComponent('cc.Sprite'));
		this.playerGround.children.map((i) => i.removeComponent('cc.Sprite'));
		this.opponentGround.children.map((i) => i.removeComponent('cc.Sprite'));
	}

	update(deltaTime: number) {}
}
