import { StaticImageData } from "next/image"
import Image  from "next/image";

interface HeroProps {
    title: string;
    imgAlt: string;
    imgData: StaticImageData;
}

export default function Hero(props: HeroProps){

    return (
        <div className="header-main">
        <p className="header-main__content">{props.title}</p>
        <div className="absolute -z-10 inset-0">
          <Image
            src={props.imgData}
            fill
            style={{ objectFit: "cover" }}
            alt= {props.imgAlt}
          />
        </div>
      </div>
    )
}