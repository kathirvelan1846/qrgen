import { useState } from "react"


export const Qrcode = () => {
   const [img,setImage]= useState("");
   const[loading,setLoding] = useState(false);
   const [qrData,setQrdata] = useState("Kathir");
   const [qrSize,setSize] = useState("50");
  async function generateqr(){
    
    setLoding(true);
    try{
        const url = `https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}x${qrSize}&data=${qrData}`;
        setImage(url);

    }catch(error){
        console.log("Error generating in qr code :", error);

    }finally{
        setLoding(false);
    }
    
}
function downqr(){
    fetch(img).then((response)=>response.blob()).then((blob)=>{
        const link = document.createElement("a");
        link.href=URL.createObjectURL(blob);
        link.download="qr.png";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    })
}
    
   return (
    <div className="app-container">
        <h1>QR CODE GENERATOR</h1>
        {loading&& <p>Please Wait...</p>}
         {img&& <img src={img} className="qr-image" alt=""/>}

    <div>
        <label htmlFor="datainput" className="input-label">Data for Qr Code:
        </label>
        <input type="text" id="datainput" placeholder="Enter Data for Qr code" value={qrData} onChange={(e)=>setQrdata(e.target.value)}/>
        <label htmlFor="Sizeinput" className="input-label">Image Size (e.g., 150):
        </label>
        <input type="text" id="datainput" placeholder="Enter Image Size" value={qrSize} onChange={(e)=>setSize(e.target.value)}/>
        <button className="btn" disabled={loading} onClick={generateqr} >Generate Qr code </button>
        <button className="g-btn" onClick={downqr} >Download Qr Code</button>
    </div>
    <p className="footer">Designed by @Ithu_Kathirvelan_18!</p>

        
         </div>
  )
}
