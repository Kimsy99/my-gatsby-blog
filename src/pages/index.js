import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout" //wrap comopennt
import Image from "../components/image" //provide lazy loading of images
import SEO from "../components/seo"

import ProfilePicture from "../assets/profile-pic-2.png"

const ProfilePictureMask = styled.img`
  margin: 10px 0;
  clip-path: circle(125px at center);
  width: 350px;
  height: auto;
`
const Description = styled.div``
const Blog = styled.div`
  background-color: #3437a2;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 10px;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
  position: relative;
`
const Intro = styled.div`
  /* background-image: linear-gradient(-213deg, #5e31dc 0%, #3155dc 100%); */
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`
const BlogLink = styled(Link)``
const Date = styled.span`
  font-size: 12px;
  color: grey;
`
const BlogTitle = styled.h3`
  margin-bottom: 0px;
`
const BlogCategories = styled.span`
  position: absolute;
  right: 5px;
  top: 5px;
  border: 2px solid var(--highlight-pink);
  padding: 5px;
  border-radius: 10px;
`
export default ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <div>
      <Intro>
        <ProfilePictureMask src={ProfilePicture} alt="Profile picture" />
        <Description>
          <h1>Kim Sheng Yong</h1>
          <p>
            I am a student from Xiamen University Malaysia majoring in Software
            Engineering.
          </p>
          <p>This is my blog where i express all my ideas.</p>
          <p>Listed below my Social Media</p>
          <ul>
            <li>
              <a href="https://github.com/Kimsy99" target="_blank">
                Github
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/kim-sheng-yong-2b7895194/"
                target="_blank"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://twitter.com/kimsyyy99" target="_blank">
                Twitter
              </a>
            </li>
          </ul>
          <p>
            I am open for any work and collaboration. You have have a look on my{" "}
            <a
              href="https://drive.google.com/file/d/1-KgetwrvEAToMAfz8NHebrFC6PDfai3G/view?usp=sharing"
              target="_blank"
            >
              resume
            </a>{" "}
            and also you may drop me an email to kimshengyong@gmail.com
          </p>
        </Description>
      </Intro>
      <div>
        <h1>Blog Posts</h1>
        <h4>{data.allMarkdownRemark.totalCount} posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Blog key={node.id}>
            <BlogLink to={node.fields.slug}>
              <BlogTitle>{node.frontmatter.title}</BlogTitle>
            </BlogLink>
            <Date>Posted on {node.frontmatter.date}</Date>
            <BlogCategories>{node.frontmatter.categories}</BlogCategories>
            <p>{node.excerpt}</p>
          </Blog>
        ))}
      </div>
    </div>
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            date
            categories
          }
          fields {
            slug
          }
          excerpt
        }
      }
      totalCount
    }
  }
`
