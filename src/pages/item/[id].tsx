import { useRouter } from 'next/router'
import Link from 'next/link'
import Label from '@/components/Label'

export default function Page() {
  const router = useRouter()
  return (
    <div>
      <p>Item: {router.query.id}</p>
      <Label label="aaa" num={1} />
      <Link href="/">Home</Link>
    </div>
  )
}
