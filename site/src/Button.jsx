import { Button } from "@ariakit/react";
import { useState } from "react";

export function ExampleButton() {
  const [presses, setPresses] = useState(0);
  return <Button className="button" onClick={() => setPresses(presses + 1)}>Button</Button>;
}
