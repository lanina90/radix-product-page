import {TextField} from "@radix-ui/themes";
import {MagnifyingGlassIcon} from "@radix-ui/react-icons";


const Search = () => {
  return (
    <TextField.Root placeholder="Search" size="2" color="gray"
                    variant="soft" radius="large">
      <TextField.Slot>
        <MagnifyingGlassIcon height="16" width="16" />
      </TextField.Slot>
    </TextField.Root>
  );
};

export default Search;