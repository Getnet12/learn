import {graphql} from 'gatsby';
import Img from 'gatsby-image';

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      frontmatter {
        title
        description
        avatar {
          childImageSharp {
            fixed(width: 40, height: 40) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        href
        tags
      }
      fields {
        date(formatString: "MMMM DD, YYYY")
        attendants {
          frontmatter {
            name
            avatar {
              childImageSharp {
                fixed(width: 40, height: 40) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
      html
    }
  }
`;

export default ({data}) => {
  const {fields, frontmatter, html} = data.markdownRemark;
  const {date} = fields;
  const {title, href, description, banner, organizers, tags} = frontmatter;
  const {sizes} = banner.childImageSharp;

  return (
    <div>
      Title:
      {title}
      <br />
      Link to event:
      <a href={href}>{href}</a>
      Description:
      {description}
      <br />
      organizers:
      {organizers.join(', ')}
      <br />
      <Img {...{sizes}} />
      <br />
      Date:
      {date}
      <br />
      <br />
      <br />
      Tags:
      {tags && tags.join(', ')}
      <br />
      {/* eslint-disable-next-line */}
      <div dangerouslySetInnerHTML={{__html: html}} />
    </div>
  );
};
