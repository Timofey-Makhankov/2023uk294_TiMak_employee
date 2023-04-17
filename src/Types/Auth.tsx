import { FormikConfig } from "formik"

export type Auth = {
    title: string
    link: string
    linkDescription: string
    route: string
    handleSubmit?: Function
    formik?: FormikConfig<any>
}