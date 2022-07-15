import React from "react";
import { getProps } from "@builtjs/site";
import Error from "next/error";
import { withRouter } from "next/router";
import SEO from "@/templates/head/seo/seo";
import Banner4 from "@/templates/banners/banner-4/banner-4";
import Block2 from "@/templates/blocks/block-2/block-2";
import Cover2 from "@/templates/covers/cover-2/cover-2";
import Layout from "@/layout/layout";

const Page = (props) => {
  if (props.error) {
    return <Error statusCode={props.error.code} />
  }
  return (
     <>
	<SEO content={props.servicesSeoContent} />
		<Layout headerContent={props.headerContent}  footerContent={props.footerContent} >
			 <Cover2 content={props.servicesLandingContent} />
			 <Block2 content={props.servicesBlockContent} />
			 <Banner4 content={props.contactTeaserContent} />
			</Layout>
		</>
  );
};

export default withRouter(Page);

export async function getStaticProps() {
  let props = await getProps({pageSlug: 'service'});
  return {
    props: props
  };
}