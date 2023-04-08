// SPDX-License-Identifier: MIT
pragma solidity ^0.8.6;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";

contract BridgePolgyon{

    event Burned(
        address from,
        address to,
        uint date
    ) ;
    
    function burn(address _contract, uint _tokenId) public {
        IERC721 nftContract = IERC721(_contract);
        require(nftContract.ownerOf(_tokenId) == msg.sender, "only owner can burn");
        nftContract.safeTransferFrom(msg.sender, address(0), _tokenId);
        emit Burned(msg.sender, address(0), block.timestamp);
    }
}