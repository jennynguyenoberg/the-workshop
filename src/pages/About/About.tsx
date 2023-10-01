import React from "react";
import Footer from "../../components/Footer/Footer";
import {
  StyledMainContainer,
  StyledLeftContainer,
  StyledRightContainer,
  StyledParagraph,
  StyledImageContainer,
  StyledImage1,
} from "./About.styles";

import Image1 from "/images/Image-of-Carl-Auböck-1.jpg";
import Image2 from "/images/Image-of-Carl-Auböck-2.jpg";

const About: React.FC = () => {
  return (
    <>
      <StyledMainContainer>
        <StyledLeftContainer>
          <StyledParagraph>
            <p>
              Carl Auböck was an Austrian designer and artisan known for his
              contributions to the fields of modernist design and craftsmanship.
              He was born on February 22, 1900, in Vienna, Austria, and died on
              April 24, 1957. Auböck came from a family of craftsmen and
              artisans, and he continued this tradition by becoming a prominent
              figure in the world of design and decorative arts.
            </p>
            <p>
              Carl Auböck was particularly celebrated for his work in the realm
              of functional objects, including furniture, lighting, and various
              home accessories. His designs often blended traditional
              craftsmanship with modernist aesthetics, and he was associated
              with the Vienna Werkstätte, a design cooperative that played a
              significant role in the Austrian and German design movements of
              the early 20th century.
            </p>
            <p>
              One of Auböck's most iconic creations is the "Wagenfeld Lamp,"
              which he co-designed with Wilhelm Wagenfeld in 1950. This lamp is
              a classic example of Bauhaus-inspired design and remains highly
              regarded today.
            </p>
            <p>
              The Auböck family's design legacy continued through Carl's son,
              Carl Auböck II, and grandson, Carl Auböck III, who both carried on
              the tradition of craftsmanship and design in their own right. The
              family's workshop, Werkstätte Carl Auböck, continues to produce
              handmade, high-quality objects and continues to be recognized for
              its contributions to the world of design. Carl Auböck's work and
              legacy continue to influence contemporary designers and collectors
              interested in modernist and mid-century design.
            </p>
          </StyledParagraph>
        </StyledLeftContainer>
        <StyledRightContainer>
          <StyledImageContainer>
            <StyledImage1
              src={Image1}
              alt="Image of Carl Auböck in his workshop with his son."
              width={320}
            />
            <img src={Image2} alt="Image of Carl Auböck" width={260} />
          </StyledImageContainer>
        </StyledRightContainer>
      </StyledMainContainer>
      <Footer />
    </>
  );
};

export default About;
