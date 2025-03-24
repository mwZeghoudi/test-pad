import { Button } from "@/components/ui/button"

export default function MainBtn({
  type = 'button',
  label = ''
}) {
  return (
    <Button
      type={type}
      className={'rounded-full bg-blue-500 hover:bg-blue-600 w-full cursor-pointer'}
    >
      {label}
    </Button>

  )
}
