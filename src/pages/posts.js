import React from 'react';
import Head from 'components/head';
import Layout from 'components/layout';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

const Posts = ({ data }) => (
  <Layout>
    <Head pageTitle={data.postsJson.title} />
  </Layout>
);

Posts.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Posts;

export const query = graphql`
  query PostsQuery {
    postsJson {
      title
    }
  }
`;