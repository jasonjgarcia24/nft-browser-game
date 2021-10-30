const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory("MyEpicGame");
    const gameContract = await gameContractFactory.deploy(
        ["Barack Obama",            // Names
        "Donald Trump",
        "Hillary Clinton",
        "Joe Biden",
        "Kanye West"],
        ["https://static.wikia.nocookie.net/southpark/images/f/f0/Barack-obama.png/revision/latest?cb=20170827130913",      // Images
        "https://static.wikia.nocookie.net/southpark/images/f/f4/President_Garrison.png/revision/latest?cb=20180210050625",
        "https://static.wikia.nocookie.net/southpark/images/d/d6/Hillary-clinton-s20.png/revision/latest?cb=20161201055844",
        "https://static.wikia.nocookie.net/southpark/images/e/e8/Joe-biden.png/revision/latest?cb=20200428001040",
        "https://static.wikia.nocookie.net/southpark/images/f/f3/Kanye-west.png/revision/latest?cb=20161217111445"],
        [7500,   200, 5000, 6000, 10000], // HP values
        [ 500, 10000,  250,  400,    50], // Attack damage values
        "Jeff Bezos",   // Boss name
        "https://static.wikia.nocookie.net/southpark/images/f/f3/Jeff_Bezos_transparent.png/revision/latest?cb=20181207130352",  // Boss image
        100000, // Boss hp
        50  // Boss attack damage
    );
    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);

    let txn;
    txn = await gameContract.mintCharacterNFT(2);
    await txn.wait();
    console.log("Minted NFT #1");

    txn = await gameContract.attackBoss();
    await txn.wait();

    txn = await gameContract.attackBoss();
    await txn.wait();

    console.log("Done deploying and minting!");
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

