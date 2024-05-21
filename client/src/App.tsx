import './App.css';
import { AddChannel } from './components/AddChannel';
import { Authorization } from './components/Authozition';
import { Channels } from './components/Channels';
import { Members } from './components/Members';
import {Messages} from './components/Messages'
import { ModalProfile } from './components/ModalProfile';
import { Registration } from './components/Registration';
import { useChatContext } from './context/ChatContext';

function App() {

  const {onChannel, modalProfile, modalLogin, modalRegister, modalChannel} = useChatContext();

  return (
    <div 
      className='max-h-screen grid grid-cols-4 md:grid-cols-12 gap-4 grid-rows-3 h-screen bg-main'
    >
      {!onChannel
      ? <Channels />
      : <Members />}
      <hr className='w-full absolute z-10 top-12 left-0 border-black h-1 blur-xs'></hr>
      <Messages />
      {modalProfile && <ModalProfile />}
      {modalLogin && <Authorization />}
      {modalRegister && <Registration />}
      {modalChannel && <AddChannel />}
    </div>
  )
}

export default App
