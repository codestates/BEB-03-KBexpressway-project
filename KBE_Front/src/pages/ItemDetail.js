import collectionData from "../data/collectionData.json";
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import Web3 from "web3";
import abi from "../kbNftAbi";

function ItemDetail({ match, location }) {
    const contractAddr = "0x3b177164da42627d5c70eb3a55e768c723d5322b";
    const [web3, setWeb3] = useState();
	const [account, setAccount] = useState("");
    const [newErc721addr, setNewErc721Addr] = useState();
    const buyer_account = "0x7c897886c7146e4Ca4A5cc8c52fca452FE8809Db";

    console.log('location', location);
    const metadata = location.meta;
    const nft = location.nft;
    const tokenId = match.params.tokenId;

    // 해당 nft가 속한 컬렉션 페이지로 이동하도록 할 때 사용
    // const collection = collectionData.filter((collection) => {
    //     return collection.collectionId === nft.data.collectionId;
    // })[0];

    useEffect(() => {
		// window.ethereum이 있다면
		if (typeof window.ethereum !== "undefined") {
			try {
				const web = new Web3(window.ethereum); // 새로운 web3 객체를 만든다
				setWeb3(web);
				setNewErc721Addr(contractAddr);
			} catch (err) {
				console.log(err);
			}
		}
	}, []);

    const handleBuy = async (e) => {
        // 컨트랙트 연동
        const contract = await new web3.eth.Contract(abi, newErc721addr);
        // mint 함수 실행
        const result = await contract.methods.mintNFT(buyer_account, nft.ipfs).send({
            from: buyer_account,
            gasLimit: 285000,
            value: 0,
        });
        console.log('mint', result);
        const totalSupply = await contract.methods.totalSupply().call();
        console.log('totalSupply', totalSupply);
        // // transfer 함수 실행
        // const transferResult = await contract.methods.transfer(nft.creater_account, )
    }
    
    return (
    <main id="main">
        {console.log('nft', nft)}
        {console.log('meta',metadata)}
        <section className="breadcrumbs">
            <div className="container">
                <ol>
                    <li>
                        <Link to="/">
                            Explore
                        </Link>
                    </li>
                    {/* <li>
                        <Link to={`/collection/${collection.collectionId} `}>
                            {collection.name}
                        </Link>
                    </li> */}
                </ol>
                <h2>{metadata.name}</h2>
            </div>
        </section>

        <section id="portfolio-details" className="portfolio-details">
            <div className="container">
                <div className="row gy-4">
                    <div className="col-lg-8">
                        <div className="post-img">
                            <img src={metadata.image} className="img-fluid" alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="row gy-4">
                            <div className="portfolio-info">
                                <h3>Information</h3>
                                <ul>
                                    {/* <li>
                                        <strong>Collection</strong>:
                                        <Link to={`/collection/${collection.collectionId} `}>
                                            {collection.name}
                                        </Link>
                                    </li> */}
                                    <li>
                                        <strong>Name</strong>: {metadata.name}</li>
                                    <li>
                                        <strong>Price</strong>: 
                                        {`${String(nft.onMarketLog.sale_price)} ETH`}</li>
                                    <li>
                                        {nft.onMarketLog.buyer_account === null ? 
                                        <button className="btn btn-primary" onClick={handleBuy}>Buy now</button> : null}
                                        {/* <button className="btn btn-primary" >Buy now</button> */}
                                    </li>
                                </ul>
                            </div>
                            <div className="portfolio-info">
                                <h3>Description</h3>
                                <p>
                                    {metadata.description}
                                </p>
                            </div>
                        </div>    
                    </div>
                </div>
            </div>
            <div className="container contact">
                <header className="section-header">
                    <p>Properties</p>
                </header>

                <div className="row">
                    <div className="row gy-4">
                            {metadata.attributes !== undefined ?
                                metadata.attributes.map((trait) => {
                                    return (
                            <div className="col-md-6">
                                <div className="info-box">
                                    <h3>{trait.trait_type}</h3>
                                    <h4>{trait.value}</h4>
                                </div>
                            </div>
                        ); }) : null}
                    </div>
                </div>
            </div>
        </section>
    </main>
    );
}

export default ItemDetail;
