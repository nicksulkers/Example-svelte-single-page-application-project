<script lang="ts">
	import {router, RouterView} from 'another-svelte-router';
	import {authToken, activeUser} from '/stores.ts';

	import Preload from '/components/common/Preloader.svelte';
	import Home from '/pages/Home.svelte';
	import NotFound from '/pages/errors/NotFound.svelte';

	router.add('*', ensureIsLoaded, Preload);
	router.add('/', Home);
	router.add('*', NotFound);

	let hasLoaded: boolean = false;
	async function loadUser(){
		if($authToken){
			//verify token with server, if valid then fill activeUser
		}
		hasLoaded = true;
	}

	function ensureIsLoaded(){
		if(hasLoaded)
			return false;
		loadUser().then(() => {
			hasLoaded = true;
			router.navigate(location.pathname + location.search + location.hash, {type: 'replace'});
		});
		return true;
	}

	function requireIsLoggedIn(){
		return !!$activeUser;
	}

	function requireIsLoggedOut(){
		return !$activeUser;
	}
</script>
<RouterView/>