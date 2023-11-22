import instagram from "./icon/mdi_instagram.svg";
import Twitter from "./icon/Vector.svg";
import Facebook from "./icon/Vector (1).svg";
import Linkedin from "./icon/ri_linkedin-fill.svg";

const Media = ({text= "Follow us", flexDirection= "row"}) => {
    const icon = [
        {
            name: "instagram",
            alt: "instagram",
            src: instagram,
        },
        {
            name: "Twitter",
            alt: "twitter",
            src: Twitter,
        },
        {
            name: "Facebook",
            alt: "facebook",
            src: Facebook,
        },
        {
            name: "Linkedin",
            alt: "linkedlin",
            src: Linkedin,
        }
    ]
    return (
        <div className="mb-6 leading-[14.63px]  text-[12px] items-center flex  gap-4 " style={{flexDirection: flexDirection}}>
              <h6 className="  font-mont normal text-[12px] leading-[14.63px] text-primaryColor">{text}</h6>
            
              <div className="flex  gap-4  flex-row">
                {icon.map((item) => (
                <img src={item.src} alt={item.alt} className="items-center" />
                    
            ))}
            </div>

        </div>
    )
}

export default Media;