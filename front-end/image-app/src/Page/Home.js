import React, { useState, useReducer } from 'react'
import{ Web3Storage } from 'web3.storage'
import ReactDOM from 'react-dom';
function Home({provider,contract,account}){
    const[token,setToken] = useState('');
    const[files,setFiles] = useState([])
    const[cid,setCid] = useState('');
    const [url,setUrl] = useState('')
    const[filename,setfilename] = useState('')
    const [filenametouri,setFilenametouri] = useState({})
    const[mappeduri,setmappeduri] = useState('')
    const [newurl,setnewurl] = useState('')
    const handlesubmit = async(e)=>{
        e.preventDefault()
        const clinet =  new Web3Storage({token})
      const getcid = await clinet.put(files,{
      })
      setCid(getcid)
      const generatedurl = `https://dweb.link/ipfs/${getcid}`
      setUrl(generatedurl)
      
      setFilenametouri({uri:filename})
      

      try{
        const signer = contract.connect(provider.getSigner());
        signer.adduri(getcid)
      }catch(error){
        console.log(error)
      }
    }
    
    const fetchimage = async(e)=>{
        const signer = contract.connect(provider.getSigner());
        const mapis = await signer.geturi();
        const displayimg = `https://${mapis}.ipfs.dweb.link/${filename}`
        setnewurl(displayimg)
        console.log(newurl)
        
    }
    return(
        <div>
            <form onSubmit={handlesubmit}>
                <input type="password" value={token} onChange={(e)=>{
                    setToken(e.target.value)
                    console.log(token)
                }}></input>
                <input type='file' id='filepicker'  name='fileList' onChange={e => 
                    {
                        setFiles(e.target.files)
                        setfilename(e.target.files[0].name)
                    }
                    
                    
                    } multiple required />
                <input type='submit' value='Submit' id='submit' />
            </form>
            <h1>{cid}</h1>
            <h2>{url}</h2>
            <button onClick={fetchimage}>fetchimage</button>
            <img src={newurl} alt="txt" />
        </div>
    )
}
export default Home;
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDU1NzIyNzNFMkUyOTJDMzVGMGVCRDgyQjhDZEM1MTE5N0M3ODQ0ODUiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NzYwMTc1NDMxNjQsIm5hbWUiOiJmaXJzdCJ9.rdkBSEp2vZs3W_9mj7eZaDJqjizOwbq3nlsGr-_sUXM