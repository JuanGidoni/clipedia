import Button from "../../atoms/Button"
import FormGroup from "../../molecules/FormGroup"

const Form = () => {
 return (
  <form className="form" 
  onSubmit={
   (e) => e.preventDefault()
  }>
   <FormGroup />
   <Button text="Save" />
  </form>
 )
}

export default Form
