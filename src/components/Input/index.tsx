import { ChangeEventHandler } from "react";
import * as S from "./styles";

interface InputProps {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

export function Input({ placeholder, value, onChange }: InputProps) {
  return (
    <S.InputWrapper>
      <S.Input
        value={value}
        onChange={(e: { target: { value: string } }) =>
          onChange(e.target.value)
        }
        placeholder={placeholder}
      />
      <S.Button>
        <S.Icon />
      </S.Button>
    </S.InputWrapper>
  );
}
