const texts = [
	'we are retarders',
	'we do cool stuff on the internet',
	'we are lawyers',
	'we are decentralized',
	'we don\t change',
	'we like to <a class="twitter" href="http://lunar.retarders.wtf/">rickroll</a> people',
	'11/28/2018',
];

let typer = new TypeIt('.subtitle', {
	speed: 50,
	loop: true
});

texts.forEach(text => {
	typer = typer
		.type(text)
		.pause(1000)
		.delete()
});

typer = typer.go();