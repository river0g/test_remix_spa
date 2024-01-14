import {
  useLoaderData,
  json,
  ClientLoaderFunctionArgs,
  ClientActionFunctionArgs,
} from "@remix-run/react";

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

const saveStuff = async (request: Request) => {
  console.log(`save: ${request}`);
};

export async function clientLoader({
  request,
  params,
}: ClientLoaderFunctionArgs) {
  let res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = (await res.json()) as User[];
  console.log({ data });
  return json(data);
}

export async function clientAction({
  request,
  params,
}: ClientActionFunctionArgs) {
  await saveStuff(request);
  return { ok: true };
}

export default function AppIndex() {
  const data = useLoaderData<typeof clientLoader>();

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Welcome to Remix (SPA Mode)</h1>
      <h2>Prefetch none</h2>
      <ul>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>
      <ul>
        {data.map((user) => {
          return (
            <li key={user.id}>
              name: {user.name}, email: {user.email}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
