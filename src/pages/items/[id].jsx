const CACHE_TIME_SECONDS = 10;

const ContentPage = ({ content }) => {
  return <div>{content}</div>;
};

export default ContentPage;

export const getStaticPaths = async () => {
  const allItemsResponse = await fetch("http://localhost:2999/items");
  const allItems = await allItemsResponse.json();

  const allIds = allItems.map((item) => item.id);
  console.log("Will generate paths for ids:");
  console.log(allIds);

  return {
    paths: allIds.map((id) => ({ params: { id } })),
    fallback: "blocking",
  };
};

export const getStaticProps = async (context) => {
  const { id } = context.params;
  try {
    const itemResponse = await fetch("http://localhost:2999/items/" + id);
    const item = await itemResponse.json();

    console.log("Successfully generated page for item", id);
    return {
      props: { content: item.content },
      revalidate: CACHE_TIME_SECONDS,
    };
  } catch (error) {
    console.error("Error generating page for item", id);
    return {
      notFound: true,
      revalidate: CACHE_TIME_SECONDS,
    };
  }
};
