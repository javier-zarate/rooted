import React from 'react';
import { MainTileWrapper, MainTileContent, Title, SubTitle } from './styles';
import BackgroundImage from 'gatsby-background-image';
import { useStaticQuery, graphql } from 'gatsby';

export function MainTile() {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "main.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <MainTileWrapper>
      <BackgroundImage fluid={data.file.childImageSharp.fluid} />
      <MainTileContent>
        <div>
          <Title>Rooted</Title>
          <SubTitle>From my family to yours.</SubTitle>
        </div>
      </MainTileContent>
    </MainTileWrapper>
  );
}
