import React from "react";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";
import { Layout } from "../components/Layout";
import { Wrapper } from "../components/Wrapper";

const NotFoundPage = () => {
  return (
    <Layout>
      <Helmet>
        <html lang="en" />

        <title>Marvin Frachet · Page not found</title>

        <meta
          name="description"
          content="Marvin Frachet is a senior software engineer building product at scale, with a passion for code quality and automation."
        />
      </Helmet>

      <Wrapper>
        <main>
          <h1>Woops!</h1>

          <p>
            {`The page you're trying to access doesn't exist (yet?)`}
            <Link to="/">Would you like to get back to the homepage?</Link>
          </p>
        </main>
      </Wrapper>
    </Layout>
  );
};

export default NotFoundPage;
