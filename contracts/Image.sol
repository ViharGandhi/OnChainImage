pragma solidity ^0.8.0;

contract Image{
    mapping(address => string)public imagemap;

    function adduri(string memory _uri)external{
        imagemap[msg.sender] = _uri;
    }
    function geturi() public view returns(string memory){
        return imagemap[msg.sender];
    }
}
//0x552Bb3121DC407fC8Fc9B6B33dAF2a72E650fDE3
//bafybeihkofcc4msnx6ppp7p6r2rfokug7glxhrpqutljiq5u7qw44emdji