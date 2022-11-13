import { ErrorMessage, useField } from "formik"

interface Props {
    options: Opt[]
    label: string;
    name: string;
    [x: string]: any
}

type Opt = { value: string | number, desc: string }

export const MyNewSelect = ({ label,options, ...props }: Props) => {
    const [field] = useField(props)

    return (
        <>
            <div>
                <label htmlFor={props.name || props.id}> {label} </label>

                <select {...field} {...props} >

                    <option value="">--- Select ---</option>

                    {
                        options.map(({ desc, value }) => (
                            <option
                                value={value}
                                key={value}
                            >{desc}</option>
                        ))
                    }

                </select>
            </div>
            <ErrorMessage name={props.name} component="span" className="error" />
        </>
    )
}