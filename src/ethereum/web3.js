import Web3 from 'web3';

let web3;

if(typeof window !== 'undefined' && window.web3 !== 'undefined'){
	web3 = new Web3(window.web3.currentProvider);
} else {
	const provider = new Web3.providers.HttpProvider(
			'https://sepolia.infura.io/v3/36192378e87c4aa38b938fd6cf556680'
		);
	web3 = new Web3(provider);
}

export default web3;