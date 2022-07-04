{% raw %}
<script>
	export let backend, frontend;
</script>

<main>
    {% endraw %}
    <h1>{{ cookiecutter.project_name }}</h1>
    <p>{{ cookiecutter.description }}</p>
    {% raw %}
    <h3>{ backend } + { frontend } Application</h3>
    <p>Made with <a href="https://cookiecutter.readthedocs.io/">Cookiecutter</a></p>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
{% endraw %}
