import { useEffect } from "react";

const BASE = "ARV Constructions";

/** Sets document title + meta description per page. */
export function PageMeta(title: string, description?: string) {
  useEffect(() => {
    document.title = title.includes(BASE) ? title : `${title} | ${BASE}`;
    if (description) {
      let tag = document.querySelector<HTMLMetaElement>('meta[name="description"]');
      if (!tag) {
        tag = document.createElement("meta");
        tag.name = "description";
        document.head.appendChild(tag);
      }
      tag.content = description;
    }
  }, [title, description]);
}
