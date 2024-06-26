import { useTranslations } from "next-intl";

type Href = {
  [key: string]: string;
};
export const Footer = () => {
  const t = useTranslations("footer");
  return (
    <footer className="mt-32 mb-16">
      <p className="font-extralight text-sm">
        {t.rich("description", {
          link: (msg) => {
            const hrefs: Href = {
              Figma: "https://www.figma.com/",
              "Next.js": "https://nextjs.org/",
              "Tailwind CSS": "https://tailwindcss.com",
              "GitHub Pages": "https://pages.github.com",
            };
            const page = msg!.toString();
            const href = hrefs[page];
            return (
              <a
                className="font-semibold"
                rel="noopener noreferrer"
                href={href}
              >
                {msg}
              </a>
            );
          },
        })}
      </p>
    </footer>
  );
};
