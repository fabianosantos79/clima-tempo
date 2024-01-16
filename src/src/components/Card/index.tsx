import styled from "styled-components";

const SectionEstilizado = styled.div`
    width: 900px;
    height: 350px;
    background-color: rgba(255, 255, 255, 0.6);
    display: flex;
    border-radius: 30px;
    padding: 10px 20px;
    justify-content: space-around;
`

const Card = () => {
  return (
    <section>
        <SectionEstilizado>
            <div>Lado Esquerdo</div>
            <div>Lado Direito</div>
        </SectionEstilizado>
    </section>
  )
}

export default Card