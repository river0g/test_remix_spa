import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix SPA" },
    { name: "description", content: "Welcome to Remix (SPA Mode)!" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Welcome to Remix (SPA Mode)</h1>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/future/spa-mode"
            rel="noreferrer"
          >
            SPA Mode Guide
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
        <li>
          <a href="/app1">Go to app (none)</a>
        </li>
        <li>
          <Link to="/app1" prefetch="none">
            Go to app (none)
          </Link>
        </li>
        <li>
          <Link to="/app2" prefetch="intent">
            Go to app (intent)
          </Link>
        </li>
        <li>
          <Link to="/app3" prefetch="viewport">
            Go to app (viewport)
          </Link>
        </li>
        <li>
          <Link to="/app4" prefetch="render">
            Go to app (render)
          </Link>
        </li>
      </ul>
    </div>
  );
}
