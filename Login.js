import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { Layout , Text , Input, Icon , Button} from '@ui-kitten/components';
import style from './Login.style';

//titolo ----------------------------
function Title(props) {
  let text = props.text
  let stile = props.style

  return(
      <Text category= 'h1' style = {stile}>{text}</Text>
  )
}


//casella username--------------
function TextField(props) {
  let [value , setValue] = React.useState('');

  function ChangeText(nextValue){
    setValue(nextValue)
  }

  return(
      <Input 
        label = 'inserisci username'
        placeholder={props.text}
        value = {value}
        status = 'primary'
        onChangeText = {ChangeText}
        style = {props.style}/>
  )
}

//casella di testo per la password
function PasswordField(props){
  let [value , setValue] = React.useState('');
  let [ShowPassword , setShowPassword] = React.useState(false);

  //cambia il testo ogni volta che scrivo
  function ChangeText(nextValue){
    setValue(nextValue)
  }

  //cambia lo stato della pssword
  function TurnOnIcon(){
    return(
      setShowPassword(!ShowPassword)
    )
  }

  //icona dell'occhio -----------------
  function EyeIcon(props) {
    return (
      <TouchableWithoutFeedback onPress = {TurnOnIcon}>
        <Icon {...props} name = {ShowPassword ? 'eye' : 'eye-off'}></Icon>
      </TouchableWithoutFeedback>
    )
  }

  return(
    <Input
      setValue = {value}
      label = {props.text}
      placeholder= {props.text}
      onChangeText = {ChangeText}
      secureTextEntry = {!ShowPassword}
      accessoryRight = {EyeIcon}
      status = 'primary'
      style = {props.style}
      >
    </Input>

  )
}


//Login --------------------
function Login({setSelected}){

  function setSelected (){
    return (true)
  }
  return(
      <Layout style = {style.contenitore}>
        <Title text = "Log in" style = {style.title}></Title>
        <TextField text = "inserisci username" style = {style.input}></TextField>
        <PasswordField text = "password" style = {style.input}></PasswordField>
        <Button style = {style.button} onPress = {setSelected}>ACCEDI</Button>
      </Layout> 
  )
}

export default Login;
