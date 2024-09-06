import type { CollectionEntry } from "astro:content";
import postFilter from "./postFilter";

const getSortedPosts = (posts: CollectionEntry<"blog">[]) => {
  // ADD Filter for hiding posts that over 2 years
  const twoYearsAgo = new Date();
  twoYearsAgo.setFullYear(twoYearsAgo.getFullYear() - 2);
  return (
    posts
      .filter(postFilter)
      // .filter(post => {
      //   const postDate = new Date(post.data.modDatetime ?? post.data.pubDatetime);
      //   return postDate >= twoYearsAgo && postFilter(post);
      // })
      .sort(
        (a, b) =>
          Math.floor(
            new Date(b.data.modDatetime ?? b.data.pubDatetime).getTime() / 1000
          ) -
          Math.floor(
            new Date(a.data.modDatetime ?? a.data.pubDatetime).getTime() / 1000
          )
      )
  );
};

export default getSortedPosts;
