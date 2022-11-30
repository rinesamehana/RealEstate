import { ErrorMessage, useField } from "formik"
import CSS from "csstype";
const LabelStyle: CSS.Properties = {
  width: "310px",
  padding: "10px",
marginBottom:"15px",

height:"50px",

};
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
            <div >
                <label htmlFor={props.name || props.id}> {label} </label>

                <select style={LabelStyle} {...field} {...props} >

                    <option value="" >Select</option>

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