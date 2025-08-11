import { PageRoutes } from "@/lib/pageroutes"

export const Navigations = [
  {
    title: "Docs",
    href: `/docs${PageRoutes[0].href}`,
  },
  {
    title: "Home",
    href: "https://workflows-go.org",
    external: true,
  },
]

export const GitHubLink = {
  href: "https://github.com/AstraBert/workflows-go",
}

export const GitHubLinkDocs = {
  href: "https://github.com/AstraBert/workflows-go-docs",
}