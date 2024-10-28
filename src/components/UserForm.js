import Input from './Input'
import {useState, useReducer} from 'react'
const initialState = {
    name: '',
    age: '',
    email: ''
}
function reducer(state, action){
    console.log(action.type)
    switch (action.type){
        case 'updateField':
            return {
                ...state,
                [action.field]:action.value
            }
        case 'reset':
            return initialState
        default:
            return state
    }
}
const UserForm = ()=>{
    // const [name, setName]=useState('')
    // const [age, setAge]=useState('')
    // const [email, setEmail]=useState('')
    // const [formData, setFormData] = useState({
    //     name:'',
    //     age:'',
    //     email:''
    // })
    // const handleReset=()=>{
    //     // setName('')
    //     // setAge('')
    //     // setEmail('')
    //     setFormData({
    //         name:'',
    //         age:'',
    //         email:''
    //     })
    // }
    // const handleSubmit=(e)=>{
    //     e.preventDefault()
    //     console.log(formData)
    // }
    // const handleChange=(e)=>{
    //     // console.log(e.target.value)
    //     // console.log(e.target.name)
    //     // const name = e.target.name
    //     // const value= e.target.value
    //     const {name, value} = e.target
    //     // setFormData((prevData)=>{
    //     //     return {
    //     //         ...prevData,
    //     //         [name]:value
    //     //     }
    //     // })
    //     setFormData((prevData)=> ({
    //             ...prevData,
    //             [name]:value
    //         })
    //     )
    // }
    ////////////////////////////////////////
    const [state, dispatch] = useReducer(reducer, initialState)
    const handleChange=(e)=>{
        dispatch({
            type:'updateField',
            field:e.target.name,
            value:e.target.value
        })
    }
    const handleSubmit =(e)=>{
        e.preventDefault()
        console.log('Data:', state)
    }
    const handleReset=()=>{
        dispatch({type: 'reset'})
    }
    return(
        <form onSubmit={handleSubmit}>
            <Input label="Name" name="name" value={state.name} onChange={handleChange}/>
            <Input label="Age" name="age" value={state.age} onChange={handleChange}/>
            <Input label="Email" name="email" value={state.email} onChange={handleChange}/>
            <button type="submit">Submit</button>
            <button type="button" onClick={handleReset}>Reset</button>
        </form>
    )
}
export default UserForm