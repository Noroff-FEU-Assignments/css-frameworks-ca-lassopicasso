import React from "react";
import ContentCarousel from "./ContentCarousel";
import ContentTabs from "./ContentTabs";
import Container from "react-bootstrap/Container";

function Home() {
  return (
    <div>
      <ContentCarousel />

      <Container className="mt-4">
        <div className="mb-5">
          <h1>We do YAY things</h1>
          <p>
            Nam tincidunt, sapien nec congue porta, tellus risus ullamcorper mi, a rutrum justo eros pretium libero. Nullam vel enim id mauris eleifend finibus et ac orci. Aliquam metus massa, aliquam quis arcu sit amet, consectetur faucibus urna. Suspendisse massa diam, efficitur eu massa euismod,
            pretium lacinia magna. Donec mi orci, sollicitudin in luctus a, varius eget massa.
          </p>
        </div>
        <ContentTabs />
      </Container>
    </div>
  );
}

export default Home;
