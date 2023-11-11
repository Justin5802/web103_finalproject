
import { useState } from 'react';
import '../css/Form.css';
import { useNavigate } from 'react-router-dom'

const Form = () => {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    artist: '',
    genre: '',
    numOfSongs: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log('Form submitted:', formData);
    navigate('/myplaylists')
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>

        <label htmlFor="name">Name Of Playlist:</label>
        <input
            type="name"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
        />

        <label htmlFor="description">Add a description:</label>
        <textarea
        id="description"
        name="description"
        value={formData.message}
        onChange={handleChange}
        required
        />

        <label htmlFor="artist">Favorite Artist:</label>
        <input
          type="artist"
          id="artist"
          name="artist"
          value={formData.artist}
          onChange={handleChange}
          required
        />

        <label htmlFor="genre">Favorite Genre:</label>
        <input
          type="genre"
          id="genre"
          name="genre"
          value={formData.genre}
          onChange={handleChange}
          required
        />

        <label htmlFor="number">Number of Songs:</label>
        <input
          id="number"
          name="number"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <button className="form-btn" type="submit">Generate</button>
      </form>
    </div>
  );
};

export default Form;
