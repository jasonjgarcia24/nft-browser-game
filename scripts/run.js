const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory("MyEpicGame");
    const gameContract = await gameContractFactory.deploy(
        ["Barack Obama",            // Names
        "Caitlyn Jenner",
        "Donald Trump",
        "Hillary Clinton",
        "Joe Biden",
        "Kanye West"],
        ["img/barack-obama.png",    // Images
        "img/caitlyn-jenner.png",
        "img/donal-trump.png",
        "img/hillary-clinton.png",
        "img/joe-biden.png",
        "img/kanye-west.png"],
        [75000, 100000,  2000, 50000, 60000, 100000], // HP values
        [  500,     50, 10000,   250,   400,     50], // Attack damage values
    );
    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);
};

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

runMain();
