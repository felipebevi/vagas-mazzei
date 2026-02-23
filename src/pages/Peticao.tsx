import { useState } from "react";
import { Lock } from "lucide-react";
import convencaoVagasMoto from "@/assets/convencao-vagas-para-moto-peticao.png";
import convencaoManobrista from "@/assets/convencao-manobrista.png";

const SENHA = "759e3";

const PeticaoContent = () => (
  <div className="min-h-screen bg-white text-gray-900 py-12 px-4">
    <div className="max-w-3xl mx-auto">
      {/* Cabeçalho */}
      <div className="text-center border-b-2 border-gray-800 pb-6 mb-8">
        <p className="text-sm uppercase tracking-widest mb-2">Juizado Especial Cível</p>
        <h1 className="text-2xl md:text-3xl font-bold" style={{ fontFamily: "serif" }}>
          PETIÇÃO INICIAL
        </h1>
        <p className="text-sm text-gray-600 mt-2">Ação de Obrigação de Fazer c/c Indenização por Danos Morais e Materiais</p>
      </div>

      <div className="prose prose-gray max-w-none text-[15px] leading-relaxed" style={{ fontFamily: "serif" }}>
        
        {/* Endereçamento */}
        <p className="font-bold text-center mb-8">
          AO JUIZADO ESPECIAL CÍVEL DA COMARCA DE [CIDADE/UF]
        </p>

        {/* Qualificação */}
        <p className="mb-6">
          <strong>[NOME COMPLETO DO AUTOR]</strong>, [nacionalidade], [estado civil], [profissão], 
          portador(a) do RG nº [______] e CPF nº [______], residente e domiciliado(a) no Condomínio 
          Residencial Vila Mazzei, [endereço completo], Apartamento [___], vem, respeitosamente, à 
          presença de Vossa Excelência, propor a presente:
        </p>

        <p className="text-center font-bold text-lg mb-4">
          AÇÃO DE OBRIGAÇÃO DE FAZER C/C INDENIZAÇÃO POR DANOS MORAIS E MATERIAIS
        </p>

        <p className="mb-8">
          em face de <strong>CONDOMÍNIO RESIDENCIAL VILA MAZZEI</strong>, na pessoa de seu síndico, 
          Sr. [NOME DO SÍNDICO], [qualificação], residente no mesmo condomínio, Apartamento [___], 
          pelos fatos e fundamentos a seguir expostos:
        </p>

        {/* I - DOS FATOS */}
        <h2 className="text-xl font-bold border-b border-gray-400 pb-2 mb-4">I — DOS FATOS</h2>

        <p>
          1. O Autor é proprietário de unidade autônoma no Condomínio Residencial Vila Mazzei e 
          possui motocicleta como veículo de uso diário.
        </p>

        <p>
          2. A <strong>Convenção do Condomínio</strong>, documento que rege as normas internas e possui 
          força de lei entre os condôminos (art. 1.333 do Código Civil), estabelece em seu 
          <strong> item b. 1.B</strong> que o estacionamento do condomínio possui capacidade para:
        </p>

        <ul className="list-disc ml-8 my-4">
          <li>20 vagas tipo para automóveis</li>
          <li>08 vagas duplex</li>
          <li>01 vaga do zelador</li>
          <li>02 vagas de visitantes</li>
          <li><strong className="text-red-700">09 (nove) vagas para motocicletas</strong></li>
        </ul>

        <div className="my-6 border-2 border-gray-300 rounded-lg overflow-hidden">
          <img src={convencaoVagasMoto} alt="Trecho da convenção - 9 vagas para motos" className="w-full" />
          <p className="text-xs text-center py-2 bg-gray-100 font-semibold">
            Documento 1 — Trecho da Convenção: 09 vagas para motos expressamente previstas
          </p>
        </div>

        <p>
          3. A mesma convenção prevê que a garagem está <strong>sujeita à utilização de manobrista</strong>, 
          demonstrando que eventual limitação de espaço físico <strong>não retira o direito de 
          estacionamento</strong> dos veículos vinculados às unidades autônomas, cabendo ao condomínio 
          a adoção de medidas operacionais para garantir o uso adequado.
        </p>

        <div className="my-6 border-2 border-gray-300 rounded-lg overflow-hidden">
          <img src={convencaoManobrista} alt="Trecho da convenção - uso de manobrista" className="w-full" />
          <p className="text-xs text-center py-2 bg-gray-100 font-semibold">
            Documento 2 — Trecho da Convenção: manobra sujeita à utilização de manobrista
          </p>
        </div>

        <p>
          4. Diante da ausência de demarcação das 9 vagas para motos na garagem, o Autor criou 
          uma campanha de conscientização (inclusive com landing page informativa) demonstrando que 
          existem espaços ociosos — que <strong>não são manobra nem estacionamento</strong> — onde as vagas 
          poderiam ser demarcadas, sem prejuízo algum a qualquer morador.
        </p>

        <p>
          5. A proposta foi levada à <strong>assembleia do condomínio</strong>, onde o Autor apresentou 
          fotos, mapa e regras claras. Neste momento, a <strong>presidente da mesa, Sra. Aline</strong>, 
          afirmou expressamente que <strong>não haveria mudança no valor do seguro</strong>, porém utilizou 
          a frase <em>"aconselho a ver o valor do prêmio para ver se precisa de ajuste"</em>.
        </p>

        <p>
          6. O <strong>síndico do condomínio</strong> imediatamente distorceu essa declaração, repetindo 
          em voz alta para todos os presentes que <em>"vai impactar no valor do condomínio"</em> — 
          <strong>informação inverídica</strong> que induziu os moradores a rejeitarem a proposta com 
          base em premissa falsa.
        </p>

        <p>
          7. Ainda durante a assembleia, o Autor apresentou a <strong>própria Convenção do Condomínio</strong>, 
          revelando a todos — inclusive ao síndico e à administradora — que as <strong>9 vagas para 
          motocicletas já existiam</strong> no documento vigente. <strong>Ninguém tinha conhecimento 
          deste fato</strong>, evidenciando a negligência na gestão condominial.
        </p>

        <p>
          8. Ao apresentar a convenção, o Autor foi <strong>interrompido e humilhado publicamente 
          pela administradora do condomínio</strong>, que afirmou que o Autor deveria 
          <em>"procurar via judicial com a construtora"</em> e que <em>"não era um problema a ser 
          discutido"</em> — <strong>mesmo sendo uma regra que já consta na convenção vigente</strong>, 
          cuja observância é obrigatória.
        </p>

        <p>
          9. Após a assembleia, o Autor enviou <strong>notificação extrajudicial</strong> à administradora 
          e ao condomínio, na pessoa do síndico, solicitando a demarcação das vagas previstas na 
          convenção. <strong>Após quase 1 (um) mês, nenhuma resposta foi recebida.</strong>
        </p>

        <p>
          10. Em decorrência da exposição na assembleia, um <strong>grupo de moradores compareceu à 
          garagem para atacar o Autor verbalmente</strong>. Um dos moradores <strong>partiu para 
          agressão física</strong>, sendo impedido por outros presentes. O Autor precisou buscar 
          abrigo em outro local e registrou <strong>Boletim de Ocorrência por ameaça</strong>.
        </p>

        <p>
          11. Atualmente, o Autor utiliza uma vaga emprestada de outro morador que ainda não 
          adquiriu veículo, situação <strong>precária e temporária</strong>, gerando prejuízo material 
          pela impossibilidade de usar direito que lhe é assegurado pela convenção.
        </p>

        {/* II - DO DIREITO */}
        <h2 className="text-xl font-bold border-b border-gray-400 pb-2 mb-4 mt-10">II — DO DIREITO</h2>

        <p>
          12. A <strong>Convenção do Condomínio</strong> possui natureza de norma interna com força 
          vinculante entre todos os condôminos, nos termos do <strong>art. 1.333 do Código Civil</strong>:
        </p>

        <blockquote className="border-l-4 border-gray-400 pl-4 my-4 italic text-gray-700">
          "Art. 1.333. A convenção que constitui o condomínio edilício deve ser subscrita pelos 
          titulares de, no mínimo, dois terços das frações ideais e torna-se, desde logo, 
          obrigatória para os titulares de direito sobre as unidades, ou para quantos sobre 
          elas tenham posse ou detenção."
        </blockquote>

        <p>
          13. Cabe ao <strong>síndico</strong> representar o condomínio e fazer cumprir a convenção 
          e o regimento interno, conforme <strong>art. 1.348, incisos I, II e IV do Código Civil</strong>:
        </p>

        <blockquote className="border-l-4 border-gray-400 pl-4 my-4 italic text-gray-700">
          "Art. 1.348. Compete ao síndico:<br />
          I — convocar a assembleia dos condôminos;<br />
          II — representar, ativa e passivamente, o condomínio, praticando, em juízo ou fora 
          dele, os atos necessários à defesa dos interesses comuns;<br />
          [...]<br />
          IV — cumprir e fazer cumprir a convenção, o regimento interno e as determinações 
          da assembleia;"
        </blockquote>

        <p>
          14. A recusa do síndico em demarcar as vagas para motocicletas previstas na convenção 
          configura <strong>descumprimento de dever legal</strong>, pois a convenção não confere ao 
          síndico discricionariedade para decidir se cumprirá ou não suas disposições.
        </p>

        <p>
          15. A deliberação em assembleia que rejeita a demarcação de vagas <strong>já previstas na 
          convenção é nula de pleno direito</strong>, pois assembleia condominial não pode deliberar 
          contra disposição expressa da convenção vigente, nos termos do <strong>art. 1.351 do 
          Código Civil</strong>, que exige quórum qualificado de 2/3 dos condôminos para alterar a 
          convenção.
        </p>

        <p>
          16. O <strong>art. 1.336, inciso I do Código Civil</strong> impõe aos condôminos o dever de 
          contribuir para as despesas do condomínio e <strong>respeitar a convenção</strong>:
        </p>

        <blockquote className="border-l-4 border-gray-400 pl-4 my-4 italic text-gray-700">
          "Art. 1.336. São deveres do condômino:<br />
          I — contribuir para as despesas do condomínio na proporção das suas frações ideais, 
          salvo disposição em contrário na convenção;"
        </blockquote>

        <p>
          17. A conduta do síndico e dos moradores que atacaram o Autor configura 
          <strong> ato ilícito</strong> nos termos dos <strong>arts. 186 e 187 do Código Civil</strong>, 
          gerando o dever de indenizar (art. 927):
        </p>

        <blockquote className="border-l-4 border-gray-400 pl-4 my-4 italic text-gray-700">
          "Art. 186. Aquele que, por ação ou omissão voluntária, negligência ou imprudência, 
          violar direito e causar dano a outrem, ainda que exclusivamente moral, comete ato ilícito."
        </blockquote>

        <p>
          18. O <strong>art. 5º, inciso X, da Constituição Federal</strong> assegura a inviolabilidade 
          da honra e da imagem das pessoas, assegurado o direito a indenização pelo dano material 
          ou moral decorrente de sua violação.
        </p>

        {/* III - DOS PEDIDOS */}
        <h2 className="text-xl font-bold border-b border-gray-400 pb-2 mb-4 mt-10">III — DOS PEDIDOS</h2>

        <p>19. Ante o exposto, requer-se a Vossa Excelência:</p>

        <p className="font-bold mt-4">a) OBRIGAÇÃO DE FAZER:</p>
        <p className="ml-4">
          Que seja determinado ao Réu (Condomínio Residencial Vila Mazzei, na pessoa de seu 
          síndico) que proceda à <strong>imediata demarcação de ao menos 01 (uma) ou mais vagas 
          para motocicletas</strong> na garagem do condomínio, conforme previsto no item b. 1.B da 
          Convenção do Condomínio, preferencialmente nos espaços ociosos já identificados pelo 
          Autor (que não são áreas de manobra nem de estacionamento de automóveis), no prazo 
          de <strong>15 (quinze) dias</strong>, sob pena de <strong>multa diária (astreintes) de 
          R$ 200,00 (duzentos reais)</strong> por dia de descumprimento, em favor do condomínio, 
          uma vez que a obrigação recai unicamente sobre o síndico;
        </p>

        <p className="font-bold mt-4">b) INDENIZAÇÃO POR DANOS MORAIS:</p>
        <p className="ml-4">
          A condenação do Réu ao pagamento de indenização por <strong>danos morais</strong> no valor 
          de <strong>3 (três) salários mínimos vigentes (R$ 4.236,00 — salário mínimo de 2024: 
          R$ 1.412,00)</strong>, em razão da humilhação pública sofrida em assembleia, dos ataques 
          verbais, da ameaça e tentativa de agressão física, e do constrangimento de ter que buscar 
          abrigo fora de sua própria residência, além do registro de Boletim de Ocorrência;
        </p>

        <p className="font-bold mt-4">c) INDENIZAÇÃO POR DANOS MATERIAIS:</p>
        <p className="ml-4">
          A condenação do Réu ao ressarcimento dos <strong>danos materiais</strong> decorrentes da 
          impossibilidade de uso de vaga própria para motocicleta, obrigando o Autor a utilizar 
          vaga emprestada de terceiro em situação precária, incluindo eventuais custas com 
          estacionamento externo, deslocamentos e transtornos;
        </p>

        <p className="font-bold mt-4">d) SEM ÔNUS AO AUTOR:</p>
        <p className="ml-4">
          Que eventual custo de demarcação das vagas <strong>não seja imputado ao Autor</strong>, 
          tendo em vista que o mesmo já suporta desgaste emocional, ofensas, humilhação e ameaça 
          real, e que a demarcação é obrigação do condomínio prevista em sua própria convenção;
        </p>

        <p className="font-bold mt-4">e) GRATUIDADE DE JUSTIÇA:</p>
        <p className="ml-4">
          A concessão dos benefícios da <strong>Justiça Gratuita</strong>, nos termos do art. 98 do 
          CPC, por não possuir condições de arcar com as custas processuais sem prejuízo de seu 
          sustento;
        </p>

        <p className="font-bold mt-4">f) CITAÇÃO DO RÉU:</p>
        <p className="ml-4">
          A citação do Réu para, querendo, comparecer à audiência de conciliação e apresentar 
          contestação, sob pena de revelia;
        </p>

        <p className="font-bold mt-4">g) PRODUÇÃO DE PROVAS:</p>
        <p className="ml-4">
          Protesta provar o alegado por todos os meios em direito admitidos, especialmente 
          documental (convenção do condomínio, notificação extrajudicial, B.O. de ameaça, 
          prints e registros da campanha), testemunhal e demais que se fizerem necessárias.
        </p>

        {/* Valor da causa */}
        <div className="mt-10 p-4 border-2 border-gray-800 rounded text-center">
          <p className="font-bold">
            Dá-se à causa o valor de R$ 4.236,00 (quatro mil duzentos e trinta e seis reais), 
            equivalente a 3 (três) salários mínimos vigentes.
          </p>
        </div>

        {/* Encerramento */}
        <div className="mt-10 text-center">
          <p>Nestes termos,</p>
          <p>Pede deferimento.</p>
          <p className="mt-6">[Cidade/UF], [dia] de [mês] de [ano].</p>
          <div className="mt-12 border-t border-gray-800 pt-4 max-w-xs mx-auto">
            <p className="font-bold">[NOME COMPLETO DO AUTOR]</p>
            <p className="text-sm text-gray-600">Autor — em causa própria</p>
          </div>
        </div>

        {/* Documentos anexos */}
        <div className="mt-12 border-t-2 border-gray-300 pt-6">
          <h3 className="font-bold text-lg mb-4">DOCUMENTOS ANEXOS:</h3>
          <ol className="list-decimal ml-6 space-y-1">
            <li>Convenção do Condomínio Residencial Vila Mazzei (íntegra)</li>
            <li>Prints do trecho da convenção — 09 vagas para motos (item b. 1.B)</li>
            <li>Print do trecho da convenção — previsão de uso de manobrista</li>
            <li>Notificação Extrajudicial enviada ao síndico e à administradora</li>
            <li>Comprovante de recebimento/protocolo da notificação</li>
            <li>Boletim de Ocorrência — ameaça</li>
            <li>Fotos e prints da campanha de conscientização (landing page)</li>
            <li>Fotos dos espaços ociosos na garagem</li>
            <li>Mapa da garagem com sugestão de demarcação</li>
          </ol>
        </div>

        {/* Links */}
        <div className="mt-8 p-4 bg-gray-100 rounded-lg">
          <p className="font-bold mb-2">LINKS DE REFERÊNCIA:</p>
          <ul className="space-y-1 text-sm">
            <li>
              📄 Convenção completa:{" "}
              <a href="https://drive.google.com/file/d/1Eze2a8Oww5tGmk3Qy0Zj5tK_UiOvDB2A/view?usp=sharing" 
                 target="_blank" rel="noopener noreferrer" className="text-blue-700 underline break-all">
                https://drive.google.com/file/d/1Eze2a8Oww5tGmk3Qy0Zj5tK_UiOvDB2A/view
              </a>
            </li>
            <li>
              📄 Regras da garagem:{" "}
              <a href="https://drive.google.com/file/d/1ppIo5rhX0ZLOYEL_8_Z5gBrfUAS8kRc7/view?usp=sharing" 
                 target="_blank" rel="noopener noreferrer" className="text-blue-700 underline break-all">
                https://drive.google.com/file/d/1ppIo5rhX0ZLOYEL_8_Z5gBrfUAS8kRc7/view
              </a>
            </li>
            <li>
              🌐 Site da campanha:{" "}
              <a href="https://vagas-mazzei.lovable.app" 
                 target="_blank" rel="noopener noreferrer" className="text-blue-700 underline break-all">
                https://vagas-mazzei.lovable.app
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

const Peticao = () => {
  const [senha, setSenha] = useState("");
  const [autorizado, setAutorizado] = useState(false);
  const [erro, setErro] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (senha === SENHA) {
      setAutorizado(true);
      setErro(false);
    } else {
      setErro(true);
    }
  };

  if (autorizado) return <PeticaoContent />;

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <form onSubmit={handleSubmit} className="bg-card border border-border rounded-xl p-8 max-w-sm w-full shadow-lg text-center">
        <Lock className="mx-auto mb-4 text-muted-foreground" size={32} />
        <h1 className="text-xl font-bold mb-2">Acesso Restrito</h1>
        <p className="text-sm text-muted-foreground mb-6">Digite a senha para visualizar este documento.</p>
        <input
          type="password"
          value={senha}
          onChange={e => setSenha(e.target.value)}
          placeholder="Senha"
          className="w-full px-4 py-2 border border-input rounded-md mb-3 text-center text-lg tracking-widest bg-background"
          autoFocus
        />
        {erro && <p className="text-destructive text-sm mb-3">Senha incorreta.</p>}
        <button type="submit" className="w-full bg-primary text-primary-foreground py-2 rounded-md font-semibold hover:opacity-90 transition-opacity">
          Acessar
        </button>
      </form>
    </div>
  );
};

export default Peticao;
