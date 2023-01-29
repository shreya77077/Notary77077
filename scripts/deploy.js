const ethers = require( "hardhat ")

// scripts/deploy.js

async function main() {
  // 1. Get the contract to deploy
  const Mutisig = await ethers.getContractFactory('Multisig');
  console.log('Deploying Multisig...');

  // 2. Instantiating a new Box smart contract
  const multisig = await Mutisig.deploy();

  // 3. Waiting for the deployment to resolve
  await Multisig.deployed();

  // 4. Use the contract instance to get the contract address
  console.log('Multisig deployed to:', multisig.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
     console.error(error);
     process.exit(1);
  });