import { FunctionalComponent } from "preact/src/index.d.ts";
import { Button } from "../components/Button.tsx";
import { useSignal } from "@preact/signals";

type ModuloProps = {
  title: string;
  texto: string;
};

export const Counter: FunctionalComponent<ModuloProps> = (props) => {
  const mostrar = useSignal(false);
  const tit = props.title;
  const texto = useSignal(props.texto);
  const inputText = useSignal("");

  return (
    <div className={"general"}>
      <div className={"card"}>
        <h1 style="font-family:BrushScript ">{tit}</h1>
        <Button
          onClick={() => {
            mostrar.value = !mostrar.value;
          }}
        >
          Mostrar más
        </Button>
      </div>
      {mostrar.value && (
        <div className={"text"}>
          <p>
            {texto.value}
          </p>
          <input
            type="text"
            value={inputText.value}
            onInput={(e) => {
              inputText.value = (e.target as HTMLInputElement).value;
              texto.value = inputText.value;
            }}
          />
        </div>
      )}
    </div>
  );
};
