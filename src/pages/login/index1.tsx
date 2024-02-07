import React from 'react'
import { useAuth1 } from 'src/hooks/useAuth1'
const index1 = () => {
  const defaultValues = {
    password: 'admin',
    email: 'admin@materialize.com'
  }
  interface FormData {
    email: string
    password: string
  }

  const onSubmit = (data: FormData) => {
    const { email, password } = data
    const auth = useAuth1()

    return <div>index1</div>
  }
}

export default index1
