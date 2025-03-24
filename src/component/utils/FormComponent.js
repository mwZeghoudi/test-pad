import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import {
  Form,
  FormField,
} from "@/components/ui/form"
import MainBtn from "./MainBtn"
import FormInput from "./FormInput"
import { formConstructor } from "@/@/lib/utils"

export default function FormComponent({
  beforeSubmit,
  className = '',
  formObject,
  disable = false,
  action
}) {
  const { formSchema, defaultValues } = formConstructor(formObject)
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues
  })

  return (
    <Form {...form}>
      <form
        className="space-y-5 w-full"
        action={action}
      >
        {formObject.map((el, i) => (
          <FormField
            key={i}
            control={form.control}
            name={el.name}
            render={({ field }) => (
              <FormInput className={className} field={field} {...el} disable={disable} />
            )}
          />
        ))}
        {beforeSubmit}
        <MainBtn type="submit" label="Submit" disable={disable} />
      </form>
    </Form>
  )
}
