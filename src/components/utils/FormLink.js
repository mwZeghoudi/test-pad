import Link from "next/link"
export default function FormLink({
  href = '#',
  label = ''
}) {
  return (
    <Link href={href} className='font-medium text-blue-600 hover:text-blue-800'>{label}</Link>
  )
}
