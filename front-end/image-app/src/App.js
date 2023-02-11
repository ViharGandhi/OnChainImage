import { useEffect, useState } from "react";
import { ethers } from "ethers";
import abi from "./artifacts/contracts/Image.sol/Image.json"
import Home from "./Page/Home";
import FetchImage from "./Page/FetchImage";
function App() {
  const[account,setAccount] = useState('none')
  //  const [state, setState] = useState({
  //   provider: null,
  //   signer: null,
  //   contract: null,
  // });
  const [contract, setContract] = useState(null);
  const [provider, setProvider] = useState(null);
  
  useEffect(()=>{
    const connectwallet = async ()=>{
      const contractaddress = "0xc253Ff8b0e0c4B4dDA7b6C46626CE8De86bf3aa4";
      const contractabi  = abi.abi;
      try{
        const {ethereum} = window;
        if(ethereum){
          const account = await ethereum.request({method:"eth_requestAccounts"},)
          
          window.ethereum.on("chainChanged", () => {
            window.location.reload();
          });

          window.ethereum.on("accountsChanged", () => {
            window.location.reload();
          });
          const provider = new ethers.providers.Web3Provider(ethereum)
          const signer = provider.getSigner();
          const contract = new ethers.Contract(contractaddress,contractabi,signer)
          setAccount(account)
          setProvider(provider)
          setContract(contract)
        }else {
          alert("Please install metamask");
        }
      }catch(error){
        console.log(error)
      }
    }
    connectwallet();
  },[])
  return (
    <div className="App">
      <h1>Hello</h1>
    <h1>{account}</h1>
   
    {/* <img src="https://bafybeihcwrj4fvcg7h5v6bjckwj5okoyrhudav54ry74krf2rnmtixefsa.ipfs.dweb.link/photo-1503023345310-bd7c1de61c7d.jpeg" alt ="text"/> */}
    <Home provider={provider} contract = {contract} account={account} />
    <FetchImage provider={provider} contract = {contract} account={account}/>
    </div>
  );
}

export default App;
