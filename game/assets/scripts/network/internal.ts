interface NetworkConfiguration {
	clientId: string;
	endpoint: string;
	onConnect?: (module: NetworkModule, event: Event) => void;
	onMessage?: (payload, module: NetworkModule, event: MessageEvent) => void;
}

export interface NetworkModule {
	instance: WebSocket;
	send: (data) => void;
}

export const createConnection = ({
	clientId,
	endpoint,
	onConnect,
	onMessage,
}: NetworkConfiguration): NetworkModule => {
	const socket = new WebSocket(endpoint);
	const send = (data): void => {
		const payload = JSON.stringify({
			client: clientId,
			...data,
		});

		socket.send(payload);
	};

	const module: NetworkModule = {
		instance: socket,
		send,
	};

	socket.addEventListener('open', (event) => {
		onConnect?.(module, event);
	});

	socket.addEventListener('message', (event) => {
		const payload = JSON.parse(event.data || '{}');
		onMessage?.(payload, module, event);
	});

	return module;
};
