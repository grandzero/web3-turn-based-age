pragma solidity ^0.8.8;
import "hardhat/console.sol";

contract MyEpicGame {
    struct AwesomeCharacter {
        string name;
        string imageUri;
        uint256 age;
        uint256 hp;
        uint256 power;
    }

    AwesomeCharacter[] awesomeChracters;

    constructor(
        string[] memory names,
        string[] memory imageUris,
        uint256[] memory ages,
        uint256[] memory hps,
        uint256[] memory powers
    ) {
        for (uint256 i = 0; i < names.length; i++) {
            awesomeChracters.push(
                AwesomeCharacter(
                    names[i],
                    imageUris[i],
                    ages[i],
                    hps[i],
                    powers[i]
                )
            );

            AwesomeCharacter memory c = awesomeChracters[i];
            console.log(c.name, c.imageUri, c.age);
        }
    }
}
