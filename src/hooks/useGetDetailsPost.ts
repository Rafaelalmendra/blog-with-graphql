import { gql, useQuery } from "@apollo/client";

const getDetailsPost = gql`
  query Post($slug: String!) {
    post(where: { slug: $slug }) {
      id
      slug
      title
      datePublished
      content {
        html
      }
      author {
        name
        avatar {
          url
        }
      }
      coverPhoto {
        id
        url
      }
    }
  }
`;

const useGetDetailsPost = (slug: any) => {
  const { data, loading, error } = useQuery(getDetailsPost, {
    variables: {
      slug,
    },
  });

  return {
    data,
    loading,
    error,
  };
};

export default useGetDetailsPost;
