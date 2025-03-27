import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useTransition } from "react"; // ✅ Importer useTransition

import { Form, FormField } from "@/@/components/ui/form";
import MainBtn from "./MainBtn";
import FormInput from "./FormInput";
import { formConstructor } from "@/@/lib/utils";

export default function FormComponent({
  beforeSubmit,
  className = "",
  submitLabel = "Submit",
  formObject,
  disable = false,
  schema = null,
  action, // ✅ Action serveur
}) {
  const { formSchema, defaultValues } = formConstructor(formObject);
  const form = useForm({
    resolver: zodResolver(schema || formSchema),
    defaultValues: defaultValues || {}, // 👈 Assure qu'un objet est toujours fourni
  });

  const [isPending, startTransition] = useTransition();

  const onSubmit = async (data) => {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => formData.append(key, value));
    startTransition(() => {
      action(formData);
    });
  };

  return (
    <Form {...form}>
      <form className="space-y-5 w-full" onSubmit={form.handleSubmit(onSubmit)}>
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
        <MainBtn type="submit" label={submitLabel} disable={disable || isPending} />
      </form>
    </Form>
  );
}
