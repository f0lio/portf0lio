import React from "react";

import { Title, Bullet, Description } from "@components/common/Text";
import Layout from "@components/Layout";

const Etc = () => {
  return (
    <Layout pageName={"etc"} pageTitle="F0lio - etc">
      <Title>Etc</Title>
      <Description>
        Here you can find other stuff that you may or may not like. For which I
        hope I can elaborate on in the future.
      </Description>
      <Bullet>Design creates society, and sometimes represents it.</Bullet>
      <Bullet>
        Speed is the essence of technology, at least initially. And we are
        forgetting that, very quickly.
      </Bullet>
      <Bullet>
        To be fast, you need to be simple. To be simple, you need to be fast.
      </Bullet>
      <Bullet>
        Self-reflections are mostly more instructive than future projections.
      </Bullet>
      <Bullet>
        If you think that the above statements are wise or contradictory, you
        are probably right.
      </Bullet>
    </Layout>
  );
};

export default Etc;
