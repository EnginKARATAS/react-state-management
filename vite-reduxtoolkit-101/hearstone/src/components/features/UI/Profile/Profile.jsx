import "./Profile.css";    
export default function Profile({img, position}) {
  return (
    <div className="absolute profile"
      style={{  top: position.top, left: position.left, bottom: position.bottom}}
    >
        <img className="profile-image" src={"/public/cards/card-images/"+img.pack+"/"+img.photo+".png"} alt="" />
        <div className="attack">
        </div>
        <div className="health">
        </div>
    </div>
  )
}
