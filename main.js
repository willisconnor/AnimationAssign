const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("/AnimationAssign/fixed_spritesheet.png");
ASSET_MANAGER.queueDownload("/AnimationAssign/background.jpg");

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");
	ctx.imageSmoothingEnabled = false;
	
	const ichigo = new Ichigo(gameEngine);
	gameEngine.addEntity(ichigo);
	gameEngine.addEntity(new Background(gameEngine));
	
	gameEngine.init(ctx);

	gameEngine.start();

	// Add slash button handler
	const slashButton = document.getElementById("slashButton");
	slashButton.addEventListener("click", () => {
		ichigo.slash();
	});
});
