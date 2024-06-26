import { useTranslations } from "next-intl";

export const About = () => {
  const t = useTranslations();
  return (
    <section id="about" className="pt-16">
      <div className="text-wrap">
        <h2 className="uppercase font-bold pb-6 lg:hidden">
          {t("links.about.name")}
        </h2>
        <p className="text-balance">
          {t.rich("about.first", {
            important: (msg) => <b>{msg}</b>,
          })}
        </p>
        {/* <p className="text-balance mt-3">
        Un logro destacado en mi carrera fue obtener el tercer lugar en un
        concurso universitario organizado por el Banco Santander, donde lideré
        el desarrollo de una aplicación para donantes de sangre utilizando React
        Native.
        </p>
        <p className="text-balance mt-3">
        Mi enfoque de trabajo se centra en la calidad del producto y en seguir
        los estándares de desarrollo, como los principios SOLID, para garantizar
        soluciones robustas y escalables.
      </p> */}
        <p className="text-balance mt-3">{t("about.second")}</p>
        <p className="text-balance mt-3">{t("about.third")}</p>
      </div>
    </section>
  );
};
