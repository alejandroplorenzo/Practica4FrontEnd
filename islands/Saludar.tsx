import { FunctionComponent } from "https://esm.sh/v128/preact@10.19.6/src/index.js";
import HiButton from "./HiButton.tsx";
import Shower from "../components/Shower.tsx";
import { useSignal } from "@preact/signals";
import { useState } from "preact/hooks";

export const Saludar: FunctionComponent = () => {
    const SayHi = useSignal<string>("");
    const [nombre, setName] = useState<string>("");
    const [apellido, setLastName] = useState<string>("");

  return (
    <div class="formBody">
        <form class="formBox" method="get" action="/hihihi"
        onClick={(e) => {
          e.preventDefault();
          SayHi.value = `${nombre} ${apellido}`;
        }}
        >
            <h3>Say hi hi hi</h3>
            <input
                type="text"
                name="nombre"
                placeholder={"Name"}
                onInput={(e) => {
                    setName(e.currentTarget.value);
                }}
            />
            <br />
            <input
                    type="text"
                    name="apellido"
                    placeholder={"Last name"}
                    onInput={(e) => {
                        setLastName(e.currentTarget.value);
                    }}
                />
            <br />
        <HiButton>
          Hi!
        </HiButton>
      </form>
      <Shower
        text={SayHi}
      />
    </div>
  );
};