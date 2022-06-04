import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import Login from './Login';
import Profile from './Profile';


function App(){

  let [selected , setSelected] = React.useState(false);

  function ChangePage(select){
    setSelected(select);
  }

  return(
    <>
      <IconRegistry icons={EvaIconsPack}></IconRegistry>
      <ApplicationProvider {...eva} theme = {eva.dark}>
        {selected ? <Profile></Profile>  : <Login setSelected = {ChangePage}> </Login>}
      </ApplicationProvider>
    </>
  )
}

export default App;

