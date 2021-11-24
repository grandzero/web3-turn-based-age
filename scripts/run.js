const main = async () => {
  console.log("Starting factory");
  const myGameContractFactory = await hre.ethers.getContractFactory(
    "MyEpicGame"
  );
  /**
   * Expected arguments while deploying:
   * string[] memory names,
   * string[] memory imageUris,
   * uint256[] memory ages,
   * uint256[] memory hps,
   * uint256[] memory powers
   * 
   */
  const gameContract = await myGameContractFactory.deploy(
    ["First, second,third"],
    ["https://www.google.com/1","https://www.google.com/2","https://www.google.com/3"],
    [1,2,3],
    [100,2000,10000],
    [1000,3000, 10000]
    );
  await gameContract.deployed();

  console.log("Contract deployed to : ", gameContract.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
};

runMain();
