import {
  FormControl,
  FormDescription,
  FormLabel,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"

export default function FormInput({
  field,
  className = '',
  placeholder = '',
  description = '',
  label = '',
  type = 'text'
}) {

  return (
    <FormItem >
      <div className={className}>
        <FormControl>
          {
            type === 'checkbox' ?
              < Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
              /> :
              <Input placeholder={placeholder} {...field} type={type} />
          }
        </FormControl>
        <div className="space-y-1 leading-none">

          {
            label &&
            <FormLabel>
              {label}
            </FormLabel>
          }
          {
            description &&
            <FormDescription>
              {description}
            </FormDescription>
          }
        </div>

      </div>

      <FormMessage />

    </FormItem>
  )
}
