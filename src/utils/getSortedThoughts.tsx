import type { CollectionEntry } from "astro:content";

const getSortedThoughts = (thoughts: CollectionEntry<"thoughts">[]) =>
  thoughts
    .filter(({ data }) => !data.draft)
    .sort(
      (a, b) =>
        Math.floor(new Date(b.data.modDatetime).getTime() / 1000) -
        Math.floor(new Date(a.data.modDatetime).getTime() / 1000)
    );

export default getSortedThoughts;
