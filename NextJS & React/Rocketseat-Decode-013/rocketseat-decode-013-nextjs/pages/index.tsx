import type { NextPage } from "next";
import { GetServerSideProps, GetStaticProps } from "next";

export const Home: NextPage = ({ repos, date }) => {
  return (
    <>
    <h1>{date}</h1>
    <ul>
      {repos.map((repo) => (
        <li key={repo}>{repo}</li>
      ))}
    </ul>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch("https://api.github.com/users/sebinha/repos");
  const data = await response.json();

  const repositoryNames = data.map((item) => item.name);
  return {
    props: {
      repos: repositoryNames,
      date: new Date().toISOString(),
    },
    revalidate:5,
  };
};
