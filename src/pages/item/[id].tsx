import { useRouter } from "next/router";
import Link from "next/link";

export default function Page() {
  const router = useRouter();
  return (
    <div>
      <p>Item: {router.query.id}</p>
      <Link href="/">Home</Link>
    </div>
  );
}
