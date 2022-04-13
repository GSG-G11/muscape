function Selection() {
  return (
    <ul>
      <li>
        <button className="nav_button" type="button" id="selected_button">
          Albums
        </button>
      </li>
      <li>
        <button className="nav_button" type="button">
          Artists
        </button>
      </li>
      <li>
        <button className="nav_button" type="button">
          Playlists
        </button>
      </li>
    </ul>
  );
}

export default Selection;
