import { useState, useEffect } from 'react';
import Autocomplete from 'react-autocomplete';

const AddSongToPlaylistForm = () => {
  const [value, setValue] = useState('');
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    //fetch songs and store in data
    //setSongs(data);
  }, []);

  return (
    <Autocomplete
      items={songs}
      shouldItemRender={(item, value) => item.title.toLowerCase().indexOf(value.toLowerCase()) > -1}
      getItemValue={item => item.title}
      renderItem={(item, highlighted) =>
        <div
          key={item.id}
          style={{ backgroundColor: highlighted ? '#eee' : 'transparent'}}
        >
          {item.title}
        </div>
      }
      value={value}
      onChange={e => setValue(e.target.value)}
      onSelect={value => setValue(value)}
    />
  );
};

export default AddSongToPlaylistForm;