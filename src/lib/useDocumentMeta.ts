import { useEffect } from "react";
import { site } from "@/config/site";

/** SEO por rota: título, descrição e canonical. */
export function useDocumentMeta(title: string, description?: string, path = "/") {
  useEffect(() => {
    document.title = title;
    if (description) {
      document.querySelector('meta[name="description"]')?.setAttribute("content", description);
      document.querySelector('meta[property="og:description"]')?.setAttribute("content", description);
    }
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", title);
    const url = `${site.url}${path}`;
    document.querySelector('link[rel="canonical"]')?.setAttribute("href", url);
    document.querySelector('meta[property="og:url"]')?.setAttribute("content", url);
  }, [title, description, path]);
}
