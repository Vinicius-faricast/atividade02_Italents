import * as S from "./style"
import img from "../../assets/Development-cuate.svg"

export const Main = () => {
    return (
        <S.Main>
            <S.ContentContainer>
                <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id optio natus dolore quibusdam vel. Distinctio obcaecati aspernatur deleniti deserunt accusamus voluptatibus rem ipsa autem quos minus cupiditate, provident animi quia.</p>
            </S.ContentContainer>
            <img src={img} alt='Logotipo do App' />
        </S.Main>
    )
}