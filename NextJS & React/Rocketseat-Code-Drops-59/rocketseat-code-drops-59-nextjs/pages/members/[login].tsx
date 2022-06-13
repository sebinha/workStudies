import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Member({ user }: { user: any }) {
    const {isFallback} = useRouter()

    if(isFallback){
        return <p>Carregando</p>
    }

  return (
    <div>
      <Image
        src={user.avatar_url}
        alt={user.name}
        width="80"
        height="80"
        style={{ borderRadius: 40 }}
      />
      <h1>{user.name}</h1>
      <p>{user.bio}</p>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(
    `https://api.github.com/orgs/rocketseat/members`
  );
  const data = await response.json();

  const paths = data.map((member: any) => {
    return { params: { login: member.login } };
  });
  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { login } = context.params!;

  const response = await fetch(`https://api.github.com/users/${login}`);
  const data = await response.json();

  return {
    props: {
      user: data,
    },
    revalidate: 10,
  };
};
