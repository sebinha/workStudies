import type { GetStaticProps, NextPage } from "next";
export default function Home({ org }: { org: any }) {
  return (
    <div>
      <h1>{org.login}</h1>
      <h3>{org.description}</h3>

      <p>
        Site: <a href={org.blog} />
        {org.blog}
      </p>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch("http://api.github.com/orgs/rocketseat");
  const data = await response.json();

  return {
    props: {
      org: data,
    },
    revalidate: 10,
  };
};
