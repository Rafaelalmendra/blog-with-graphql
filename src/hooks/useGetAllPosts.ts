import { gql, useQuery } from "@apollo/client";

const getAllPosts = gql`
  query {
    posts {
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

const useGetAllPosts = () => {
  const { data, loading, error } = useQuery(getAllPosts);
  return {
    data,
    loading,
    error,
  };
};

export default useGetAllPosts;
