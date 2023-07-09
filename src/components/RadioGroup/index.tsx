import { ChangeEventHandler } from "react";
import * as S from "./styles";

interface RadioGroupProps {
  radios: Array<{
    name: string;
    value: string;
    label: string;
  }>;
  label: string;
  value: string;
  onChange: (value: string) => void;
}

export function RadioGroup({
  radios,
  label,
  value,
  onChange,
}: RadioGroupProps) {
  return (
    <S.Container>
      <S.RadioLabel>{label}</S.RadioLabel>
      <S.Content>
        {radios.map((radio) => (
          <S.Wrapper key={radio.name}>
            <S.Input
              type="radio"
              id={radio.label}
              name={radio.name}
              value={radio.value}
              checked={radio.value === value}
              onChange={(e: { target: { value: string } }) =>
                onChange(e.target.value)
              }
            />
            <S.Label htmlFor={radio.label}>{radio.label}</S.Label>
          </S.Wrapper>
        ))}
      </S.Content>
    </S.Container>
  );
}
