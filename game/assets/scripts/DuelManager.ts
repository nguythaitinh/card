import Engine, { DuelSetup } from '@cocrafts/engine-card';
import { _decorator, Component, Node, Prefab } from 'cc';

import { cleanUpDesignerElements, replicateDuel } from './lib/duel';
import { DuelProps } from './lib/types';
import { GameState, gameState, subscribeBridge } from './bridge';

const { ccclass, property } = _decorator;
const { runCommand, getInitialSnapshot, fetchGameMeta } = Engine;

@ccclass('DuelManager')
export class DuelManager extends Component {
	@property(Prefab)
	cardPrefab: Prefab;

	@property(Node)
	playerDeck: Node = null;
	@property(Node)
	opponentDeck: Node = null;

	@property(Node)
	playerHand: Node = null;
	@property(Node)
	opponentHand: Node = null;

	props: DuelProps = {
		prefabs: {},
		nodes: {
			player: {},
			opponent: {},
		},
	};

	onLoad(): void {
		this.props = {
			user: gameState.user,
			duel: gameState.duel,
			prefabs: {
				card: this.cardPrefab,
			},
			nodes: {
				player: {
					deck: this.playerDeck,
					hand: this.playerHand,
				},
				opponent: {
					deck: this.opponentDeck,
					hand: this.opponentHand,
				},
			},
		};

		subscribeBridge(this.onGameStateUpdate);
		cleanUpDesignerElements(this.props);
	}

	onGameStateUpdate(state: GameState): void {
		console.log(state, '<-- subscribe');
	}

	start(): void {
		const { duel } = this.props;
		const meta = fetchGameMeta(duel.setup.version);
		const batches = duel.history.slice(0, 1);
		let snapshot = getInitialSnapshot(meta, duel.setup as DuelSetup);

		batches.forEach((commands) => {
			commands.forEach((command) => {
				snapshot = {
					...snapshot,
					...runCommand({
						snapshot,
						command: command as never,
					}),
				};
			});
		});

		replicateDuel(this.props, snapshot);
	}
}
