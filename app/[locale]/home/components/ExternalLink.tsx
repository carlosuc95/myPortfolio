import { useTranslations } from "next-intl";
import Link from "next/link";
import { IconType } from "react-icons";

interface Props {
  src: string;
  name: string;
  Icon: IconType;
}

export const ExternalLink = ({ src, name, Icon }: Props) => {
  if (src === "#") {
    return (
      <div className="flex my-10">
        <span className="flex items-center gap-3 text-slate-500 font-bold uppercase">
          {<Icon />}
          {name}
        </span>
      </div>
    );
  }
  return (
    <div className="flex my-10">
      <Link
        href={src}
        className="flex items-center gap-3 text-blue-500 font-bold uppercase"
      >
        {<Icon />}
        {name}
      </Link>
    </div>
  );
};
