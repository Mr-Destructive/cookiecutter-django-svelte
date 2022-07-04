import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'world',
        backend: 'Django',
        frontend: 'Svelte'
	}
});

export default app;
