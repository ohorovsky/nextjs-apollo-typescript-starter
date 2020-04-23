import React from "react";
import Layout from "../components/Layout";
import { withApollo } from "../lib/apollo";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

const HELLO_QUERY = gql`
  query HelloQuery {
    sayHello
  }
`;

const Home = () => {
  const { data, loading, error } = useQuery(HELLO_QUERY);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>error</div>;
  console.log(data);
  return (
    <Layout>
      <div>
        <h1 className="title">Title</h1>
      </div>
    </Layout>
  );
};

export default withApollo(Home);
