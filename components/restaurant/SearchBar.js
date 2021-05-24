import { useState } from 'react';
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';
import { setSearchValue } from "../../redux/actions.js";
import { useDispatch } from "react-redux";


function SearchBar() {

  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState("");

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  function setSearch() {
    dispatch(setSearchValue(inputValue))
  }

  return <InputGroup className="my-2">
    <Input value={inputValue} onChange={handleInputChange} />
    <InputGroupAddon addonType="append">
      <Button color="primary" onClick={setSearch}>Търси</Button>
    </InputGroupAddon>
  </InputGroup>
}
export default SearchBar