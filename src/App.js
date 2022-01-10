import React, {useState} from 'react';
import Title from './comps/Title';
import './App.css'
import UploadForm from './comps/UploadForm';
import ImageGrid from './comps/ImageGrid';
import Modal from './comps/Modal';

function App() {
  const [url, setUrl] = useState(null)

  return (
    <div className="App">
      <Title/>
      <UploadForm />
      <ImageGrid setUrl={setUrl} />
      {url && <Modal url={url} setUrl={setUrl}/>}
    </div>
  );
}

export default App;