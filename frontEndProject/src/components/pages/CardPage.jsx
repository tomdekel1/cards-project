import { useParams } from "react-router-dom";
import { getCardById } from "../../services/cardsService";
import { useEffect, useState } from "react";


function CardPage() {
    const { id } = useParams()
    const [cardDetails, setCardDetails] = useState("")

    console.log(id)
    useEffect(() => {
        async function getData() {

            const res = await getCardById(id)
            setCardDetails(res.data)
            console.log(res.data)
        }
        getData()
    }, [])

    return (
        <div style={{ background: "linear-gradient(0.25turn, #D7C3F1, #BDE8CA, #BDE8CA)", minHeight: "100vh" }}>
            <div style={{ display: "flex", justifyContent: "center", paddingTop: "5%", }}>
                <div className="card" style={{ width: "18rem", borderRadius: "10px", marginBottom: "100px", border: "none", background: "var(--card-bg)", color: "var(--text-color)", width: "90vw", display: "flex", flexDirection: "row", maxHeight: "100vh", marginLeft: "100px", padding: "3%", }} >
                    <img src={cardDetails.image?.url} className="card-img-top" alt={cardDetails.image?.alt} />
                    <div className="card-body" style={{ marginTop: "-2%" }} >
                        <h5 className="card-title fs-2">{cardDetails.title}</h5>
                        <p className="card-text">{cardDetails.subtitle}</p>
                        <p className="card-text">{cardDetails.description}</p>
                        <p className="card-text">{cardDetails.phone}</p>
                        <p className="card-text">email: {cardDetails.email}</p>
                        <div>address:
                            <span> {cardDetails.address?.country},</span>
                            <span> {cardDetails.address?.state},</span>
                            <span> {cardDetails.address?.city},</span>
                            <span> {cardDetails.address?.street}</span>
                        </div>

                        {/* <div onClick={handleFavorite} style={{ color: "white" }}
          className={["bi bi-suit-heart-fill", favorite && "text-danger"]
            .join(" ")}></div> */}

                        {/* <button style={{ borderRadius: "20px", border: "none", padding: "18px", marginTop: "3%", background: "linear-gradient(0.25turn, #ae7feb, #BDE8CA, #1ce4d3)", border: "1px,solid, aqua", boxShadow: " 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)", }} onClick={moveToCardPage}>show card</button>
        {cardDetails.btn} */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardPage;