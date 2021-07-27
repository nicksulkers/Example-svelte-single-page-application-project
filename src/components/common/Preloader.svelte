<style lang="scss">
	main{
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		background: rgba(0,0,0,.4);
	}
	.loader {
		border: 16px solid #f3f3f3;
		border-top: 16px solid var(--background-color-primary);
		border-radius: 50%;
		width: 120px;
		height: 120px;
		animation: spin 1.5s linear infinite;
	}
	@keyframes spin {
		0% { transform: rotate(0deg); }
		100% { transform: rotate(360deg); }
	}
</style>
<main>
	<div class="loader"></div>
</main>