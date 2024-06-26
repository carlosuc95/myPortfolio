import { Header } from "./home/components/Header";
import { Main } from "./home/components/Main";

export default function Home() {
  return (
    <div className="flex flex-col gap-1 mx-auto min-h-screen px-6 md:px-8 lg:px-28 xl:px-52 lg:max-w-screen-xl font-sans lg:flex-row">
      <Header />
      <Main />
    </div>
  );
}
