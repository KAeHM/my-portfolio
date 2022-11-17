import {
  IconButton,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverBody,
  Text,
} from "@chakra-ui/react";

function TechIcon({ Icon, name }) {
  return (
    <Popover placement="bottom" trigger="hover">
      <PopoverTrigger>
        <IconButton
          bg={"#A38eFF"}
          color={"black"}
          icon={<Icon size={"25px"} />}
        />
      </PopoverTrigger>

      <PopoverContent w={120}>
        <PopoverArrow />
        <PopoverBody color={"black"} textAlign={"center"}>
          <Text>{name}</Text>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}

export default TechIcon;
