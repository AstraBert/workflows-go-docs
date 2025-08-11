import { Paths } from "@/lib/pageroutes"

export const Documents: Paths[] = [
  {
    heading: "Introduction",
    title: "What and why",
    href: "/introduction",
  },
  {
    spacer: true,
  },
  {
    title: "",
    href: "/getting-started",
    heading: "Getting Started",
  },
  {
    title: "Components",
    href: "/components",
    items: [
      {
        title: "GenericEvent",
        href: "/event",
        items: [
          {
            title: "BaseEvent",
            href: "/base-event",
          },
        ],
      },
      {
        title: "GenericContext",
        href: "/context",
        items: [
          {
            title: "BaseContext",
            href: "/base-context",
          },
        ],
      },
      {
        title: "GenericWorkflow",
        href: "/workflow",
        items: [
          {
            title: "BaseWorkflow",
            href: "/base-workflow",
          },
        ],
      },
    ],
  },
]
