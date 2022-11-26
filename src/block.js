/** 
 *  @constructor
 *  @extends Floatable
 */
 function Block(height, numTransactions, outputTotal, blockSize) {
	Floatable.call(this);

	const strMoved = outputTotal.toLocaleString('en-GB', { maximumFractionDigits: 2 }) + " PCOIN";
	const strBlockKb = (blockSize / 1000).toLocaleString('en-GB', { maximumFractionDigits: 2 }) + " KB";

	this.width = this.height = 500;

	this.addImage(blockImage, this.width, this.height);
	this.addText("Block #" + height.toLocaleString('en-GB') + "<br />Number of Transactions: " + numTransactions + "<br />Transaction Volume: " + strMoved + "<br />Block Size: " + strBlockKb);
	this.initPosition();
	
    // Sound
    Sound.playRandomSwell();
}

extend(Floatable, Block);
