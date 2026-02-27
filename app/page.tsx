import { appNavigationList } from "@/components/appNavigationList";

export default function Home() {
  return (
    <main>
      <h1 className="text-4xl font-bold text-center mt-8">
        Star Wars API explorer
      </h1>

      <nav className="mt-12 flex flex-col items-center gap-4">
        {appNavigationList.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="text-xl hover:underline"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </main>
  );
}
