//Componente reutilizavel (projetos e contatos)

import InfoText from "../../utils/infoText";

type InfoProps = {
  name: String;
  text: Array<{title: String; link: String; href: string}>
};

export default function Info({name, text}: InfoProps) {

 return (
   <section className="w-full max-w-fit flex flex-row justify-center mt-8 cursor-default">
    <div className="mt-5">
    <p className="mb-2">// {name}:</p>
      <InfoText
        texts={text}
      />

    </div>
   </section>
 );
}