// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
 
  const Image = await hre.ethers.getContractFactory("Image");
  const image = await Image.deploy();
  await image.deployed();
  console.log(
    `contract deployed at ${image.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
//0xc253Ff8b0e0c4B4dDA7b6C46626CE8De86bf3aa4