import * as S from "./style";
import instagramIcon from "../../assets/instagram.png";
import linkedinIcon from "../../assets/linkedin.png";
import whatsIcon from "../../assets/whatsapp.png"

export const Footer = () => {
    return (
        <S.Footer>
            <S.contactContainer>
                
                <S.instaIcon href="#"><img src={instagramIcon} alt="" /></S.instaIcon>
                <S.linkedinIcon href="#"><img src={linkedinIcon} alt="" /></S.linkedinIcon>
                <S.whatsIcon href="#"><img src={whatsIcon} alt="" /></S.whatsIcon>
            </S.contactContainer>
        </S.Footer>
    )
}