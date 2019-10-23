import React from 'react'
import ContentBox from '../../../components/content-box'
import Image from '../../../components/image'
import PrimaryText from '../../../components/text/primary'
import EmptySpace from '../../../components/empty-space'
import TextBNCC from '../../../components/text/bncc'
import SubtitleBar from '../../../components/subtitle-bar'
import Activities from '../../../services/activities'
import IntegralActivity from '../../../components/integral-activity'
import PresenteSVG from '../../../images/content/micromundo-ii/presente.svg'

/*Props:
    unitId: String, representa o id da unidade em que a atividade se encontra
.*/
class Six extends React.Component {

  constructor(props) {
    super(props)
    this.props.setHeader()
  }

  render() {
    return (
      <ContentBox>
        <PrimaryText>
          <SubtitleBar type={3} title='Questão Avaliativa - 2' subtitle='Escolhendo um presente'/>
          <p>O levantamento e o registro produzidos pelos alunos podem ajudar a caracterizar o bairro sob a perspectiva dos próprios moradores. Considere que os documentos gerados no registro sejam usados para produzir uma descrição do bairro segundo essa perspectiva - espera-se que a partir dessa análise surjam termos descritores, como "polo gastronômico" ou "arquitetura de inspiração lusitana" ou ainda "espaço cultural". </p>
          <EmptySpace />

          
          <TextBNCC>BNCC: Nesta situação é possível trabalhar, por exemplo, o desenvolvimento de habilidades em: Arte, Geograﬁa e Língua Portuguesa.</TextBNCC>
          <p>Quais dos pilares do Pensamento Computacional melhor se adéquam à determinação desses descritores?
</p>
          <IntegralActivity activity={Activities.getMicromundoIIActiviryTwo(this.props.unitId)} />
        </PrimaryText>
      </ContentBox>
    )
  }
}

export default Six