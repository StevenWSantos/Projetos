import BarradePVisualização from "./componentes/BarradePVisualização/BarradePVisualização";
import BarradoTop from "./componentes/BarradoTop/BarradoTop";
import Curriculo from "./componentes/Curriculo/Curriculo";
import steven from "./steven.jpg";


export default function App() {
  return (
    <>  
      <BarradoTop/>
      <BarradePVisualização
        h1={"Steven Willian Santos"}
        h={"Sistemas de Informações"}
        url={steven}
        p={"Início regsitrodo no programa dia 27 de Março de 2023. Inciou no curso de Sistemas de Informações no período letivo de 2021.2"}
        l={Curriculo}
      />
      <BarradePVisualização
        h1={"Outro"}
        h={"Outro"}
        p={"ssssssssssssssssssssssssss"}
        url={"https://thumbs.dreamstime.com/z/avatar-de-perfil-neutro-g%C3%AAnero-face-frontal-uma-pessoa-an%C3%B4nima-231311404.jpg"}
      />
       <BarradePVisualização
        h1={""}
        h={""}
        p={""}
        url={"https://thumbs.dreamstime.com/z/avatar-de-perfil-neutro-g%C3%AAnero-face-frontal-uma-pessoa-an%C3%B4nima-231311404.jpg"}
      />
    </>
  );
}
