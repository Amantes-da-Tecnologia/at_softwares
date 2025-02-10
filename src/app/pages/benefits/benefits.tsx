import { BadgeCheck, ArrowUp, ChartBar } from "lucide-react";

export default function Benefits() {
  return (
    <section>
      <div className="flex flex-col text-center mt-20">
        <h1 className="text-lg font-bold md:text-3xl">Principais Beneficios</h1>
        <p
          style={{ display: "block" }}
          className="text-[10px] text-gray-400 mt-2 md:text-lg md:">
          Sites e apps rápidos e eficientes, preparados para garantir a melhor
          experiência aos seus usuários.
        </p>
      </div>

      <article className="flex mt-20 flex-col gap-5 md:gap-20 md:grid md:grid-cols-3">

        <div className="flex gap-5 mt-10">
          <div className="bg-green-300 h-max justify-center items-center flex p-1 rounded-xl">
            <BadgeCheck size={30} className="md:size-16 text-white" />
          </div>
          <div>
            <h1 className="text-sm font-semibold md:text-3xl">Soluções Personalizadas</h1>
            <p className="text-[8px] mt-2 text-gray-400 md:text-sm">
              Criamos soluções digitais sob medida para o seu negócio,
              garantindo que cada site, landing page ou app atenda exatamente às
              suas necessidades e objetivos.
              <br/><br/> 
              De designs modernos a funcionalidades específicas, sua presença online será única e eficaz.
            </p>
          </div>
        </div>

        <div className="flex gap-5 mt-10">
          <div className="bg-red-300 h-max justify-center items-center flex p-1 rounded-xl">
            <ArrowUp size={30} className="md:size-16 text-white " />
          </div>
          <div>
            <h1 className="text-sm font-semibold md:text-3xl">Impulsionando suas vendas</h1>
            <p className="text-[8px] mt-2 text-gray-400 md:text-sm">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident, sequi!
            <br/><br/> 
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur id facilis voluptate ex suscipit at delectus? Quod, fuga cupiditate. Praesentium.
            </p>
          </div>
        </div>
        <div className="flex gap-5 mt-10">
          <div className="bg-yellow-300 h-max justify-center items-center flex p-1 rounded-xl">
            <ChartBar size={30} className="md:size-16 text-white" />
          </div>
          <div>
            <h1 className="text-sm font-semibold md:text-3xl">Desempenho e Escalabilidade</h1>
            <p className="text-[8px] mt-2 text-gray-400 md:text-sm">
            Nossos sites são construídos para oferecer um desempenho rápido e confiável. 
            <br/><br/>
            Seja qual for o seu objetivo, desde o aumento de tráfego até a expansão do seu negócio, garantimos soluções escaláveis que crescem junto com você.
            </p>
          </div>
        </div>
      </article>

      <hr className="mt-32"/>
    </section>
  );
}
