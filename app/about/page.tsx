import Image from "next/image";

import { titleFont } from "@/config/fonts";
import { ProfileImage } from "@/components/about/ProfileImage";

const AboutPage = () => {
  return (
    <section className="fade-in  flex h-auto flex-col items-center">
      <h1
        className={`mb-16 text-center text-4xl font-bold md:text-6xl ${titleFont.className}`}
      >
        Sobre Mi
      </h1>
      <ProfileImage />
      <article className="m-auto max-w-3xl text-pretty p-2 md:text-xl lg:max-w-4xl">
        <p className="mb-6 text-pretty">
          Saludos, me llamo{" "}
          <span className="font-semibold text-primary">
            {" "}
            Martín Ferreira Yic
          </span>
          , originario de Tacuarembó, Uruguay, nacido el 19 de septiembre de
          1989, actualmente en Montevideo.
        </p>
        <p className="mb-6 text-pretty">
          En cuanto a mi experiencia laboral, tengo el honor de formar parte del
          equipo de{" "}
          <span className="font-semibold text-primary">
            Despegar, con +9 años,
          </span>{" "}
          una empresa líder en la industria de viajes y tecnología en
          Latinoamérica. En este periodo eh asumido diferentes roles, del 2014
          al 2018 como{" "}
          <span className="font-semibold text-primary">
            Ejecutivo de Cuentas a Pagar Cross Selling,
          </span>{" "}
          siendo mi responsabilidad el minucioso análisis y conciliación de
          cuentas de distintos productos para la ejecución eficiente de procesos
          de pago.
        </p>
        <p className="mb-6 text-pretty">
          Posteriormente, entre 2018 y 2022, desempeñé la función de{" "}
          <span className="font-semibold text-primary">
            Sr Accounts Payable & Receivable Analyst
          </span>{" "}
          en Despegar. Mi labor se centró en el análisis del crédito Non Air, la
          integración de nuevas implementaciones y la rigurosa supervisión de
          los flujos automáticos.
        </p>
        <p className="mb-6 text-pretty">
          Desde 2022 hasta la fecha actual, desempeño la posición de{" "}
          <span className="font-semibold text-primary">Sr Billing Analyst</span>{" "}
          en Despegar. En este papel, mi enfoque principal recae en el control
          de los flujos de facturación, implementando mejoras continuas y nuevas
          estrategias con proveedores, contribuyendo así al desarrollo y la
          eficiencia de los procesos internos de la empresa.
        </p>
        <p className="mb-6 text-pretty">
          En 2021 decidí adentrarme en el mundo del desarrollo web. Durante este
          periodo, eh adquirido habilidades en tecnologías clave como
          JavaScript, React.js, Next.js, Node.js, TypeScript, MongoDB,
          PostgreSQL, entre otras. Mi aprendizaje fue multifacético,
          participando en bootcamps como Coderhouse y siendo autodidacta
          mediante cursos en plataformas como Udemy.
        </p>
        <p className="mb-6 text-pretty">
          En ese mismo año, también retome mis estudios en Ingeniería de
          Software en la Universidad de la República. Esta combinación de
          experiencia autodidacta y académica ha fortalecido mi base de
          conocimientos y habilidades en el ámbito de la tecnología.
        </p>
        <p className="mb-6 text-pretty">
          <span className="font-semibold text-primary">
            Mi visión y metas profesionales
          </span>{" "}
          se enfocan en la constante búsqueda de conocimiento y crecimiento en
          el ámbito del desarrollo web. Mi compromiso con el aprendizaje
          continuo se refleja en mi deseo de explorar nuevas tecnologías,
          perfeccionar habilidades existentes y mantenerme al tanto de las
          últimas tendencias en el mundo digital. Paralelamente, considero
          esencial seguir avanzando en mi carrera universitaria en Ingeniería de
          Software en la Universidad de la República. La combinación de la
          experiencia práctica en el desarrollo web y la formación académica me
          permitirá contribuir de manera significativa al ámbito tecnológico,
          enfrentar desafíos innovadores y seguir construyendo una base sólida
          para mi crecimiento profesional a largo plazo.
        </p>
      </article>
    </section>
  );
};
export default AboutPage;
