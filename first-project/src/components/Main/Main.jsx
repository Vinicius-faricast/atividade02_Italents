import * as S from "./style"
import img from "../../assets/Development-cuate.svg"

export const Main = () => {
    return (
        <S.Main>
            <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, quae. Quo ullam vel mollitia ipsa accusamus expedita maiores. Impedit sequi aspernatur iusto vero veritatis blanditiis, commodi quam cumque officiis at!</h1>
            <img src={img} alt='Logotipo do App' />
        </S.Main>
    )
}