<script lang="ts">

    import { lang, t } from '$lib/stores/language';

	let trad : string = t("down.titulo");

	$: {
		$lang;
		trad = t("down.titulo")
	}

</script>

<h1>{trad}</h1>