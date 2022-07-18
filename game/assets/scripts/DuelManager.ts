import Engine, { DuelSetup } from '@cocrafts/engine-card';
import { _decorator, Component, Node, Prefab } from 'cc';

import { cleanUpDesignerElements, replicateDuel } from './lib/duel';
import { DuelProps } from './lib/types';
import { GameState, gameState, subscribeBridge } from './bridge';
import { playCommands } from './replayer';
import { getOrderPair } from './utils';

const { ccclass, property } = _decorator;
const { runCommand, getInitialSnapshot, fetchGameMeta } = Engine;

@ccclass('DuelManager')
export class DuelManager extends Component {
	@property(Prefab)
	cardPrefab: Prefab;

	@property(Node)
	screenGuide: Node;
	@property(Node)
	centralGuide: Node;
	@property(Node)
	leftGuide: Node;
	@property(Node)
	rightGuide: Node;

	@property(Node)
	playerDeck: Node;
	@property(Node)
	opponentDeck: Node;

	@property(Node)
	playerHand: Node;
	@property(Node)
	opponentHand: Node;

	props: DuelProps = {
		prefabs: {},
		history: {
			remote: [],
			inner: [],
		},
		nodes: {
			guide: {},
			player: {},
			opponent: {},
		},
	};

	onLoad(): void {
		this.props = {
			user: gameState.user,
			duel: gameState.duel,
			history: {
				remote: gameState.duel.history as never,
				inner: [],
			},
			prefabs: {
				card: this.cardPrefab,
			},
			nodes: {
				guide: {
					screen: this.screenGuide,
					central: this.centralGuide,
					left: this.leftGuide,
					right: this.rightGuide,
				},
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

		cleanUpDesignerElements(this.props);
	}

	onGameStateUpdate(remote: GameState): void {
		const { history } = this.props;

		history.remote = remote.duel.history as never;
		const diffs = history.remote.slice(history.inner.length);

		playCommands(this.props, diffs);
	}

	start(): void {
		const { user, duel, history } = this.props;
		const meta = fetchGameMeta(duel.setup.version);
		const batches = duel.history.slice(0, 0);
		let snapshot = getInitialSnapshot(meta, duel.setup as DuelSetup);

		this.props.snapshot = snapshot;
		this.props.meta = meta;
		this.props.orderPair = getOrderPair(user.address, snapshot.player);

		batches.forEach((commands) => {
			history.inner.push(commands as never);

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

		subscribeBridge(this.onGameStateUpdate.bind(this), true);
	}
}
