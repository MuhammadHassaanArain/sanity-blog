import client from "@/app/sanity/client";
import {PortableText} from '@portabletext/react'


export default async function BlogContent({
  params,
}: {
  params: { id: string };
}) {
  const res = await client.fetch(
    `*[_type == "blogs" && slug.current=="${params.id}"]{blogdesciription}`
  );
  console.log(res);
  if (!res || res.length === 0 || !res[0].blogdesciription) {
    return <p>No blog description available.</p>; 
  }
  return (
    <div className="mx-auto px-10">
      <PortableText value={res[0].blogdesciription} />
    </div>
  )
};


