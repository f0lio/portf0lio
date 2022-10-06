import { TechBox } from "@components/common/Boxes";
import { Description, SubTitle } from "@components/common/Text";
import Layout from "@components/Layout";
import { techs } from "@data/index";

export default function Home() {
  return (
    <Layout pageName="home" pageTitle="F0lio - Home">
      <div className="selection:text-primary-2">
        <div className="group flex items-end font-mono text-4xl text-gray-100 sm:text-6xl md:cursor-pointer">
          <div className="items-start sm:flex sm:grid-cols-2">
            <p className="mr-2 max-w-min py-3 sm:py-0">Hi,</p>
            <div className="col-span-2 flex items-end whitespace-nowrap ">
              <p className="text-primary group-hover:text-primary-1/80">
                I&#39;m Omar
              </p>
              <p className="px-3 pb-2 text-lg text-gray-400 group-hover:text-primary sm:text-xl">
                (aka F0lio)
              </p>
            </div>
          </div>
        </div>
        <div className="py-2 text-base font-normal">
          <Description>
            I&#39;m a Technology Enthusiast, interested in Full stack web
            development.
            <br />
          </Description>
        </div>
      </div>
      <article className="pt-4">
        <SubTitle>Technologies</SubTitle>
        <Description>
          So far, with no particular order, these are some techs that I&apos;ve
          been using, or at least I&apos;m not afraid to use. Surely there are
          many others that I did not mention, either because I forgot or because
          I haven&apos;t used them yet.
          <br />
          P.S. for the last item, it&apos;s there just to make the grid look
          better.
        </Description>
        <ul className="grid grid-cols-2 flex-wrap gap-4 py-4 sm:grid-cols-3 md:grid-cols-4">
          {techs.map((item, key) => (
            <TechBox {...item} key={key} />
          ))}
        </ul>
        <Description>
          Yes, CSS is a technology, a really interesting one.
        </Description>
      </article>
    </Layout>
  );
}
