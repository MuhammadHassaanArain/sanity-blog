import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url'

const client = createClient({
  projectId: "9oo0b9na",
  dataset: "production",
  apiVersion: "2024-10-04",
  useCdn: false
});


const builder = imageUrlBuilder(client)

export function urlFor(source:string) {
  return builder.image(source)
};


export default client;