import { Link } from 'solid-app-router'

interface Props {
  name: string
  link: string
}

export function Credit({ name, link }: Props) {
  return (
    <div class="text-sm text-gray-500 text-right">
      Photo by <Link href={link}>{name}</Link>
    </div>
  )
}
